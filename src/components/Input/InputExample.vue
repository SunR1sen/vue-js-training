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
  selectMask
} from "@/services/formService";
import s from "./InputExample.modules.scss";

export default {
  name: "InputExample",
  components: {
    Field,
    ErrorMessage
  },

  props: {
    name: { type: String, required: true },
    style: String,
    required: Boolean
  },

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
    selectMask
  }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      :class="[s.input, s[style]]"
      type="text"
      :name="name"
      :rules="selectValidator(name)"
      :placeholder="selectPlaceholder(name)"
      :autocomplete="selectAutocomplete(name)"
      :data-maska="selectMask(name)"
      v-maska
    />
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
