<script>
import InputCustom from "../Input/InputCustom.vue";
import SelectCustom from "../Select/SelectCustom.vue";
import CheckboxCustom from "../Checkbox/CheckboxCustom.vue";
import { defineRule } from "vee-validate";
import {
  isRequired,
  validateCardholderName,
  emailValidator,
  regexValidator
} from "@/services/validators";
import { url, length, numeric } from "@vee-validate/rules";

defineRule("required", isRequired);
defineRule("numeric", numeric);
defineRule("length", length);
defineRule("email", emailValidator);
defineRule("regex", regexValidator);
defineRule("url", url);
defineRule("cardholderName", validateCardholderName);

export default {
  name: "FormRenderer",
  props: {
    formData: Array
  },
  setup(props) {
    const form = props.formData.reduce((a, k) => {
      return {
        ...a,
        [k.name]: k.defaultValue
      };
    }, {});
    return {
      form
    };
  },
  components: {
    InputCustom,
    SelectCustom,
    CheckboxCustom
  }
};
</script>

<template>
  <template v-for="item in formData">
    <template v-if="item.type === 'input'">
      <InputCustom
        v-bind:key="item.name"
        v-model="form[item.name]"
        :name="item.name"
        :placeholder="item.placeholder"
        :validation="item.validation"
        :style="item.style"
        :error="item.error"
      />
    </template>
    <template v-if="item.type === 'select'">
      <SelectCustom
        v-bind:key="item.name"
        v-model="form[item.name]"
        :name="item.name"
        :placeholder="item.placeholder"
        :data="item.data"
        :validation="item.validation"
        :searchable="!!item.searchable"
      />
    </template>
    <template v-if="item.type === 'checkbox'">
      <CheckboxCustom
        v-bind:key="item.name"
        v-model="form[item.name]"
        :name="item.name"
        :label="item.label"
        :validation="item.validation"
      />
    </template>
  </template>
</template>
