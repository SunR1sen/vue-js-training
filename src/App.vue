<script>
import { Form } from "vee-validate";
import InputExample from "./components/Input/InputExample.vue";
import { inputConfig } from "@/services/formConfig";

export default {
  name: "App",
  data: () => ({
    inputConfig
  }),
  components: {
    InputExample,
    Form
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    }
  }
};
</script>

<template>
  <h2>Инпут</h2>
  <Form @submit="onSubmit">
    <InputExample
      :style="inputConfig.style.medium"
      :name="inputConfig.name.cardNumber"
    />
  </Form>
</template>
