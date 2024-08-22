<template>
  <div class="admin-home">
    <!-- ***** Main Banner Area Start ***** -->
    <div class="page-heading about-page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>All Users</h2>
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
                <h2>All Users</h2>
              </div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                  </tr>
                </tbody>
              </table>
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
      users: [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', role: 'User' },
        // Add more users here
      ]
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

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.table th {
  background-color: #f0f0f0;
}

.table-striped tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>