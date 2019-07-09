<template>
    <form>
        <div>
            <!--제목 input 필요-->
            <div class="form-group">
                <label for="inputTitle">제목</label>
                <input type="text" class="form-control" id="inputTitle" aria-describedby="emailHelp" placeholder="제목을 작성하여 주세요">
            </div>

            <vue-editor v-model="content"></vue-editor>
            <button type="button" class="btn btn-primary">게시하기</button>
            <button type="button" class="btn btn-danger">취소</button>
        </div>
    </form>
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
