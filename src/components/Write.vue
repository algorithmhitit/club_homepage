<template>
    <div>
        <p>wirte page router test 중입니다.</p>
        <vue-editor v-model="content"></vue-editor>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor"; //vue 게시글 작성 editor api

//console.log("Write page, 게시글 작성 페이지")
export default {
    name: 'Write',
    components: {
        VueEditor
    },
    data() {
        return {

        }
    },
    mounted() {
        //console.log("export default 에서 제대로 줄력해 주고 있습니다.")
    }
}
</script>

<style>

</style>
