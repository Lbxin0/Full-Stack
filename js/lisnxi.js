const Design=Vue.extend({
    template:"#design"
});
const article=Vue.extend({
    template:"#article"
});

const routes=[
    {path:"/design",component:Design},
    {path:"/article",component:article},

];
const router=new VueRouter({
    routes:routes
})
var app=new Vue({
    router:router,
}).$mount("#app")
    