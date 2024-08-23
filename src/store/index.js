import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const dbURL ="https://node-assignment-1-nfwz.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: "",
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async register(context, payload) {
      try {
        let msg = (await axios.post(`${dbURL}users/`, payload)).data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Sign Up",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
          // router.push({ name: "login" });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let results = (await axios.get(`${dbURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
          // console.log(results)
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while retrieving Users",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let result = (await axios.get(`${dbURL}users/${payload.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User not found",
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "this user was not found.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let msg = await axios.patch(`${dbURL}users/${payload.userID}`, payload);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Updated this user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while updating this user.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async deleteUser(context, payload) {
      try {
        let msg = await axios.delete(`${dbURL}users/${payload}`);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Deleted user",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while trying to delete this user.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchProducts(context) {
      try {
        let {data}  = await axios.get(`${dbURL}products`);
        console.log (data)
        if (data) {
          context.commit("setProducts", data);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while trying to retrieve Products",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let result = (await axios.get(`${dbURL}products/${payload.id}`))
          .data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet.alert({
            title: "Retrieve a single product",
            text: "This product was not found",
            icon: "info",
            timer: 4000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "this product was not found.",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async addProduct(context, payload) {
      try {
        let msg = (await axios.post(`${dbURL}products/`, payload)).data;
        if (msg) {
          context.dispatch("fetchProducts");
          sweet({
            title: "Add Product",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload()
          
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async editProduct(context, payload) {
      try {
        const product_id = payload.product_id;
        const updatedFields = { /* create an object with only the updated fields */ };
        const response = await axios.patch(`${dbURL}products/${product_id}`, updatedFields);
        if (response) {
          context.dispatch("fetchProducts");
          sweet({
            title: "Edit Product",
            text: response.data,
            icon: "success",
            timer: 4000,
          });
          location.reload();
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again at a different time",
          icon: "error",
          timer: 4000,
        });
      }
    },
    async deleteProduct(context, payload) {
      try {
        let msg = await axios.delete(`${dbURL}products/${payload}`);
        if (msg) {
          context.dispatch("fetchProducts");
          sweet({
            title: "Delete Product",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          location.reload() 
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Could not delete this item",
          icon: "error",
          timer: 4000,
        });
      }
    },
  },
  modules: {},
});
