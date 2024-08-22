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
          <div
            v-for="(product, index) in products"
            :key="index"
            class="col-lg-4"
          >
            <div class="item">
              <div class="thumb">
                <div class="hover-content">
                  <ul>
                    <li><router-link to="/single-product"><i class="fa fa-eye"></i></router-link></li>
                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
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
                <li><a href="#">></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          title: "Classic Spring",
          price: "$120.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/men-01.jpg",
        },
        {
          title: "Air Force 1 X",
          price: "$90.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/men-02.jpg",
        },
        {
          title: "Love Nana ‘20",
          price: "$150.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/men-03.jpg",
        },
        {
          title: "New Green Jacket",
          price: "$75.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/women-01.jpg",
        },
        {
          title: "Classic Dress",
          price: "$45.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/women-02.jpg",
        },
        {
          title: "Spring Collection",
          price: "$130.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/women-03.jpg",
        },
        {
          title: "School Collection",
          price: "$80.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/kid-01.jpg",
        },
        {
          title: "Summer Cap",
          price: "$12.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/kid-02.jpg",
        },
        {
          title: "Classic Kid",
          price: "$30.00",
          stars: 5,
          image: "https://mrshane06.github.io/node_assignment_images/kid-03.jpg",
        },
      ],
      pages: [
        { number: 1, active: false },
        { number: 2, active: true },
        { number: 3, active: false },
        { number: 4, active: false },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
