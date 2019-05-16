<template>
    <header>
        <img src="../assets/hitit_logo.png">
        <nav class="navbar">
            <ul>
                <li><a v-bind:href="host">소개</a></li>
                <li><a v-bind:href="host">공지사항</a></li>
                <li><a v-bind:href="host">게시판</a></li>
                <li><a v-bind:href="host">사진첩</a></li>
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
