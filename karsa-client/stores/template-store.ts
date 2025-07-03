import { defineStore } from 'pinia';

export const useTemplateStore = defineStore('template', {
  state: () => ({
    selectedTemplate: null as number | null,
  }),
  actions: {
    setTemplate(templateId: number) {
      this.selectedTemplate = templateId;
    },
  },
});
