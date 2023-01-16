<script>
import { Field, ErrorMessage } from "vee-validate";
import { isRequired } from "@/services/validators";
import s from "./SelectCustom.modules.scss";

export default {
  props: {
    name: {
      required: true,
      type: String
    },
    placeholder: String
  },
  setup(props) {
    const selectData = (name) => {
      if (name === "month") {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      }
      if (name === "year") {
        const currentYear = new Date().getFullYear();
        const data = [];
        for (let i = 0; i <= 10; i++) {
          data.push(currentYear + i);
        }
        return data;
      }

      return "";
    };
    const data = selectData(props.name);
    return {
      s,
      isRequired,
      data
    };
  },
  components: { Field, ErrorMessage }
};
</script>

<template>
  <div :class="s.wrapper">
    <Field :name="name" as="select" :class="s.select" :rules="isRequired">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="item in data" :class="s.option" :key="item" :value="item">
        {{ item }}
      </option>
    </Field>
    <ErrorMessage :class="s.error" :name="name" />
  </div>
</template>
