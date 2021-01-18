<template>
  <h1>מידע אישי</h1>
  <div>
    שם פרטי {{person.first}}
    שם משפחה {{person.last}}
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { login } from "../modules/login.js";
export default {
  name: 'UserInfo',
  props: {
  },
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const person = reactive({
      first: ref(null), 
      last: ref(null)
    });

    async function fetchData() {
      var response = await login('aaa', 'bbb');

      var endpoint = '../backend/get_users.php?uid=1';

      loading.value = true;
      // I prefer to use fetch
      // you can use use axios as an alternative
      response = await fetch(endpoint, {
        method: 'get',
        //headers: custom_headers
      });

      return response;
    }
    
    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
      person
    };
  }
}
</script>

