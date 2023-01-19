<script>
import { Field, ErrorMessage } from "vee-validate";
import s from "./CheckboxCustom.modules.scss";

export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: Boolean, required: true },
    handler: { type: Function, required: true },
    validator: Function
  },
  setup() {
    // const checkboxValue = ref(props.value);
    // const checkboxHandler = () => {
    //   checkboxValue.value = !checkboxValue.value;
    //   console.log(checkboxValue);
    // };
    return { s };
  },
  components: { Field, ErrorMessage }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      :id="name"
      @change="handler"
      :value="value"
      :name="name"
      type="checkbox"
      :rules="validator"
    />
    <label :for="name">{{ label }}</label>
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
