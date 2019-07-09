<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark pink scrolling-navbar">         
        <!--<img src="../assets/hitit_logo.png"  height="100">-->
        <ul class="mr-auto navbar-nav">
            <li class="nav-item active">
              <router-link to ='./introduce'>
                <font size="100" >Hitit</font>
              </router-link> 
            </li>

            <li class="nav-item"><router-link to='./introduce'>소개</router-link></li>
            <li class="nav-item"><router-link to="./notice">공지사항</router-link></li>
            <li class="nav-item"><router-link to="./board-page">게시판</router-link></li>
            <li class="nav-item"><router-link to='./picture'>사진첩</router-link></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    msg: String
  },
  data() {
      return {
          host:"http://localhost:8080",
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  header {
        background : greenyellow;
        color: white;
    };
</style>
