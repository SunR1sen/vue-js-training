<script>
import { Field, ErrorMessage } from "vee-validate";
import { vMaska } from "maska";
import {
  validateCardNumber,
  validateCardholderName,
  isRequired
} from "@/services/validators";
import {
  selectPlaceholder,
  selectAutocomplete,
  selectValidator,
  selectMask,
  inputConfig
} from "@/services/formService";
import s from "./InputCustom.modules.scss";

export default {
  name: "InputExample",
  components: {
    Field,
    ErrorMessage
  },

  props: {
    name: { type: String, required: true },
    defaultValue: String,
    style: String,
    required: Boolean,
    modelValue: { type: String, required: true }
  },

  emits: ["update:modelValue"],
  data: () => ({
    s
  }),

  directives: { maska: vMaska },

  methods: {
    validateCardNumber,
    validateCardholderName,
    isRequired,
    selectPlaceholder,
    selectAutocomplete,
    selectValidator,
    selectMask,
    trimValue(value) {
      if (!value) {
        return "";
      } else if (this.name === inputConfig.name.cardNumber) {
        return value.replaceAll(" ", "");
      }
      return value;
    }
  }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      @change="(e) => $emit('update:modelValue', trimValue(e.target.value))"
      :class="[s.input, s[style]]"
      type="text"
      :name="name"
      :rules="selectValidator(name)"
      :placeholder="selectPlaceholder(name)"
      :autocomplete="selectAutocomplete(name)"
      :data-maska="selectMask(name)"
      v-maska
      :value="modelValue"
    />
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
