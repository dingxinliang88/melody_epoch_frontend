<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ReleaseSongReq, Song } from "../../model/song/index";
import { currBandSongsByPage, releaseSong } from "../../service/song/index";
import { useRouter } from "vue-router";
import { Promotion } from "@element-plus/icons-vue";
import { success } from '../../utils/common';
import { FanInfo } from "../../model/fan";
import { GENDER_MAP } from "../../utils";
import { getSongFansByBandIdAndPage } from "../../service/fan";

const router = useRouter();

const tableData = ref<Song[]>([]);

/**
 * 挂载时处理一些数据
 */
onMounted(async () => {
  await loadDataByPage();
});


const goBack = () => {
  router.back();
}
const doReleaseSong = async (_: any, row: any) => {
  const req = {} as ReleaseSongReq;
  req.songId = row.songId;
  const res = await releaseSong(req)
  if (res) {
    success("发布成功！")
    await loadDataByPage();
  }
}

const total = ref(0);
let currPage = 1
const onCurrChange = async (curr: number) => {
  currPage = curr
  await loadDataByPage();
}

const pageSize = 15;
const loadDataByPage = async () => {
  const res = await currBandSongsByPage(currPage, pageSize);
  total.value = res.total
  tableData.value = res.records.map((info: Song) => {
    return {
      ...info,
      albumName: info.albumName ?? " - "
    };
  });
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
  currSongId = row.songId;
  showFanOpt.value = true;
  await loadCurrSongFansByPage();
}
let fanCurrPage = 1;
const fanTotal = ref(0);
let currSongId: number = 0;
const onFanCurrChange = async (curr: number) => {
  fanCurrPage = curr
  await loadCurrSongFansByPage();
}
const loadCurrSongFansByPage = async () => {
  const res = await getSongFansByBandIdAndPage(currSongId, fanCurrPage, pageSize);
  fanTotal.value = res.total;
  fanInfoList.value = res.records;
}
</script>

<template>
  <el-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> 歌曲信息 </span>
    </template>
  </el-page-header>
  <el-table :data="tableData" style="width: 100%; margin-top: 36px;" class="container">
    <el-table-column fixed prop="songId" label="歌曲序号" width="150" />
    <el-table-column prop="name" label="歌曲名称" width="150" />
    <el-table-column prop="author" label="作者" width="150" />
    <el-table-column prop="albumName" label="所属专辑名称" width="150" />
    <el-table-column fixed="right" label="操作" width="200">
      <template #default="scope">
        <el-button disabled v-if="scope.row.isRelease === 1" :icon="Promotion" link type="success">已发布</el-button>
        <el-button :icon="Promotion" v-else link type="success"
          @click="doReleaseSong(scope.$index, scope.row)">发布</el-button>
        <el-button link type="primary" @click="doShowFans(scope.row)">歌迷信息</el-button>
      </template>
    </el-table-column>
    <template #empty>
      <el-empty :image-size="100" />
    </template>
  </el-table>
  <el-pagination background :current-page="currPage" layout="prev, pager, next" :total="total" :page-size="pageSize"
    @current-change="onCurrChange" />


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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.el-pagination {
  justify-content: center;
  margin-top: 16px;
}
</style>
