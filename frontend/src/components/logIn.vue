<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <div class="container mx-auto py-5 h-full">
      <div class="flex justify-center items-center h-full">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-5/12">
          <div class="bg-gray-800 text-white rounded-xl">
            <div class="p-5 text-center">
              <div class="mb-5 md:mb-0 md:pb-5">
                <h2 class="font-semibold mb-2 text-2xl uppercase">Login</h2>
                <p class="text-gray-400 mb-5">Please enter your credentials!</p>

                <form @submit.prevent="store.login(username, password)" novalidate="true">
                  <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX" class="form-control form-control-lg bg-gray-700 text-white rounded-lg py-3 px-4 block w-full mb-3" v-model="username" />
                    <label class="form-label" for="typeEmailX">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX" class="form-control form-control-lg bg-gray-700 text-white rounded-lg py-3 px-4 block w-full" v-model="password" />
                    <label class="form-label" for="typePasswordX">Password</label>
                  </div>

                  <button class="btn btn-outline-light btn-lg px-5 bg-red-500 text-white py-3 px-5 rounded-lg" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- eslint-disable prettier/prettier -->
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
