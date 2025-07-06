<script setup lang="ts">
defineProps<{
  profile: any;
  templateId: number;
}>();
</script>

<template>
  <div class="bg-white p-4 rounded-md shadow-md">
    <div v-if="templateId === 1">
      <CvTemplatesPertama v-bind="profile" />
    </div>
    <div v-else-if="templateId === 2">
      <CvTemplatesKedua v-bind="profile" />
    </div>
    <div v-else-if="templateId === 3">
      <CvTemplatesKetiga v-bind="profile" />
    </div>
    <div v-else>No template</div>
  </div>
</template>
