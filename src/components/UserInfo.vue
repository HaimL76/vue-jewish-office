<template>
  <h1>מידע אישי</h1>
</template>

<script>
export default {
  name: 'UserInfo',
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
