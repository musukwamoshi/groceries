import Vue from 'vue'
import Router from 'vue-router'
import Groceries from './components/Groceries.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'groceries',
            component: Groceries
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})