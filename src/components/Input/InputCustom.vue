<script>
import { Field } from "vee-validate";
import { vMaska } from "maska";
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
    Field
  },

  props: {
    name: { type: String, required: true },
    defaultValue: String,
    style: String,
    modelValue: { type: String, required: true },
    validation: Object,
    error: String
  },

  emits: ["update:modelValue"],
  data: () => ({
    s
  }),

  directives: { maska: vMaska },

  methods: {
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
      v-slot="{ field, errors, handleChange }"
      :rules="validation"
      :name="name"
    >
      <input
        @change="
          (e) => {
            $emit('update:modelValue', trimValue(e.target.value));
            handleChange(e);
          }
        "
        :class="[s.input, s[style]]"
        type="text"
        :name="name"
        :placeholder="selectPlaceholder(name)"
        :autocomplete="selectAutocomplete(name)"
        :value="modelValue"
        v-bind="field"
      />
      <span :class="s.error">{{ error ? error : errors[0] }}</span>
    </Field>
  </div>
</template>
