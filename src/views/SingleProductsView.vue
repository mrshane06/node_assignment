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
            <img src="assets/images/single-product-01.jpg" alt="">
            <img src="assets/images/single-product-02.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="right-content">
            <h4>{{ productName }}</h4>
            <span class="price">${{ price }}</span>
            <ul class="stars">
              <li v-for="star in stars" :key="star"><i class="fa fa-star"></i></li>
            </ul>
            <span>{{ description }}</span>
            <div class="quote">
              <i class="fa fa-quote-left"></i><p>{{ quote }}</p>
            </div>
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
export default {
  data() {
    return {
      productName: 'New Green Jacket',
      price: 75.00,
      stars: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.',
      quantity: 1
    }
  },
  computed: {
    total() {
      return this.price * this.quantity
    }
  },
  methods: {
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    incrementQuantity() {
      this.quantity++
    },
    addToCart() {
      // Add to cart logic here
      console.log('Added to cart')
    }
  }
}
</script>

<style>

</style>