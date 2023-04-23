import { defineStore } from 'pinia'
import axios from 'axios'
import bcrypt from 'bcryptjs' // Import the bcryptjs package
const apiURL = import.meta.env.VITE_ROOT_API

// Defining a store
export const useLoggedInUserStore = defineStore({

  id: 'loggedInUser',
  state: () => {
    return {
      name: "",
      role: 0,
      isLoggedIn: false
    }
  },
  actions: {
    async login(username, password) {
      try {
        // Hash the password before sending it to the server
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);

        console.log(username, password)
        const response = await axios.post(`${apiURL}/users/login`, {username, password});
        console.log(response)
        if (response) {
          this.$patch({
            isLoggedIn: true,
            role: response.data.role,
            name: response.data.username
          });
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error)
        alert("Invalid credentials. Please try again.");
      }
    },
    logout() {
      // Reset value after user log out
      this.$patch({
        name: "",
        role: 0,
        isLoggedIn: false
      });
    },
    persist: {
      storage: sessionStorage
    }
  },
});
