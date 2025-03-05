
# Nuxt.js Projesi Kurulum Rehberi

Bu **Nuxt.js** projesi sıfırdan oluşturulmuştur. Bu rehber, projenin nasıl başlatıldığını, gerekli araçları ve komutları adım adım açıklamaktadır.

---

## Gerekli Programlar

Projenin kurulumu ve çalıştırılması için aşağıdaki yazılımlar bilgisayarınızda kurulu olmalıdır:

1. **Node.js**: Nuxt.js, Node.js üzerine kuruludur. Bu yüzden Node.js'in bilgisayarınızda yüklü olması gerekir.
   - Node.js'i [buradan indirebilirsiniz](https://nodejs.org/).
   
2. **npm** veya **yarn**: Proje bağımlılıklarını yönetmek için **npm** ya da **yarn** kullanabilirsiniz.
   - **npm**, Node.js ile birlikte gelir.
   - **yarn** kullanmak isterseniz, [yarn'ı buradan indirebilirsiniz](https://yarnpkg.com/).

---

## Adım Adım Nuxt.js Projesi Oluşturma

### **1. Yeni Bir Nuxt.js Projesi Başlatmak**

Projeyi başlatmak için terminali (komut satırı) açarak aşağıdaki komutları sırasıyla çalıştırdık:

#### **Proje Oluşturma:**

Yeni bir Nuxt.js projesi oluşturmak için **npx** komutunu kullanarak Nuxt CLI aracı ile projeyi başlattık. `my-nuxt-project` kısmını kendi proje adınızla değiştirebilirsiniz.

```bash
npx nuxi init my-nuxt-project
```
Bu komut, Nuxt.js tarafından sıfırdan bir proje yapılandırması başlatır.

#### **Bağımlılıkların Yüklenmesi:**

Projenin oluşturulmasının ardından, proje dizinine giderek gerekli tüm bağımlılıkları yükledik.
```cd my-nuxt-project```
```npm install```

Bu komut, projenin bağımlılıklarını yükler ve projeniz çalışmaya hazır hale gelir.

### **2. Nuxt.js Projesini Çalıştırma**

#### **Geliştirme Sunucusunu Başlatma:**

Projeyi çalıştırmak için aşağıdaki komutu kullandık. Bu komut, geliştirme sunucusunu başlatır ve projeyi tarayıcıda görüntülememize olanak tanır.

`npm run dev`

Sunucu başlatıldığında, projeyi http://localhost:3000 adresinden görüntüleyebilirsiniz.

### **3. Proje Yapısını Anlamak**

Nuxt.js ile sıfırdan bir proje başlattığınızda, proje yapısının temel bileşenleri şu şekilde olur:

-   **pages/**: Sayfalarınızı burada bulundurursunuz. Her `.vue` dosyası otomatik olarak bir sayfa olur.
-   **components/**: Uygulama içinde kullanılacak bileşenler burada yer alır.
-   **layouts/**: Sayfalarınızın düzenini (header, footer vb.) burada ayarlarsınız.
-   **store/**: Vuex store dosyaları burada bulunur (uygulama durumu yönetimi için).
-   **assets/**: Resimler, stil dosyaları (CSS/Sass) gibi varlıklar burada saklanır.
-   **static/**: Statik dosyalar (favicon, robot.txt vb.) bu dizinde yer alır.

### **4. Proje Yapılandırması ve Özelleştirme**

#### **Tailwind CSS Kurulumu:**

Projenin stilini özelleştirmek için **Tailwind CSS** kullanmaya karar verdik. Tailwind'i kurmak için aşağıdaki komutları çalıştırdık:
```npm install -D tailwindcss postcss autoprefixer```
```npx tailwindcss init```

Sonrasında, Tailwind'i proje dosyasına dahil etmek için **`tailwind.config.js`** ve **`postcss.config.js`** dosyalarını oluşturduk.
**`tailwind.config.js`** dosyasının içeriği şu şekilde:

```
module.exports = {
  content: [
    './pages/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
**`postcss.config.js`** dosyasının içeriği şu şekilde:
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
Ve **`assets/css/tailwind.css`** dosyasını oluşturduk ve Tailwind CSS direktiflerini ekledik:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Ardından, bu CSS dosyasını **`nuxt.config.ts`**'ye ekledik:
```
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css']
})
```
### **5. Projeye Bileşen ve Sayfa Eklemek**

Projeye yeni bileşenler eklemek için **components/** klasörüne `.vue` dosyaları ekledik. Örnek olarak, bir ürün kartı bileşeni oluşturduk:

```
<template>
  <div class="card">
    <img :src="product.image" alt="product image" class="product-image"/>
    <p class="font-bold">{{ product.title }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
</script>` 
```

Yeni bir sayfa eklemek için **pages/** klasörüne bir dosya ekledik. Örneğin, **`pages/products.vue`** sayfasını oluşturarak bu sayfada ürünleri listelemeyi sağladık.

## Sonuç

Bu rehberde, sıfırdan bir Nuxt.js projesi başlatmanın ve yapılandırmanın temel adımlarını gösterdik. Proje, geliştirme sürecinde Tailwind CSS ile özelleştirildi ve bileşenler eklenerek dinamik sayfalar oluşturuldu.