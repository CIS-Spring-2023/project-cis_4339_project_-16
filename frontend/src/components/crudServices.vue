<script>
import useVuelidate from "@vuelidate/core";
import { required, email, alpha, numeric } from "@vuelidate/validators";

export default {
  data() {
    return {
      service: "",
      services: [],
    };
  },
  async created() {
    await this.fetchServices();
  },
  methods: {
    async fetchServices() {
      try {
        const response = await fetch("/services");
        this.services = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async addService() {
      if (!this.$v.service.$invalid) {
        try {
          const response = await fetch("/services", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ service: this.service }),
          });
          const data = await response.json();
          this.services.push(data);
          this.service = "";
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  validations: {
    service: { required },
  },
};
</script>

<template>
  <main>
    <h1
      class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
    >
      Services
    </h1>
    <div class="px-10 py-20">
      <form @submit.prevent="addService">
        <div class="flex h-screen justify-center">
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Description</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="service.$model"
              />
              <div class="text-red-600">
                {{ service.$error ? "Service description is required" : "" }}
              </div>
            </label>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Service
            </button>
          </div>
        </div>
      </form>
      <div class="mt-10">
        <h2 class="font-bold text-2xl mb-4">List of Services</h2>
        <ul class="list-disc pl-5">
          <li v-for="service in services" :key="service.id">
            {{ service.service }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>