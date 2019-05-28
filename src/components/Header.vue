<template>
    <header >
        
        <nav class="navbar">            
            <ul>
                <li>
                  <router-link to ='./introduce'> 
                 <img src="../assets/hitit_logo.png"  height="100" >
                 <font size="100" >Hitit</font>
                  </router-link> 
                </li>

                <li><router-link to='./introduce'>소개</router-link></li>
                <li><router-link to="./notice">공지사항</router-link></li>
                <li><router-link v-bind:to="{ name: 'board-page'}">게시판</router-link></li>
                <li><router-link to='./picture'>사진첩</router-link></li>
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
header {
  padding: 10px;
  left:0;
  top:0;
  right:0;
  text-align: center;
  background: #42b983;
  color: white;
  font-size: 30px;
}
</style>
