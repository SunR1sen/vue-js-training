<script>
import { Field, ErrorMessage } from "vee-validate";
import { selectValues } from "@/services/formService";
import { isRequired } from "@/services/validators";
import vSelect from "vue-select";
import s from "./SelectCustom.modules.scss";

export default {
  props: {
    name: {
      required: true,
      type: String
    },
    placeholder: String,
    data: Array,
    style: String,
    validator: Function
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
    <Field v-slot="{ field, handleChange }" :rules="validator" :name="name">
      <v-select
        :class="s.simpleSelect"
        :options="selectData"
        :placeholder="placeholder"
        v-bind="field.value"
        @option:selected="
          (value) => {
            handleChange(value, true);
            $emit('update:modelValue', value);
          }
        "
        :clearable="false"
        :searchable="false"
        :multiple="false"
      >
      </v-select>
    </Field>
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
