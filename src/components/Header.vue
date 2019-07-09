<template>
    <header>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">            
          <ul>
              <li>
                <router-link to ='./introduce'> 
              <!--<img src="../assets/hitit_logo.png"  height="100" >-->
              <font size="100" >Hitit</font>
                </router-link> 
              </li>

              <li><router-link to='./introduce'>소개</router-link></li>
              <li><router-link to="./notice">공지사항</router-link></li>
              <li><router-link to="./board-page">게시판</router-link></li>
              <li><router-link to='./picture'>사진첩</router-link></li>
          </ul>
        </nav>
      </div>
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
<style scoped>
  header {
    background : greenyellow;
    color: white;
  };
</style>
