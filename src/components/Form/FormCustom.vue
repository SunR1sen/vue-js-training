<script>
import { Form } from "vee-validate";
import { inputConfig, selectConfig } from "@/services/formService";
import InputCustom from "../Input/InputCustom.vue";
import SelectCustom from "../Select/SelectCustom.vue";
import CheckboxCustom from "../Checkbox/CheckboxCustom.vue";
import { checkboxRequired, isRequired } from "@/services/validators";
import s from "./FormCustom.modules.scss";

export default {
  name: "FormCustom",
  data: () => ({
    checkboxValue: false,
    inputConfig,
    selectConfig,
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
    InputCustom,
    Form,
    SelectCustom,
    CheckboxCustom
  },
  methods: {
    isRequired,
    onSubmit() {
      console.log(this.form);
    },
    checkboxRequired,
    log(value) {
      console.log(value);
    }
  }
};
</script>

<template>
  <Form
    v-slot="{ errors }"
    @submit="
      () => {
        // validate().then(() => log(errors));
        onSubmit();
      }
    "
    v-model="form"
    :class="s.form"
  >
    <InputCustom
      :style="inputConfig.style.medium"
      :name="inputConfig.name.cardNumber"
      v-model="form.number"
    />
    <InputCustom
      v-model="form.name"
      :name="inputConfig.name.cardholderName"
      :style="inputConfig.style.medium"
    />
    <div :class="s.dates">
      <SelectCustom
        v-model="form.month"
        :name="selectConfig.name.month"
        :placeholder="'MM'"
        :validator="isRequired"
      />
      <SelectCustom
        v-model="form.year"
        :name="selectConfig.name.year"
        :placeholder="'YY'"
        :style="'large'"
        :validator="isRequired"
      />
      <InputCustom
        v-model="form.cvv"
        :name="inputConfig.name.cvc"
        :style="inputConfig.style.cvc"
      />
    </div>

    <CheckboxCustom
      v-model="form.terms"
      :name="'acceptTerms'"
      :label="'Accept Terms & Conditions'"
      :validator="isRequired"
    />
    <input
      :disabled="Object.keys(errors).length"
      type="submit"
      :class="[s.button, Object.keys(errors).length && s.disabled]"
    />
  </Form>
</template>
