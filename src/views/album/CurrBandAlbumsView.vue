<script setup lang="ts">
import { onMounted, ref } from "vue";
import { AlbumInfo, EditAlbumReq, ReleaseAlbumReq } from "../../model/album/index";
import { releaseAlbumInfo, editAlbumInfo, currBandAllAlbumsByPage } from "../../service/album/index";
import { useRouter } from "vue-router";
import { Promotion } from "@element-plus/icons-vue";
import { GENDER_MAP, formatDate } from "../../utils";
import { success } from "../../utils/common";
import { FanInfo } from "../../model/fan";
import { getAlbumFansByBandIdAndPage } from "../../service/fan";

const router = useRouter();
const doGetAlbumDetail = (_: any, row: any) => {
  router.push({
    path: "/album/info",
    query: {
      id: row.albumId
    }
  });
};

const doReleaseAlbum = async (_: any, row: any) => {
  const req = {} as ReleaseAlbumReq;
  req.albumId = row.albumId;
  const res = await releaseAlbumInfo(req)
  if (res) {
    success("发布成功");
    await loadAlbumByPage();
  }
}

/**
 * 挂载时处理一些数据
 */
onMounted(async () => {
  await loadAlbumByPage();
});

const goBack = () => {
  router.back();
}

/**
 * 专辑信息
 */
const albumTotal = ref(0);
let albumCurrPage = 1
const pageSize = 6;
const onAlbumCurrChange = async (curr: number) => {
  albumCurrPage = curr
  await loadAlbumByPage();
}
const bandAlbumInfo = ref<AlbumInfo[]>([])
const loadAlbumByPage = async () => {
  const res = await currBandAllAlbumsByPage(albumCurrPage, pageSize);
  albumTotal.value = res.total
  bandAlbumInfo.value = res.records.map((info: AlbumInfo) => {
    return {
      ...info,
      avgScore: info.avgScore ?? 0.0,
      releaseTime: info.releaseTime ? formatDate(info.releaseTime) : " - "
    };
  });
}


const editAlbumOpt = ref(false)
const editAlbumReq = ref({} as EditAlbumReq)

const onAlbumEdit = (row: any) => {
  editAlbumOpt.value = true;
  editAlbumReq.value.albumId = row.albumId
  editAlbumReq.value.profile = row.profile;
}
const onAlbumEditSubmit = async () => {
  const res = await editAlbumInfo(editAlbumReq.value);
  if (res) {
    success("修改成功！")
    editAlbumOpt.value = false;
    editAlbumReq.value = {} as EditAlbumReq;
    await loadAlbumByPage();
  }
}

const onAlbumEditCancel = () => {
  editAlbumOpt.value = false;
  editAlbumReq.value = {} as EditAlbumReq;
}


/**
 * 歌迷信息
 */
const showFanOpt = ref(false);
const fanInfoList = ref<FanInfo[]>([]);
const sexFormatter = (_: any, __: any, cellValue: any, ___: any) => {
  return GENDER_MAP[cellValue];
}
const doShowFans = async (row: any) => {
  currAlbumId = row.albumId;
  showFanOpt.value = true;
  await loadCurrAlbumFansByPage();
}
let fanCurrPage = 1;
const fanTotal = ref(0);
let currAlbumId: number = 0;
const onFanCurrChange = async (curr: number) => {
  fanCurrPage = curr
  await loadCurrAlbumFansByPage();
}
const loadCurrAlbumFansByPage = async () => {
  const res = await getAlbumFansByBandIdAndPage(currAlbumId, fanCurrPage, pageSize);
  fanTotal.value = res.total;
  fanInfoList.value = res.records;
}
</script>

<template>
  <el-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> 专辑信息 </span>
    </template>
  </el-page-header>
  <el-table :data="bandAlbumInfo" style="width: 100%; margin-top: 36px;" stripe>
    <el-table-column fixed prop="albumId" label="专辑序号" width="120" />
    <el-table-column prop="name" label="专辑名称" width="150" />
    <el-table-column prop="company" label="发行公司" width="150" />
    <el-table-column prop="releaseTime" label="发行时间" width="150" />
    <el-table-column prop="bandName" label="乐队名称" width="150" />
    <el-table-column prop="avgScore" label="专辑均分" width="120" />
    <el-table-column prop="profile" label="专辑简介" width="150" />
    <el-table-column fixed="right" label="操作" width="300">
      <template #default="scope">
        <el-button disabled :icon="Promotion" v-if="scope.row.isRelease === 1" link type="info">已发布</el-button>
        <el-button :icon="Promotion" v-else link type="success"
          @click="doReleaseAlbum(scope.$index, scope.row)">发布</el-button>
        <el-button link type="primary" @click="doGetAlbumDetail(scope.$index, scope.row)">详情</el-button>
        <el-button link type="primary" @click="onAlbumEdit(scope.row)">修改</el-button>
        <el-button link type="primary" @click="doShowFans(scope.row)">歌迷信息</el-button>
      </template>
    </el-table-column>
    <template #empty>
      <el-empty :image-size="100" />
    </template>
  </el-table>

  <el-pagination background :current-page="albumCurrPage" layout="prev, pager, next" :total="albumTotal"
    :page-size="pageSize" @current-change="onAlbumCurrChange" />

  <el-drawer v-model="editAlbumOpt" title="修改专辑信息" direction="rtl" size="80%">
    <!-- 修改昵称等信息 -->
    <el-form label-width="120px">
      <el-form-item label="简介">
        <el-input v-model="editAlbumReq.profile" maxlength="250" show-word-limit :autosize="{ minRows: 2, maxRows: 6 }"
          type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onAlbumEditSubmit">修改</el-button>
        <el-button @click="onAlbumEditCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>

  <el-drawer v-model="showFanOpt" title="歌迷信息" direction="rtl" size="70%">
    <!-- 乐迷信息 -->
    <el-table :data="fanInfoList" style="width: 100%" max-height="250">
      <el-table-column fixed prop="fanId" label="乐迷序号" width="150" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="gender" label="性别" width="120" :formatter="sexFormatter" />
      <el-table-column prop="age" label="年龄" width="120" />
      <el-table-column prop="career" label="职业" width="120" />
      <el-table-column prop="education" label="学历" width="120" />
      <template #empty>
        <el-empty :image-size="60" />
      </template>
    </el-table>
    <el-pagination background :current-page="fanCurrPage" layout="prev, pager, next" :total="fanTotal"
      :page-size="pageSize" @current-change="onFanCurrChange" />
  </el-drawer>
</template>

<style scoped>
.el-pagination {
  justify-content: center;
  margin-top: 16px;
}
</style>
