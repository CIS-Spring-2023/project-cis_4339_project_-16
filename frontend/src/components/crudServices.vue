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
      services: [{
        id: 1,
        description: "After School Service",
        isActive: true
      }],
      isEditing: false,
      editedService: {},
    };
  },
  computed: {
    activeServices() {
      return this.services.filter(service => service.isActive);
    }
  },
  methods: {
    addService() {
      if (this.newService.description.trim() === "") {
        this.newService.descriptionError = "Description is required";
        return;
      }
      this.newService.descriptionError = null;
      const newId = this.services.length + 1;
      this.services.push({
        id: newId,
        description: this.newService.description,
        isActive: true
      });
      this.newService.description = "";
    },
    editService(service) {
      this.isEditing = true;
      this.editedService = Object.assign({}, service);
    },
    updateService(service) {
      const index = this.services.findIndex(s => s.id === service.id);
      this.services[index] = Object.assign({}, service);
    },
    cancelEdit() {
      this.isEditing = false;
      this.editedService = {};
    },
    saveEdit() {
      const index = this.services.findIndex(s => s.id === this.editedService.id);
      this.services[index] = Object.assign({}, this.editedService);
      this.isEditing = false;
      this.editedService = {};
    },
    deleteService(service) {
      const index = this.services.findIndex(s => s.id === service.id);
      this.services.splice(index, 1);
    },
    toggleServiceActive(service) {
      const index = this.services.findIndex(s => s.id === service.id);
      this.services[index].isActive = !this.services[index].isActive;
    }
  }
};
</script>
