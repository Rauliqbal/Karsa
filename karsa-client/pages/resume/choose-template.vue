<script setup lang="ts">
import { ref } from "vue";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

definePageMeta({
  layout: false,
});
useHead({
  title: "Choose Template - KarsaCV",
});

const selectedTemplate = ref<number | null>(null);
const templateStore = useTemplateStore();

const selectTemplate = (id: number) => {
  selectedTemplate.value = id;
  localStorage.setItem("karsa_template", id.toString());
};

const goNext = () => {
  navigateTo("/resume/create-profile");
  console.log("Button click");
};
</script>

<template>
  <div class="container mt-10">
    <h2 class="text-center text-2xl font-semibold mb-6">Choose Template</h2>

    <div class="grid grid-cols-3 gap-4">
      <Card
        v-for="i in 3"
        :key="i"
        :class="selectedTemplate === i ? 'ring-2 ring-blue-500' : ''"
        @click="selectTemplate(i)"
        class="cursor-pointer transition hover:scale-105"
      >
        <CardHeader>
          <CardTitle>Template {{ i }}</CardTitle>
          <CardDescription>This is template number {{ i }}</CardDescription>
        </CardHeader>
      </Card>
    </div>

    <div class="text-center mt-8" v-if="selectedTemplate !== null">
      <Button @click="goNext"> Next </Button>
    </div>
  </div>
</template>
