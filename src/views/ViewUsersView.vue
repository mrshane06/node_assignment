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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.users_id">
                    <td>{{ user.users_id }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.userAge }}</td>
                    <td>{{ user.Gender }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>
                      <button class="btn btn-primary" @click="editUser(user.users_id)">Edit</button>
                      <button class="btn btn-danger" @click="deleteUser(user.users_id)">Delete</button>
                    </td>
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
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get('https://node-assignment-1-nfwz.onrender.com/user')
      .then(response => {
        this.users = response.data
      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {
    editUser(userId) {
      // Call API to edit user
      axios.put(`https://your-api-url.com/user/:id${userId}`)
        .then(response => {
          // Update user data in the table
          const userIndex = this.users.findIndex(user => user.users_id === userId);
          this.users[userIndex] = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteUser(userId) {
      // Call API to delete user
      axios.delete(`https://your-api-url.com/user/:id${userId}`)
        .then(() => {
          // Remove user from the table
          const userIndex = this.users.findIndex(user => user.users_id === userId);
          this.users.splice(userIndex, 1);
        })
        .catch(error => {
          console.error(error);
        });
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

.btn {
  margin: 5px;
}
</style>