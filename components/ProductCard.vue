<template>
    <div class="card">
      <img :src="product.image" alt="product thumb" class="thumb" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <button class="btn">View Details</button>
      </NuxtLink>
    </div>
  </template>
  

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* İçeriği ve butonu dikey olarak hizalar */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  height: 100%; /* Kart yüksekliği dinamik olur, içeriğe göre ayarlanır */
}

.thumb {
  width: 90%; /* Görselin genişliği %100 */
  height: 200px; /* Görselin yüksekliği belirli bir değere sabitlenir */
  border-radius: 8px;
  object-position: center; /* Görselin ortalanmasını sağlar */
}

.font-bold {
  font-size: 16px;
  font-weight: bold;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn {
  margin-top: auto; /* Butonu en alta yerleştirir */
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.btn:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .card {
    height: auto; /* Küçük ekranlarda kart yüksekliği içerik kadar esner */
  }

  .btn {
    padding: 12px 0; /* Buton boyutu mobilde artırılır */
  }

  .thumb {
    height: 150px; /* Mobilde görselin yüksekliği daha küçük yapılır */
  }
}
</style>

