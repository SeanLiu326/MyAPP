<template>
  <a-layout>
    <!-- <a-layout-header class="header">
      <a-menu></a-menu>
    </a-layout-header>
    <a-layout-content>Content</a-layout-content>
    <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>

<script lang="ts" setup>
  let h1 = window.document.createElement('h1')
  // console.log([h1]);
  const p1 = new Promise((resolve,reject) => {
    resolve('zheship1 resolve')
  })
  const p2 = new Promise((resolve,reject) => {
    resolve('zheship2 resolve')
    // reject('p2 reject')
  })
  const p3 = new Promise((resolve,reject) => {
    setTimeout(()=> {
      resolve(1111)
    },3000)
    
    // reject('p2 reject')
  })
  const pAll = Promise.all([p1 ,p2,p3])
  function logall() {
    console.log(Date.now());
    
    pAll.then(data => {
      let str:string = ''
      console.log(data);
      
      data.forEach(item => {
         str = str + item
      })
      console.log(str)
      console.log(Date.now());;
    }).catch(err => {
      console.log(err);
    })
  }
  logall()
</script>

<style lang="scss" scoped>
  .ant-layout-header{
    background-color: aliceblue !important;
  }
</style>