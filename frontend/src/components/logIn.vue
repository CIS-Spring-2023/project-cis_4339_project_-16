<template>
  <br>
  <div class="flex items-center justify-center mb-5">
    <h3 class="font-bold text-4xl text-red-700">Login</h3>
  </div>
  <br>
  <div class="flex items-center justify-center mb-5">
    <form @submit.prevent="store.login(username, password)" novalidate="true" class="grid grid-cols-1 gap-y-10">
      <div class="flex flex-col">
        <label class="mb-1">User name</label>
        <input type="text" class="w-64 border rounded px-4 py-2 mb-2" v-model="username" placeholder="username" required>
      </div>
      <div class="flex flex-col">
        <label class="mb-1">Password</label>
        <input type="password" class="w-64 border rounded px-4 py-2 mb-8" v-model="password" placeholder="password" required>
      </div>
      <div class="flex items-center justify-center">
        <button class="bg-red-700 text-white rounded py-2 px-4">Submit</button>
      </div>
    </form>
  </div>
</template>


<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const store = useLoggedInUserStore()
    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  }
};
</script>
