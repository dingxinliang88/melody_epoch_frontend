<script setup lang="ts">
import { ref } from 'vue'
import { AddAlbumReq } from "../../model/album/index"
import { addAlbum } from "../../service/album/index"
import { success } from '../../utils/common';
import { useRouter } from 'vue-router';

const albumAddReq = ref({} as AddAlbumReq)
const router = useRouter();

const onSubmit = async () => {
  const res = await addAlbum(albumAddReq.value);
  if (res.data) {
    success("创建成功")
  }
  router.push({
    path: "/album/curr",
    replace: true
  })
}
const onReset = () => {
  albumAddReq.value = {} as AddAlbumReq;
}

const goBack = () => {
  router.back();
}
</script>

<template>
  <el-page-header @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> 填写专辑信息 </span>
    </template>
  </el-page-header>
  <el-form :model="albumAddReq" label-width="120px" style="margin-top: 36px; text-align: center">
    <el-form-item label="专辑名称">
      <el-input v-model="albumAddReq.name" />
    </el-form-item>
    <el-form-item label="发行公司">
      <el-input v-model="albumAddReq.company" />
    </el-form-item>
    <el-form-item label="专辑简介">
      <el-input v-model="albumAddReq.profile" maxlength="250" show-word-limit :autosize="{ minRows: 2, maxRows: 6 }"
        type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">创建</el-button>
      <el-button type="info" @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>