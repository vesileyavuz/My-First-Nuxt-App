<template>
    <div>
      <header class="shodow-sm bg-white">
        <nav class="container mx-auto p-4">
          <NuxtLink to="/products" class="font-bold">Nuxt</NuxtLink>
        </nav>
      </header>

      <div class="container mx-auto p-4">
        <slot />
      </div>
      <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Anasayfa</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
      </footer>  
    </div>

  </template>

  <style scoped>
  .router-link-active {
    color: red;
  }
  </style>