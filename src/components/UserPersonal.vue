<template>
  <h1>הדף שלי</h1>
</template>

<script>
export default {
  name: 'UserPersonal',
  props: {
    first: String,
    last: String,
    title: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
