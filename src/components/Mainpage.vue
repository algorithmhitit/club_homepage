<!--main page-->
<template>

  <div class="container" > 
    <h1>HITIT</h1>  
    <p>Hitit은 도래하고있는 정보화시대에 있어 필수불가결한 웹 분야에 중점을 두고 활동하는 전북대학교 유일의 웹동아리입니다.</p>
	<p> 2012년 창설 이후 이러한 웹기술에 관심이 있는 학생들이 모여 프로그래밍 스터디나 홈페이지 제작 실습을 통해 웹에 대한 깊이 있는 탐구를 진행해오고 있습니다.</p>
	<p> 또한 재학생과 신입생간의 스터디 활동과 MT, 체육대회 등의 다양한 친목활동을 통해 동아리원끼리의 화합도 도모하고 있습니다.</p>
	</div>
</template>

<script>
export default {
  name: 'Mainpage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-family: 'Arima Madurai', cursive;
	color: black;
	font-size: 4rem;
	letter-spacing: -3px;
	text-shadow: 0px 1px 1px rgba(255,255,255,0.6);
	position: relative;
	z-index: 3;
};
</style>
