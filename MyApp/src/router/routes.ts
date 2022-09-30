import { RouteRecordRaw } from "vue-router"
const home = () => import("@/views/home.vue")

const routes:Array<RouteRecordRaw> = [
  {
    path:"/",
    name:"default",
    redirect(to){
      return '/home'
    }
  },
  {
    path:'/home',
    name:'home',
    component:home
  }
]

export default routes