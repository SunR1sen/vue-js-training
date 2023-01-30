<script>
import { Field, ErrorMessage } from "vee-validate";
import { selectValues } from "@/services/formService";
import { isRequired } from "@/services/validators";
import s from "./SelectCustom.modules.scss";
import vSelect from "vue-select";

export default {
  props: {
    name: {
      required: true,
      type: String
    },
    placeholder: String,
    data: Array,
    required: Boolean,
    style: String
  },
  emits: ["update:modelValue"],
  setup(props) {
    const selectData = props.data ? props.data : selectValues(props.name);
    return {
      s,
      isRequired,
      selectData
    };
  },
  components: { Field, ErrorMessage, vSelect }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      v-slot="{
        field
        // , handleChange
      }"
      :rules="
        () => {
          return isRequired;
        }
      "
      :name="name"
    >
      <v-select
        :options="selectData"
        label="name"
        v-bind="field.value"
        @option:selected="(value) => $emit('update:modelValue', value)"
        @option:deselected="() => $emit('update:modelValue', 0)"
        @input="() => $emit('update:modelValue', null)"
        :clearable="false"
        :searchable="false"
      >
      </v-select>
    </Field>
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
