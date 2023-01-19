<script>
import { Form } from "vee-validate";
import { inputConfig, selectConfig } from "@/services/formService";
import InputCustom from "../Input/InputCustom.vue";
import SelectCustom from "../Select/SelectCustom.vue";
import CheckboxCustom from "../Checkbox/CheckboxCustom.vue";
import { checkboxRequired } from "@/services/validators";
import s from "./FormCustom.modules.scss";

export default {
  name: "FormCustom",
  data: () => ({
    checkboxValue: false,
    inputConfig,
    selectConfig,
    s
  }),
  components: {
    InputCustom,
    Form,
    SelectCustom,
    CheckboxCustom
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    checkboxHandler() {
      this.checkboxValue = !this.checkboxValue;
    },
    checkboxRequired
  }
};
</script>

<template>
  <Form :class="s.form" @submit="onSubmit">
    <InputCustom
      :name="inputConfig.name.cardNumber"
      :style="inputConfig.style.medium"
    />
    <InputCustom
      :name="inputConfig.name.cardholderName"
      :style="inputConfig.style.medium"
    />
    <div :class="s.dates">
      <SelectCustom
        :name="selectConfig.name.month"
        :placeholder="'MM'"
        :style="selectConfig.style.medium"
      />
      <SelectCustom
        :name="selectConfig.name.year"
        :placeholder="'YY'"
        :style="selectConfig.style.medium"
        :validator="selectConfig.validator.required"
      />
      <InputCustom
        :name="inputConfig.name.cvc"
        :style="inputConfig.style.cvc"
      />
    </div>
  </Form>
  <Form>
    <CheckboxCustom
      :name="'acceptTerms'"
      :label="'Accept Terms & Conditions'"
      :handler="checkboxHandler"
      :value="checkboxValue"
      :validator="checkboxRequired"
    />
  </Form>

  <button
    :disabled="!checkboxValue"
    :class="[s.button, !checkboxValue && s.disabled]"
    @click="onSubmit"
  >
    Submit (в консоль)
  </button>
</template>
