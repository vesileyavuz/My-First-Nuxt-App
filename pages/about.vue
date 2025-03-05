<template>
    <div>
      <h2>About</h2>
     <div>{{ data }}</div>
    </div>
  </template>
  
  <script setup>
    const { data } = await useFetch('/api/ninja?name=mario', {
      method: 'post',
      body: { age: 24 }
  })
  </script>
  
  <style scoped>
    h2 {
      margin-bottom: 20px;
      font-size: 36px;
      color: red;
    }
  
    p {
      margin: 20px 0;
      font-size: 18px;
      color: blue;
    }
  </style>
  