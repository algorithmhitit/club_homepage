<template>
  <div id="app">
    <Header/>
    <mainpage msg="HITIT"/>
    <Footer msg="footer"/>
  </div>
</template>

<script>
import Mainpage from './components/Mainpage.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Mainpage,
    Footer
  },
  data() {
    return {
      host: "http:localhost:8080"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
