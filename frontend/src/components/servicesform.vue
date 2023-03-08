<template>
  <div class="services-form">
    <h2 class="font-bold text-2xl mb-4">Services Offered at Event</h2>
    <div v-for="service in activeServices" :key="service.id" class="flex items-center mb-2">
      <label :for="service.id" class="inline-flex items-center">
        <input
          type="checkbox"
          :id="service.id"
          :value="service"
          v-model="selectedServices"
          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <span class="ml-2">{{ service.description }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedServices: [],
    };
  },
  computed: {
    activeServices() {
      return this.services.filter((s) => s.isActive);
    },
  },
};
</script>
