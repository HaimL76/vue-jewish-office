<template>
  <h1>מידע אישי</h1>
  <div>
שם פרטי {{person.first}}
שם משפחה {{person.last}}
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const person = reactive({ first: 'זלמן', last: 'פוזננסקי' });
      const dummy = ref(0);

      // expose to template
      return {
        person,
        dummy
      };
    }
  }
</script>
