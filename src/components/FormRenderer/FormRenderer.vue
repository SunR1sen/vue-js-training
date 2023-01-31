<script>
import InputCustom from "../Input/InputCustom.vue";
import SelectCustom from "../Select/SelectCustom.vue";
import CheckboxCustom from "../Checkbox/CheckboxCustom.vue";

export default {
  name: "FormRenderer",
  props: {
    formData: Array
  },
  setup(props) {
    const form = props.formData.reduce((a, k) => {
      return {
        ...a,
        [k.name]: k.defaultValue
      };
    }, {});
    return {
      form
    };
  },
  components: {
    InputCustom,
    SelectCustom,
    CheckboxCustom
  }
};
</script>

<template>
  <template v-for="item in formData">
    <template v-if="item.type === 'input'">
      <InputCustom
        v-bind:key="item.name"
        v-model="form[item.name]"
        :name="item.name"
        :placeholder="item.placeholder"
      />
    </template>
    <template v-if="item.type === 'select'">
      <SelectCustom
        v-bind:key="item.name"
        v-model="form[item.name]"
        :name="item.name"
        :placeholder="item.placeholder"
      />
    </template>
    <template v-if="item.type === 'checkbox'">
      <CheckboxCustom
        v-bind:key="item.name"
        v-model="form[item.name]"
        :name="item.name"
        :label="item.label"
      />
    </template>
  </template>
</template>
