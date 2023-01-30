<script>
import { Field, ErrorMessage } from "vee-validate";
import s from "./CheckboxCustom.modules.scss";

export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    modelValue: { type: Boolean, required: true },
    validator: Function
  },
  setup() {
    return { s };
  },

  emits: ["update:modelValue"],

  components: { Field, ErrorMessage }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      v-slot="{ field, handleChange }"
      :name="name"
      type="checkbox"
      :rules="validator"
      :checked="modelValue"
    >
      <label>
        <input
          @change="
            (e) => {
              handleChange(e.target.checked, true);
              $emit('update:modelValue', e.target.checked);
            }
          "
          type="checkbox"
          :name="name"
          v-bind="field"
          :checked="modelValue"
        />
        {{ label }}
      </label>
    </Field>
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
