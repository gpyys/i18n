<template>
  <div class="box">
    <button @click="changeLan">{{$t('btnText')}}</button>
    <div class="item">
      <div class="item_l">
        <img src="/vite.svg" alt="Vite logo" style="width:100%" />
      </div>
      <div class="item_r">
        <p class="title">vite</p>
        <p class="des">{{$t('home.des1')}}</p>
      </div>
    </div>
    <div class="item">
      <div class="item_l">
        <img src="../assets/vue.svg" alt="Vue logo" style="width:100%" />
      </div>
      <div class="item_r">
        <p class="title">vue</p>
        <p class="des">{{$t('home.des2')}}</p>
      </div>
    </div>
  </div>
</template>
<script setup name="List">
function changeLan(){
  console.log(localStorage.getItem('locale'))
  let lan = localStorage.getItem('locale') === 'zh' ? 'en' : 'zh'
  localStorage.setItem('locale',lan)
}
</script>
<style scoped>
.box{
  padding: 30px;
  border:1px solid red;
}
.item{
  display: flex;
  height: 100px;
  margin: 30px;
  background: #eee;
}
.item_l{
  width: 100px;
  height: 100px;
  margin-right:20px;
}
.item_r{
  text-align: left;
  line-height: 50px;
}
.title{
  font-size: 28px;
}
</style>