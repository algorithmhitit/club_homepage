<template>
    <footer>
        <p>동아리 위치 : {{club_location}}</p>
        <p>동아리 회장 : {{club_president}}</p>
        <p>전화번호 : {{club_contact}}</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            club_location: "전북대 공대 7호관 지하 7007호",
            club_president: "정인수",
            club_contact: "010-4311-0624",
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
    position:fixed;
    bottom : 0;
  width:100%;
  background-color: #42b983;
  color: white;
  text-align: center;
}
</style>
