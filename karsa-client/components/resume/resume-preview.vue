<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  profile: any;
  template: number;
}>();

const templateComponent = computed(() => {
  switch (props.template) {
    case 1:
      return defineAsyncComponent(
        () => import("~/components/cv-templates/pertama.vue")
      );
    case 2:
      return defineAsyncComponent(
        () => import("~/components/cv-templates/kedua.vue")
      );
    case 3:
      return defineAsyncComponent(
        () => import("~/components/cv-templates/ketiga.vue")
      );
    default:
      return {
        template: `<p class="text-center text-gray-500">Template belum dipilih</p>`,
      };
  }
});
</script>

<template>
  <div class="bg-white p-6 rounded-md">
    <component :is="templateComponent" v-bind="profile" />
  </div>
</template>
