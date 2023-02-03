<script>
import { Field } from "vee-validate";
import { selectValues } from "@/services/formService";
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
    validation: Object,
    modelValue: { type: String, required: true },
    searchable: Boolean,
    style: String
  },
  emits: ["update:modelValue"],
  setup(props) {
    const selectData = props.data ? props.data : selectValues(props.name) || [];
    const checkForRequired = (validator) => {
      console.log(validator);
      if (!validator) {
        return false;
      }
      const findRequired = Object.keys(validator).filter(
        (item) => item === "required"
      );
      return {
        required: !!findRequired.length
      };
    };
    return {
      s,
      selectData,
      checkForRequired
    };
  },
  components: { Field, vSelect }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field
      v-slot="{ field, errors, handleChange }"
      :rules="checkForRequired(validation)"
      :name="name"
    >
      <v-select
        :class="s.simpleSelect"
        :options="selectData"
        :placeholder="placeholder"
        @option:selected="
          (value) => {
            handleChange(value, true);
            $emit('update:modelValue', value);
          }
        "
        v-bind="field"
        :clearable="searchable"
        :searchable="searchable"
        :multiple="false"
      >
      </v-select>
      <span :class="s.error">{{ errors[0] }}</span>
    </Field>
  </div>
</template>

<style>
/*Можно заюзать v-bind для прокидывания пропса*/
.vs__search::placeholder {
  color: #b6bebc;
}
</style>
