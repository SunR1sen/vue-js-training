<template>
  <div :class="style.wrapper">
    <Field
      :class="[style.input, style[size || 'medium']]"
      type="text"
      :name="name"
      :rules="validator"
      :placeholder="placeholder"
      autocomplete="cc-number"
    />
    <ErrorMessage :class="style.error" :name="name" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import style from "./InputExample.modules.scss";

export default {
  name: "InputExample",
  components: {
    Field,
    ErrorMessage
  },

  props: {
    name: { type: String, required: true },
    validator: { type: Function, required: true },
    placeholder: { type: String, required: true },
    size: String
  },

  data: () => ({
    style
  })
};
</script>
