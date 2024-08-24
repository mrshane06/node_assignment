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

              <!-- Add User Form -->
              <div class="add-user-form">
                <h3>Add New User</h3>
                <form @submit.prevent="addUser">
                  <div class="form-group">
                    <label>First Name:</label>
                    <input v-model="newUser.firstName" required />
                  </div>
                  <div class="form-group">
                    <label>Last Name:</label>
                    <input v-model="newUser.lastName" required />
                  </div>
                  <div class="form-group">
                    <label>Age:</label>
                    <input v-model="newUser.userAge" type="number" required />
                  </div>
                  <div class="form-group">
                    <label>Gender:</label>
                    <select v-model="newUser.Gender" required>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Role:</label>
                    <input v-model="newUser.userRole" required />
                  </div>
                  <div class="form-group">
                    <label>Email:</label>
                    <input v-model="newUser.emailAdd" type="email" required />
                  </div>
                  <button class="btn btn-success" type="submit">Add User</button>
                </form>
              </div>

              <!-- User List Table -->
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
                      <button class="btn btn-primary" @click="startEditing(user)">Edit</button>
                      <button class="btn btn-danger" @click="deleteUser(user.users_id)">Delete</button>
                    </td>
                  </tr>

                  <!-- Conditionally render the edit form -->
                  <tr v-if="editingUser">
                    <td>{{ editingUser.users_id }}</td>
                    <td><input v-model="editingUser.firstName" /></td>
                    <td><input v-model="editingUser.lastName" /></td>
                    <td><input v-model="editingUser.userAge" type="number" /></td>
                    <td>
                      <select v-model="editingUser.Gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </td>
                    <td><input v-model="editingUser.userRole" /></td>
                    <td><input v-model="editingUser.emailAdd" /></td>
                    <td>
                      <button class="btn btn-success" @click="saveUser">Save</button>
                      <button class="btn btn-secondary" @click="cancelEditing">Cancel</button>
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
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      newUser: {
        firstName: '',
        lastName: '',
        userAge: null,
        Gender: 'Male',
        userRole: '',
        emailAdd: ''
      },
      editingUser: null // To track the user being edited
    };
  },
  mounted() {
    axios.get('https://node-assignment-1-nfwz.onrender.com/user')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    addUser() {
      axios.post('https://node-assignment-1-nfwz.onrender.com/user/insert', this.newUser)
        .then(response => {
          this.users.push(response.data); // Add the new user to the list
          // Reset the form
          this.newUser = {
            firstName: '',
            lastName: '',
            userAge: null,
            Gender: 'Male',
            userRole: '',
            emailAdd: ''
          };
        })
        .catch(error => {
          console.error('Error adding user:', error);
        });
    },
    startEditing(user) {
      // Create a copy of the user object to avoid directly modifying the list
      this.editingUser = { ...user };
    },
    cancelEditing() {
      this.editingUser = null;
    },
    saveUser() {
      if (!this.editingUser) return;

      axios.patch(`https://node-assignment-1-nfwz.onrender.com/user/${this.editingUser.users_id}`, this.editingUser)
        .then(response => {
          const userIndex = this.users.findIndex(user => user.users_id === this.editingUser.users_id);
          if (userIndex !== -1) {
            this.users[userIndex] = response.data; // Update the user
          }
          this.editingUser = null; // Reset the editing state
        })
        .catch(error => {
          console.error('Error updating user:', error);
        });
    },
    deleteUser(userId) {
      axios.delete(`https://node-assignment-1-nfwz.onrender.com/user/${userId}`)
        .then(() => {
          const userIndex = this.users.findIndex(user => user.users_id === userId);
          this.users.splice(userIndex, 1);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
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

.add-user-form {
  margin-bottom: 30px;
}

.add-user-form h3 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  margin: 5px;
}
</style>
