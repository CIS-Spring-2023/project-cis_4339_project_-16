<template>
  <div class="flex items-center justify-center">

            <h3 class="font-bold text-4xl text-red-700 tracking-widest text-center">Login</h3>
            <form @submit.prevent="store.login(username, password)" novalidate="true">
                <div class="flex flex-col">
                    <label>User name</label>
                    <input type="text" class="w-64 border rounded px-4 py-2" v-model="username" placeholder="username" required>
                </div>
                <div class="flex flex-col">
                    <label>Password</label>
                    <input type="password" class="bg-red-700 text-white rounded" v-model="password" placeholder="password" required>
                </div>
                <button class="btn btn-danger mt-3">Submit</button>
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
