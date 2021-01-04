<template>
  <nav>
    <!--<router-link to="/">Vite Recipe Book</router-link>-->
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.to" :class="{ active: isActive(route.to) }">{{route.text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const routes = [
      { to: "/info", text: "מידע אישי" },
      { to: "/personal", text: "הדף שלי" }
    ];
    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = path => path === activeRoute.value
    return { isActive, routes };
  }
};
</script>