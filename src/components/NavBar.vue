<template>
  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <router-link to="/" class="logo">
              <img src="assets/images/logo.png">
            </router-link>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><router-link to="/" class="active">Home</router-link></li>
              <li class="scroll-to-section"><router-link to="/about">About</router-link></li>
              <li class="submenu">
                <router-link to="/products">Products</router-link>
                <ul>
                  <li><router-link to="/products">All Products</router-link></li>
                  <li><router-link to="/products/mens">Mens</router-link></li>
                  <li><router-link to="/products/womans">Womans</router-link></li>
                  <li><router-link to="/products/kids">Kids</router-link></li>
                </ul>
              </li>
              <li class="submenu">
                <router-link to="/admin">Admin</router-link>
                <ul>
                  <li><router-link to="/admin/add-product">Add New Product</router-link></li>
                  <li><router-link to="/admin/update-product">Update Product</router-link></li>
                  <li><router-link to="/admin/delete-product">Delete Product</router-link></li>
                  <li><router-link to="/admin/view-users">View Users</router-link></li>
                </ul>
              </li>
              <li class="scroll-to-section"><router-link to="/contact">Contact Us</router-link></li>
              <li class="scroll-to-section"><router-link to="/login">Login</router-link></li>
            </ul>        
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>