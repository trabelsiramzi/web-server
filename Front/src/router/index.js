import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue'; 
import Login from '../components/AuthenticationForm.vue'; 
import Register from '../components/RegistrationForm.vue'; 
import Dashboard from '../components/Dashboard.vue'; 
import Menu from '../components/MenuList.vue'; 
import Item from '../components/ItemList.vue'; 
import Category from '../components/CategoryList.vue'; 

const routes = [
  // Routes existantes
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,
    meta: { requiresAuth: true } 
  },
  {
    path: '/items',
    name: 'Item',
    component: Item,
    meta: { requiresAuth: true }
  },
  {
    path: '/categories',
    name: 'Category',
    component: Category,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
