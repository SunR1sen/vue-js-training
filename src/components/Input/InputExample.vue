<script>
import { Field, ErrorMessage } from "vee-validate";
import {
  validateCardNumber,
  validateCardholderName,
  isRequired
} from "@/services/validators";
import { inputConfig } from "@/services/formConfig";
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

  methods: {
    validateCardNumber,
    validateCardholderName,
    isRequired,
    selectPlaceholder: (name) => {
      switch (name) {
        case inputConfig.name.cardNumber:
          return "CARD NUMBER";
      }

      return "";
    },

    selectValidator: (name) => {
      switch (name) {
        case inputConfig.name.cardNumber:
          return validateCardNumber;

        case inputConfig.name.cardholderName:
          return validateCardholderName;
      }

      return null;
    }
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
      autocomplete="cc-number"
    />
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
