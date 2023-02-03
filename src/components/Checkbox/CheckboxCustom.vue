<script>
import { Field } from "vee-validate";
import s from "./CheckboxCustom.modules.scss";

export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    modelValue: { type: Boolean, required: true },
    validation: Object,
    error: String
  },
  setup() {
    return { s };
  },

  emits: ["update:modelValue"],

  components: { Field }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      v-slot="{ field, handleChange, errors }"
      :name="name"
      type="checkbox"
      :rules="validation"
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
      <span :class="s.error">{{ error ? error : errors[0] }}</span>
    </Field>
  </div>
</template>
