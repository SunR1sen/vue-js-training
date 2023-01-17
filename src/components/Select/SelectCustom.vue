<script>
import { Field, ErrorMessage } from "vee-validate";
import { selectValues } from "@/services/formService";
import { isRequired } from "@/services/validators";
import s from "./SelectCustom.modules.scss";

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
  setup(props) {
    const selectData = props.data ? props.data : selectValues(props.name);
    return {
      s,
      isRequired,
      selectData
    };
  },
  components: { Field, ErrorMessage }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      :name="name"
      as="select"
      :class="[s.select, s[style]]"
      :rules="required ? isRequired : ''"
    >
      <option disabled value="">{{ placeholder }}</option>
      <option
        v-for="item in selectData"
        :class="s.option"
        :key="item"
        :value="item"
      >
        {{ item }}
      </option>
    </Field>
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
