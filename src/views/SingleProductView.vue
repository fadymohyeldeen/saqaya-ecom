<template>
  <div class="single-product">
    <AppBreadcrumb :items="breadcrumbs" />

    <div class="single-product__main">
      <ProductGallery
        :images="product.images"
        :selectedImage="selectedImage"
        :alt="product.name"
        @select="selectedImage = $event"
      />
      <ProductInfo
        :product="product"
        :quantity="quantity"
        @increase-qty="increaseQty"
        @decrease-qty="decreaseQty"
      />
    </div>

    <ProductsSection
      label="More of this category"
      :products="relatedProducts"
    />
  </div>
</template>

<script>
import AppBreadcrumb from "@/components/shared/AppBreadcrumb.vue";
import ProductGallery from "@/components/SingleProduct/ProductGallery.vue";
import ProductInfo from "@/components/SingleProduct/ProductInfo.vue";
import ProductsSection from "@/components/shared/ProductsSection.vue";

export default {
  name: "SingleProductView",
  components: {
    AppBreadcrumb,
    ProductGallery,
    ProductInfo,
    ProductsSection,
  },
  data() {
    return {
      selectedImage: 0,
      quantity: 1,
      breadcrumbs: [
        { label: "Home", to: "/" },
        { label: "Products", to: "/products" },
        { label: "Havic HV G-92 Gamepad" },
      ],
      product: {
        name: "Havic HV G-92 Gamepad",
        rating: 4,
        reviews: 150,
        price: 192.0,
        discount: 35,
        description:
          "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        category: "Gaming",
        images: [
          "https://dummyjson.com/image/400x400/f5f5f5?text=Image+1",
          "https://dummyjson.com/image/400x400/f5f5f5?text=Image+2",
          "https://dummyjson.com/image/400x400/f5f5f5?text=Image+3",
          "https://dummyjson.com/image/400x400/f5f5f5?text=Image+4",
        ],
      },
      relatedProducts: [
        {
          id: 101,
          name: "HAVIT HV-G92 Gamepad",
          price: 120,
          originalPrice: 160,
          discount: 40,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 88,
        },
        {
          id: 102,
          name: "AK-900 Wired Keyboard",
          price: 960,
          originalPrice: 1160,
          discount: null,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 4,
          reviews: 75,
        },
        {
          id: 103,
          name: "IPS LCD Gaming Monitor",
          price: 370,
          originalPrice: 400,
          discount: 30,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 5,
          reviews: 99,
        },
        {
          id: 104,
          name: "RGB liquid CPU Cooler",
          price: 160,
          originalPrice: 170,
          discount: null,
          image:
            "https://cdn1.smartmedia.is/computer/skrar/vara/108050507_8915072497/108050507_8915072497_540_540_2.jpg",
          rating: 4,
          reviews: 65,
        },
      ],
    };
  },
  methods: {
    increaseQty() {
      this.quantity++;
    },
    decreaseQty() {
      if (this.quantity > 1) this.quantity--;
    },
  },
};
</script>

<style scoped>
/* ─── Mobile base ─── */
.single-product__main {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 60px;
}

/* ─── Tablet (768px+) ─── */
@media (min-width: 768px) {
  .single-product__main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 80px;
  }
}

/* ─── Desktop (1024px+) ─── */
@media (min-width: 1024px) {
  .single-product__main {
    grid-template-columns: 670px 1fr;
    gap: 60px;
    margin-bottom: 140px;
  }
}
</style>
