<template>
  <v-snackbar
    v-model="showSnackBar"
    top
    right
    fixed
    :color="snackbarColor"
    timeout="4000"
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      showSnackBar: false,
      snackbarColor: '',
      message: '',
    }
  },
  methods: {
    showSnack(message) {
      this.showSnackBar = true
      this.snackbarColor = message.color
      this.message = message.text
    },
  },
}
</script>

<style scoped></style>
