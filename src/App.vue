<template>
  <h2>Инпут</h2>
  <Form @submit="onSubmit">
    <InputExample
      :validator="validateCardNumber"
      :placeholder="'CARD NUMBER'"
      :size="size.medium"
      :name="'card number'"
    />
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import InputExample from "./components/Input/InputExample.vue";
import {
  validateCardNumber,
  validateCardholderName
} from "./services/validators";

export default {
  name: "App",
  data: () => ({
    size: {
      small: "small",
      medium: "medium",
      large: "large"
    }
  }),
  components: {
    InputExample,
    Form
  },
  methods: {
    validateCardNumber,
    validateCardholderName,
    methods: {
      onSubmit(values) {
        console.log(values, null, 2);
        console.log("inputValue ####: ", this.inputValue);
      }
    }
  }
};
</script>
