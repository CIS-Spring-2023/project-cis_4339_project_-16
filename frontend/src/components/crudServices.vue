<template>
  <main class="flex flex-col justify-center items-center">
    <h1 class="font-bold text-4xl text-red-700 tracking-widest mb-10">Services</h1>
    <div class="flex flex-col items-center mb-10">
      <form @submit.prevent="addService" class="w-full">
        <div class="flex items-center">
          <label class="mr-2">
            <span class="text-gray-700">Description</span>
            <span style="color: #ff0000">*</span>
          </label>
          <input
            type="text"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="service.description"
          />
          <div class="text-red-600 ml-2">{{ service.descriptionError }}</div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
          >
            Add Service
          </button>
        </div>
      </form>
      <div class="mt-10">
        <h2 class="font-bold text-2xl mb-4">List of Services</h2>
        <ul class="list-disc pl-5">
          <li v-for="service in activeServices" :key="service.id">
            {{ service.description }}
            <button @click="deleteService(service)">
              {{ service.isActive ? "Deactivate" : "Activate" }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>



<script>
export default {
  data() {
    return {
      service: {
        id: null,
        description: "",
        isActive: true,
        descriptionError: "",
      },
      services: [],
    };
  },
  async created() {
    await this.fetchServices();
  },
  methods: {
    async fetchServices() {
      const storedServices = localStorage.getItem("services");
      if (storedServices) {
        this.services = JSON.parse(storedServices);
      }
    },
    async addService() {
      if (!this.service.description) {
        this.service.descriptionError = "Service description is required";
        return;
      }
      this.service.id = new Date().getTime();
      this.services.push(this.service);
      localStorage.setItem("services", JSON.stringify(this.services));
      this.service = {
        id: null,
        description: "",
        isActive: true,
        descriptionError: "",
      };
    },
    deleteService(service) {
      const index = this.services.findIndex((s) => s.id === service.id);
      if (index !== -1) {
        const updatedService = { ...service, isActive: !service.isActive };
        this.services.splice(index, 1, updatedService);
        localStorage.setItem("services", JSON.stringify(this.services));
      }
    },
  },
  computed: {
    activeServices() {
      return this.services.filter((s) => s.isActive);
    },
  },
  watch: {
    services() {
      this.activeServices = this.services.filter((s) => s.isActive);
    },
  },
};
</script>
