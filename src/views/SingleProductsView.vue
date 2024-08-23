<template>
  <!-- ***** Main Banner Area Start ***** -->
  <div class="page-heading" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner-content">
            <h2>Single Product Page</h2>
            <span>Look Sharp, Shop Smart, Dress with Heart.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->


  <!-- ***** Product Area Starts ***** -->
  <section class="section" id="product">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="left-images">
            <img :src="product.prodURL" alt="">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="right-content">
            <h4>{{ product.prodName }}</h4>
            <span class="price">${{ product.amount }}</span>
            <p>Quantity: {{ product.quantity }}</p>
            <p>Category: {{ product.category }}</p>
            <div class="quantity-content">
              <div class="left-content">
                <h6>No. of Orders</h6>
              </div>
              <div class="right-content">
                <div class="quantity buttons_added">
                  <input type="button" value="-" class="minus" @click="decrementQuantity">
                  <input type="number" step="1" min="1" max="" name="quantity" v-model="quantity" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
                  <input type="button" value="+" class="plus" @click="incrementQuantity">
                </div>
              </div>
            </div>
            <div class="total">
              <h4>Total: ${{ total }}</h4>
              <div class="main-border-button"><a href="#" @click="addToCart">Add To Cart</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ***** Product Area Ends ***** -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      product: {},
      quantity: 1,
      total: 0
    }
  },
  mounted() {
  const productId = this.$route.params.id
  console.log(`ProductId: ${productId}`)
  axios.get(`https://node-assignment-1-nfwz.onrender.com/products/${productId}`)
    .then(response => {
      console.log('API Response:', response.data)
      this.product = response.data
      this.total = this.product.amount * this.quantity
    })
    .catch(error => {
      console.error(error)
      // Display error message or redirect to error page
    })
  },
  methods: {
    decrementQuantity() {
      this.quantity -= 1
      this.total = this.product.amount * this.quantity
    },
    incrementQuantity() {
      this.quantity += 1
      this.total = this.product.amount * this.quantity
    },
    addToCart() {
      // Implement logic for adding product to cart
    }
  }
}
</script>

<style>

</style>