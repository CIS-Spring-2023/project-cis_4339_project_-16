<!-- eslint-disable prettier/prettier -->
<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  name: 'App',
  data() {
    return {
      orgName: 'CIS4339 Final Project'
    }
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
    })
  },
  setup() {
    // function that checks if a user is logged in
    const user = useLoggedInUserStore();
    return { user };
  }
}
</script>
<!-- eslint-disable prettier/prettier -->
<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="mx-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col space-y-4">
            <!-- Start: Login page -->
            <li v-if="!user.isLoggedIn">
              <router-link to="/logIn" class="text-blue-500 hover:text-blue-700 flex items-center">
                <span
                  class="material-icons align-middle"
                  >login</span
                >
                Log In
              </router-link>
            </li>
            <li class="nav-item dropdown" v-if="user.isLoggedIn">
              <a
                class="text-blue-500 hover:text-blue-700 flex items-center cursor-pointer"
                id="navbarUserMenuLink"
                role="button"
                @click="dropdownVisible = !dropdownVisible"
                >
                <span
                  class="material-icons align-middle"
                  >person</span
                >
                Welcome, {{ user.name }}
              </a>
              <ul
                class="dropdown-menu bg-white rounded-md mt-2 py-2 absolute w-48"
                :class="{'hidden': !dropdownVisible}"
                aria-labelledby="navbarUserMenuLink"
              >
                <li class="nav-item">
                  <a href="/" @click="store.logout()" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                    <span class="material-icons">logout</span>Logout
                  </a>
                </li>
              </ul>
            </li>
            <!-- End: Login page -->

            <!-- Start: Dashboard page -->
            <li>
              <router-link to="/" class="text-blue-500 hover:text-blue-700 flex items-center">
                <span
                  class="material-icons align-middle"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <!-- End: Dashboard page -->

<!-- Start: Find client page -->
<li>
  <!-- gives access to both users to view this page -->
  <router-link v-if="user.isLoggedIn" to="/findclient" class="text-blue-500 hover:text-blue-700 flex items-center">
    <span class="material-icons align-middle">search</span>
    Find Client
  </router-link>
</li>
<!-- End: Find client page -->

<!-- Start: Find event page -->
<li>
  <!-- gives access to both users to view this page -->
  <router-link v-if="user.isLoggedIn" to="/findevents" class="text-blue-500 hover:text-blue-700 flex items-center">
    <span class="material-icons align-middle">search</span>
    Find Event
  </router-link>
</li>
<!-- End: Find event page -->

<!-- Start: Find service page -->
<li>
  <!-- gives access to both users to view this page -->
  <router-link v-if="user.isLoggedIn" to="/findService" class="text-blue-500 hover:text-blue-700 flex items-center">
    <span class="material-icons align-middle">search</span>
    Find Service
  </router-link>
</li>
<!-- End: Find service page -->

<!-- Start: Client intake form page -->
<li>
  <!-- gives access only to editor to use this page -->
  <router-link v-if="user.isLoggedIn && user.role === '1'" to="/intakeform" class="text-blue-500 hover:text-blue-700 flex items-center">
    <span class="material-icons align-middle">people</span>
    Client Intake Form
  </router-link>
</li>
<!-- End: Client intake form page -->

<!-- Start: Create event form page -->
<li>
  <!-- gives access only to editor to use this page -->
  <router-link v-if="user.isLoggedIn && user.role === '1'" to="/eventform" class="text-blue-500 hover:text-blue-700 flex items-center">
    <span class="material-icons align-middle">event</span>
    Create Event
  </router-link>
</li>
<!-- End: Create event form page -->

<!-- Start: Create service form page -->
<li>
  <!-- gives access only to editor to use this page -->
  <router-link v-if="user.isLoggedIn && user.role === '1'" to="/serviceForm" class="text-blue-500 hover:text-blue-700 flex items-center">
    <span class="material-icons align-middle">create</span>
    Create Service
  </router-link>
</li>
<!-- End: Create service form page -->

</ul>
</nav>
</header>
</div>

<div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex bg-gradient-to-r from-red-700 via-white to-white"
        style="background-size: 70% 100%"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
