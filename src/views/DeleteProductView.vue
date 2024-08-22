<template>
  <div class="admin-home">
    <!-- ***** Main Banner Area Start ***** -->
    <div class="page-heading about-page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Delete Product</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Main Banner Area End ***** -->

    <!-- ***** Main Container Start ***** -->
    <div class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="main-content-area">
              <div class="section-heading">
                <h2>Delete Product</h2>
              </div>
              <form @submit.prevent="addProduct">
                <div class="form-group">
                  <label for="product-name">Product Name</label>
                  <input type="text" v-model="product.name" id="product-name" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="product-description">Product Description</label>
                  <textarea v-model="product.description" id="product-description" class="form-control" rows="5" required></textarea>
                </div>
                <div class="form-group">
                  <label for="product-price">Product Price</label>
                  <input type="number" v-model="product.price" id="product-price" class="form-control" step="0.01" required>
                </div>
                <div class="form-group">
                  <label for="product-image">Product Image</label>
                  <input type="file" @change="handleImageChange" id="product-image" class="form-control" required>
                </div>
                <button type="submit" class="main-border-button">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Main Container End ***** -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0,
        image: null
      }
    }
  },
  methods: {
    addProduct() {
      // Add product logic here
    },
    handleImageChange(event) {
      this.product.image = event.target.files[0]
    }
  }
}
</script>

<style>
.admin-home {
  background-color: #f9f9f9;
}

.main-container {
  background-color: #fff;
  padding: 30px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-content-area {
  padding: 30px;
}

.section-heading {
  margin-bottom: 20px;
}

.section-heading h2 {
  font-weight: bold;
  font-size: 24px;
  margin-top: 0;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
}

.main-border-button {
  background-color: #337ab7;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.main-border-button:hover {
  background-color: #23527c;
}
</style>