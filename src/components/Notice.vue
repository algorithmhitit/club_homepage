<!--공지사항 페이지-->

<!--template-->
<template>
    <div>
        <h1>공지사항</h1>
        <h1>Contact Management</h1>
        <div id='vueapp'>

            <table border='1' width='100%' style='border-collapse: collapse;'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>City</th>
                <th>Job</th>

            </tr>

            <!--<tr v-for='contact in contacts'>
                <td>{{ contact.name }}</td>
                <td>{{ contact.email }}</td>
                <td>{{ contact.country }}</td>
                <td>{{ contact.city }}</td>
                <td>{{ contact.job }}</td>
            </tr>-->
            </table>
        </div>
    </div>
</template>

<!--vue script 파일-->
<script>
export default {
    name : "Notice"
}
/*
var app = new Vue({
  el: '#vueapp',
  data: {
      name: '',
      email: '',
      country: '',
      city: '',
      job: '',
      contacts: []
  },
  mounted: function () {
    console.log('Hello from Vue!')
    this.getContacts()
  },

  methods: {
    getContacts: function(){
    },
    createContact: function(){
    },
    resetForm: function(){
    }
  }
})*/ 
</script>

<!--공지사항 style code-->
<style>

</style>