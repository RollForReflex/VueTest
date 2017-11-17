import Vue from 'vue';
import Router from 'vue-router';

const isLoggedIn = true;

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: function (resolve) {
                require(['../components/home/Home.vue'], resolve);
            },
            beforeEnter: checkAuthorization
        },
        {
            path: '/migration',
            name: 'Migration Example',
            component: function (resolve) {
                require(['../components/migration/Migration.vue'], resolve);
            },
        },
        {
            path: '/unauthorized',
            name: 'Unauthorized',
            component: function (resolve) {
                require(['../components/redirects/unauthorized/Unauthorized.vue'], resolve);
            }
        }
    ]
});

function checkAuthorization(to, from, next) {
    if (!isLoggedIn) {
        next({
            path: '/unauthorized',
            query: { redirect: to.fullPath }
        });
    }
    else {
        next();
    }
}

export default router;