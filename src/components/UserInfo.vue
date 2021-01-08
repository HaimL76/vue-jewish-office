<template>
  <h1>מידע אישי</h1>
  <div>
    שם פרטי {{person.first}}
    שם משפחה {{person.last}}
  </div>
</template>


<script>
import { ref, reactive, onMounted } from "vue";
import { login } from "../modules/login.ts";
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

function fetchData() {
  

  var endPoint = 'https://jewishoffice.co.il/tora-app/backend/get_users.php?uid=1';

    loading.value = true;
    // I prefer to use fetch
    // you can use use axios as an alternative
    return fetch(endPoint, {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      // a non-200 response code
      if (!res.ok) {
        // create error instance with HTTP status text
        const error = new Error(res.statusText);
        error.json = res.json();
        throw error;
      }

      return res.json();
    })
    .then(json => {
      // set the response data
      data.value = json.data;

      //alert(JSON.stringify(data.value));
    })
    .catch(err => {
      error.value = err;

      //alert(JSON.stringify(error.value));

      // In case a custom JSON error response was provided
      if (err.json) {
        return err.json.then(json => {
          // set the JSON response message
          error.value.message = json.message;
        });
      }
    })
    .then(() => {
      loading.value = false;
    });
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

