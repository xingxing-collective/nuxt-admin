<template>
  <div class="px-4 py-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      <div v-for="[key, component] in components" :key="key"
        class="col-span-1 rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group flex flex-col overflow-hidden group">
        <component :is="component" class="flex-1 px-2 py-2 sm:p-3 min-h-96 max-h-96" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const componentModules = import.meta.glob<Component>(
  '~/components/echarts/**',
  {
    eager: true,
    import: 'default',
  }
);
const components = computed(() => {
  if (import.meta.client) {
    return Object.entries(componentModules).sort((a, b) => Number.parseInt(a[0].split('.')[0]) - Number.parseInt(b[0].split('.')[0]));
  }
  return [];
});

useSeoMeta({
  title: 'ECharts | Dashboard',
  description: 'ECharts | Dashboard',
});
</script>
