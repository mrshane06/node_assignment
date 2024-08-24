<template>
  <div class="admin-home">
    <!-- ***** Main Banner Area Start ***** -->
    <div class="page-heading about-page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Update Product</h2>
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
                <h2>Update Existing Product</h2>
              </div>
              <form @submit.prevent="updateProduct">
                <div class="form-group">
                  <label for="product-id">Product ID</label>
                  <input type="text" v-model="product.product_id" id="product-id" class="form-control" required @input="fetchProduct">
                </div>
                <div class="form-group">
                  <label for="product-name">Product Name</label>
                  <input type="text" v-model="product.prodName" id="product-name" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="product-quantity">Quantity</label>
                  <input type="number" v-model="product.quantity" id="product-quantity" class="form-control" required>
                </div>
                <div class="form-group">
                  <label for="product-amount">Amount</label>
                  <input type="number" v-model="product.amount" id="product-amount" class="form-control" step="0.01" required>
                </div>
                <div class="form-group">
                  <label for="product-category">Category</label>
                  <select v-model="product.category" id="product-category" class="form-control" required>
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                    <option value="kids">Kids</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="product-image">Product Image URL</label>
                  <input type="text" v-model="product.prodURL" id="product-image" class="form-control" required>
                </div>
                <button @click="updateProduct" class="main-border-button">Update Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Main Container End ***** -->
    <!-- ***** Products Table Start ***** -->
    <div class="main-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-content-area">
              <div class="section-heading">
                <h2>Products</h2>
              </div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Product Image URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.product_id">
                    <td>{{ product.product_id }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.amount }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.prodURL }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ***** Products Table End ***** -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      product: {
        product_id: '',
        prodName: '',
        quantity: 0,
        amount: 0.00,
        category: '',
        prodURL: ''
      },
      products: []
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
            product_id: product.product_id,
            prodName: product.prodName,
            quantity: product.quantity,
            amount: product.amount,
            category: product.category,
            prodURL: product.prodURL
          }))
          this.products = mappedProducts
        })
        .catch(error => {
          console.error(error)
        })
    },
async fetchProduct() {
  if (!this.product.product_id) return;
  try {
    console.log(`Fetching product with ID: ${this.product.product_id}`);
    const response = await axios.get(`https://node-assignment-1-nfwz.onrender.com/products/${this.product.product_id}`);
    console.log('Product data:', response.data);
    this.product = response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

    },
  
    
updateProduct() {
  if (!this.product.product_id) {
    console.log('fdt');
    
    console.error('Product ID is missing or empty');
    return;
  }
  console.log('Updating product:', this.product); // For debugging
  try {
    axios.patch(`https://node-assignment-1-nfwz.onrender.com/products/${this.product.product_id}`, this.product)
      .then(response => {
        console.log('Product updated successfully:', response.data);
        this.fetchProducts(); // refresh the products list
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  } catch (error) {
    console.error('Error updating product:', error);
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