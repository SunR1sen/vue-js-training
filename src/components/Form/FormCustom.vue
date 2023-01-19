<script>
import { Form } from "vee-validate";
import { inputConfig } from "@/services/formService";
import InputCustom from "../Input/InputCustom.vue";
import SelectCustom from "../Select/SelectCustom.vue";
import s from "./FormCustom.modules.scss";

export default {
  name: "FormCustom",
  data: () => ({
    inputConfig,
    s
  }),
  components: {
    InputCustom,
    Form,
    SelectCustom
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    }
  }
};
</script>

<template>
  <Form :class="s.form" @submit="onSubmit">
    <InputCustom
      :style="inputConfig.style.medium"
      :name="inputConfig.name.cardNumber"
    />
    <InputCustom
      :style="inputConfig.style.medium"
      :name="inputConfig.name.cardholderName"
    />
    <div :class="s.dates">
      <SelectCustom :name="'month'" :placeholder="'MM'" />
      <SelectCustom
        :name="'year'"
        :placeholder="'YY'"
        :style="'large'"
        required
      />
      <InputCustom
        :style="inputConfig.style.cvc"
        :name="inputConfig.name.cvc"
      />
    </div>
  </Form>
  <button :class="s.button" @click="onSubmit">Submit (в консоль)</button>
</template>
