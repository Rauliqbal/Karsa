import { defineStore } from 'pinia';

export const useTemplateStore = defineStore('template',() => {
  // STATE
  const selectedTemplate = ref();
  
  // ACTIONS
  function setSelectedTemplate(value: number) {
    selectedTemplate.value = value;
    localStorage.setItem("karsa_template", value.toString());
  }

  function loadFromLocalStorage() {
    const stored = localStorage.getItem("karsa_template");
    if (stored) {
      selectedTemplate.value = parseInt(stored);
    }
  }
  return {  
    selectedTemplate,
    setSelectedTemplate,
    loadFromLocalStorage
  }
})