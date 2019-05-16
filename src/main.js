import Vue from 'vue'
import Router from 'vue-router'//vue route에 대한 내용을 가져온다.
import App from './App'
import routes from './routes'//routes를 main에 import 해준다, route에 대한 내용

//vue router 사용법
//http://vuejs.kr/update/2017/01/08/using-vue-with-vuex-vue-rotuer/
//vue에 vue-router를 사용할 것을 알려준다.
Vue.use(Router)
//router 인스턴스를 만든다.
const router = new Router({
  //mode: 'history',
  //scrollBehavior: () => ({y:0}),
  routes
  //routes.js.에 있는 script를 불러온다,routes:routes의 줄임
  //ex) {path : '/' component:Home },
})

Vue.config.productionTip = false
//vue-devtools를 사용할수 있게 한다. 개발용 빌드시 true, 배표용 빌드에서는 false가 기본
Vue.config.devtools = true

new Vue({
  render: h => h(App),
  
  //router 객체를 넘겨준다. 
  //view-router를 사용하려면 이속성으로 view router 객체를 넘겨줘야한다.
  //실제 사용할 Vue에 인스턴스를 만든다.
  router
}).$mount('#app')
//vm.$mount([elementOrSelector])
//인스턴스 메소드/라이프 사이클, vm - 인스턴스 그 자체
//
