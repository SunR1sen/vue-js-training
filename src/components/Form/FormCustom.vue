<script>
import { Form } from "vee-validate";
import { inputConfig, selectConfig, formData } from "@/services/formService";
import FormRenderer from "../FormRenderer/FormRenderer.vue";
import { isRequired } from "@/services/validators";
import s from "./FormCustom.modules.scss";

export default {
  name: "FormCustom",
  data: () => ({
    inputConfig,
    selectConfig,
    formData,
    s,
    form: {
      number: "",
      name: "",
      cvv: "",
      month: 0,
      year: 0,
      terms: false
    }
  }),
  components: {
    FormRenderer,
    Form
  },
  methods: {
    isRequired,
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>

<template>
  <Form v-slot="{ errors }" @submit="onSubmit" v-model="form" :class="s.inputs">
    <FormRenderer :formData="formData" />
    <input
      :disabled="Object.keys(errors).length"
      type="submit"
      :class="[s.button, Object.keys(errors).length && s.disabled]"
    />
  </Form>
</template>
