<script>
import FormCustom from "./components/Form/FormCustom.vue";

export default {
  name: "App",
  components: {
    FormCustom
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    }
  }
};
</script>

<template>
  <FormCustom />
</template>
