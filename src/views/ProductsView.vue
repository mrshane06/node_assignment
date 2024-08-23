<template>
  <div>
    <!-- Main Banner Area -->
    <div class="page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Check Our Products</h2>
              <span>Look Sharp, Shop Smart, Dress with Heart.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Area -->
    <section class="section" id="products">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="search-bar">
            <input type="text" v-model="searchQuery" placeholder="Search products...">
            <button @click="searchProducts">Search</button>
          </div>
          <div class="category-filter">
  <select v-model="selectedCategory">
    <option value="">All Categories</option>
    <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
  </select>
</div>
<div class="sort-by-price">
  <select v-model="sortByPrice">
    <option value="">Default</option>
    <option value="asc">Lowest Price</option>
    <option value="desc">Highest Price</option>
  </select>
</div>

          <div
            v-for="(product, index) in products"
            :key="index"
            class="col-lg-4"
          >
            <div class="item">
              <div class="thumb">
                <div class="hover-content">
                  <ul>
                    <li><router-link :to="{ name: 'single-product', params: { id: product.product_id } }"><i class="bi bi-eye"></i></router-link></li>
                    <li><a href="single-product.html"><i class="bi bi-star-fill"></i></a></li>
                    <li><a href="single-product.html"><i class="bi bi-bag-check"></i></a></li>
                  </ul>
                </div>
                <img :src="product.image" :alt="product.title" />
              </div>
              <div class="down-content">
                <h4>{{ product.title }}</h4>
                <span>{{ product.price }}</span>
                <ul class="stars">
                  <li v-for="star in product.stars" :key="star"><i class="fa fa-star"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="pagination">
              <ul>
                <li v-for="page in pages" :key="page.number" :class="{ active: page.active }">
                  <a href="#">{{ page.number }}</a>
                </li>
                <li><a href="#"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      originalProducts: [], // store original products here
      searchQuery: '',
      categories: ['mens', 'womens', 'kids'],
      selectedCategory: '',
      sortByPrice: ''
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      await axios.get('https://node-assignment-1-nfwz.onrender.com/products')
        .then(response => {
          const mappedProducts = response.data.map(product => ({
            title: product.prodName,
            image: product.prodURL,
            price: product.amount,
            category: product.category ,
            product_id: product.product_id// add category property
          }))
          this.originalProducts = mappedProducts // store original products
          this.products = mappedProducts
        })
        .catch(error => {
          console.error(error)
        })
    },
    async searchProducts() {
      const filteredProducts = this.originalProducts.filter(product => {
        return product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
      this.products = filteredProducts
    },
    async filterByCategory() {
      if (this.selectedCategory === '') {
        this.products = this.originalProducts // reset to original products
      } else {
        const filteredProducts = this.originalProducts.filter(product => {
          return product.category === this.selectedCategory
        })
        this.products = filteredProducts
      }
    },
    async sortProducts() {
      if (this.sortByPrice === 'asc') {
        this.products.sort((a, b) => a.price - b.price)
      } else if (this.sortByPrice === 'desc') {
        this.products.sort((a, b) => b.price - a.price)
      }
    }
  },
  watch: {
    selectedCategory() {
      this.filterByCategory()
    },
    sortByPrice() {
      this.sortProducts()
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
