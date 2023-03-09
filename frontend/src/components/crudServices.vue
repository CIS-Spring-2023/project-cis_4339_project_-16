<template>
  <div class="max-w-lg mx-auto">
    <h2 class="text-red-600 font-bold text-2xl mb-4">Add Service</h2>
    <form @submit.prevent="addService">
      <div class="mb-4 flex justify-between">
        <label class="text-xl font-bold">Description:</label>
        <input v-model="newService.description" type="text" class="border-2 border-gray-400 px-4 py-2 w-5/6 ml-4">
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded font-bold ml-2">Add</button>
      </div>
      <span v-if="newService.descriptionError" style="color: red">{{ newService.descriptionError }}</span>
    </form>

    <h2 class="text-red-600 font-bold text-2xl mt-8 mb-4">Active Services</h2>
    <ul>
      <li v-for="service in activeServices" :key="service.id" class="flex items-center mb-4">
        <input type="text" v-model="service.description" @change="updateService(service)" class="border-2 border-gray-400 px-4 py-2 w-full">
        <div class="ml-4 flex items-center space-x-5">
          <label class="flex items-center mr-2">
            <input type="radio" v-model="service.isActive" value="true" @change="updateService(service)" class="mr-2">
            <span class="text-xl">Active</span>
          </label>
          <label class="flex items-center mr-2">
            <input type="radio" v-model="service.isActive" value="false" @change="updateService(service)" class="mr-2">
            <span class="text-xl">Inactive</span>
          </label>
          <button @click="editService(service)" class="bg-yellow-500 text-white py-2 px-4 rounded font-bold text-xl">
            Edit
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newService: {
        description: "",
      },
      services: [],
      isEditing: false,
      editedService: {},
    };
  },
  async created() {
    // You don't need this method anymore
  },
  methods: {
    async addService() {
      if (!this.newService.description) {
        this.newService.descriptionError = "Service description is required";
        return;
      }
      const service = {
        id: Date.now(),
        description: this.newService.description,
        isActive: true,
      };
      this.services.push(service);
      this.newService.description = "";
    },
    deleteService(service) {
      const index = this.services.findIndex((s) => s.id === service.id);
      if (index !== -1) {
        const updatedService = { ...service, isActive: !service.isActive };
        this.services.splice(index, 1, updatedService);
      }
    },
    updateService(service) {
      const index = this.services.findIndex((s) => s.id === service.id);
      if (index !== -1) {
        this.services.splice(index, 1, service);
      }
    },
    editService(service) {
      this.isEditing = true;
      this.editedService = { ...service };
    },
    saveEditedService() {
      const index = this.services.findIndex((s) => s.id === this.editedService.id);
      if (index !== -1) {
        this.services.splice(index, 1, this.editedService);
        this.isEditing = false;
        this.editedService = {};
      }
      },
  },
  computed: {
    activeServices() {
      return this.services.filter((service) => service.isActive);
      },
  },
};
</script>