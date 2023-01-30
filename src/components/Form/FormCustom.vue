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
    s,
    form: {
      number: "",
      name: "",
      cvv: "",
      month: 0,
      year: 0
    }
  }),
  components: {
    InputCustom,
    Form,
    SelectCustom,
    CheckboxCustom
  },
  methods: {
    onSubmit(e) {
      console.log(e);
    },
    checkboxHandler() {
      this.checkboxValue = !this.checkboxValue;
    },
    checkboxRequired
  }
};
</script>

<template>
  <Form v-model="form" :class="s.form">
    <!--    <form @submit="handleSubmit($event, onSubmit)">-->
    <InputCustom :name="inputConfig.name.cardNumber" :model="form.name" />
    <InputCustom
      :name="inputConfig.name.cardholderName"
      :style="inputConfig.style.medium"
    />
    <div :class="s.dates">
      <SelectCustom v-model="form.month" :name="'month'" :placeholder="'MM'" />
      <SelectCustom
        v-model="form.year"
        :name="selectConfig.name.year"
        :placeholder="'YY'"
        :style="'large'"
        :required="true"
      />
      <InputCustom
        :name="inputConfig.name.cvc"
        :style="inputConfig.style.cvc"
      />
    </div>
    <input type="submit" :class="s.button" @click="onSubmit" />
    <!--    </form>-->
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
