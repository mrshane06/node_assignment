<template>
  <div class="col-lg-4">
    <div class="item">
      <div class="thumb">
        <div class="hover-content">
          <ul>
            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="down-content">
        <h4>{{ product.name }}</h4>
        <span>{{ product.price }}</span>
        <ul class="stars">
          <li v-for="(star, index) in 5" :key="index">
            <i class="fa fa-star"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        name: "Classic Spring",
        price: "$120.00",
        image: "assets/images/men-01.jpg",
      }),
    },
  },
};
</script>

<style scoped>
.item {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.thumb {
  position: relative;
}

.thumb img {
  width: 100%;
  height: auto;
}

.hover-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}

.thumb:hover .hover-content {
  opacity: 1;
}

.hover-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.hover-content ul li {
  margin: 0 10px;
}

.hover-content ul li a {
  color: white;
  font-size: 18px;
}

.down-content {
  padding: 15px;
  text-align: center;
}

.down-content h4 {
  margin: 0 0 10px 0;
}

.down-content span {
  display: block;
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.stars {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.stars li {
  color: #f39c12;
  margin: 0 2px;
}
</style>
