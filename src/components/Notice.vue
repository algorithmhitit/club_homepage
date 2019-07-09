<!--공지사항 페이지-->

<!--template-->
<template>
    <div>
        <h1>공지사항</h1>
        <div id="postlist">

            <table class = "table">
                <thead class="thead-dark">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>조회</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="content in contents" v-bind:key = "content.id">
                        <td>{{content.index }}</td>
                        <td>{{content.title }}</td>
                        <td>{{content.author }}</td>
                        <td>{{content.views }}</td>
                        <td>{{content.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button><router-link to="./wirte">글쓰기</router-link></button>
    </div>
</template>

<!--vue script 파일-->
<script>
//import Vue from 'vue'

export default {
    name : "Notice",
    data() {
        return {contents:[
            {index: 1, title: 'test1', author: 'James', views: 10, date: '2019-05-29'},
            {index: 2, title: 'test2', author: 'Poter', views: 10, date: '2019-05-29'},
            {index: 4, title: 'test4', author: 'Poter', views: 10, date: '2019-05-29'},
            {index: 5, title: 'test5', author: 'Poter', views: 10, date: '2019-05-29'},
            {index: 3, title: 'test3', author: 'Mike', views: 10, date: '2019-05-29'}
        ]};
    }
};

</script>

<!--공지사항 style code-->
<style>

</style>