<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-05 10:46:24
 * @LastEditTime: 2023-01-17 16:47:18
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \muyi.dev\components\githubIcon.vue
-->
<template>
    <div style="display: flex" v-if="name">
        <!-- <img
            :src="`https://img.shields.io/github/last-commit/nmtuan/${name}?style=flat-square`"
        /> -->
        <img
            :src="`https://img.shields.io/github/stars/nmtuan/${name}?style=flat-square`"
        />
    </div>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        default: ''
    }
})
</script>
