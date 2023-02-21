<script>
import axios from "axios";
const apiURL = import.meta.env.VITE_ROOT_API;

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get("https://myApiEndpoint.com/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<template>
  <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center">
    Login
  </h1>
  <div class="flex items-center justify-center">
    <form @submit.prevent="login" class="grid grid-cols-1 gap-y-6">
      <div class="flex flex-col">
        Email:
        <input
          type="email"
          class="w-64 border rounded px-4 py-2"
          v-model="email"
          required
        />
        Password:
      </div>
      <div class="flex flex-col">
        <input
          type="password"
          class="w-64 border rounded px-4 py-2"
          v-model="password"
          required
        />
      </div>
      <button
        class="bg-red-700 text-white rounded"
        type="submit"
        @click.prevent="login()"
      >
        Login
      </button>
    </form>
  </div>
</template>
