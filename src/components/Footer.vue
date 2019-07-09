<template>
    <footer class="bd-masthead-followup row m-0 border border-white">
        <div class ="container-fluid p-3 p-md-5">
            <p>동아리 위치 : {{club_location}}</p>
            <p>동아리 회장 : {{club_president}}</p>
            <p>전화번호 : {{club_contact}}</p>
        </div>
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
        background : greenyellow;
        color: white;
    };
</style>
