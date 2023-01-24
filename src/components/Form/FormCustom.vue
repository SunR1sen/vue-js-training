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
    SelectCustom
  },
  methods: {
    onSubmit(e) {
      console.log(e);
    }
  }
};
</script>

<template>
  <Form v-model="form" :class="s.form" v-slot="{ handleSubmit }">
    <form @submit="handleSubmit($event, onSubmit)">
      <InputCustom
        :style="inputConfig.style.medium"
        :name="inputConfig.name.cardNumber"
        :model="form.name"
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
          :required="true"
        />
        <InputCustom
          :style="inputConfig.style.cvc"
          :name="inputConfig.name.cvc"
        />
      </div>
      <input type="submit" :class="s.button" @click="onSubmit" />
    </form>
  </Form>
</template>
