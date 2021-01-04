import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import UserInfo from "./components/UserInfo.vue";
import UserPersonal from "./components/UserPersonal.vue";
//import Home from "./components/Home.vue";
//import Ingredients from "./components/Ingredients.vue";
//import Recipes from "./components/Recipes.vue";
const history = createWebHistory();
const routes = [
    { path: "/", component: HelloWorld },
    { path: "/info", component: UserInfo },
    { path: "/personal", component: UserPersonal },
    //מידע
    //הדף שלי
    //הספקים
    //דפי שיחה
    //דואר
];
const router = createRouter({ history, routes });
export default router;