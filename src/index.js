import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import 'kubevue-ui.kubevue/src/base/base.css';
import * as KubevueUI from 'kubevue-ui.kubevue';

import Article from './components/u-article.vue';
import Library from './components/u-library.vue';
import Example from './components/u-example.vue';
import Template from './components/u-template.vue';
import Feature from './components/u-feature.vue';
import FeatureButton from './components/u-feature-button.vue';
import './base/base.css';

const UILibrary = Object.assign({}, KubevueUI, {
    // GlobalLayout,
    Article,
    Library,
    Example,
    Template,
    Feature,
    FeatureButton,
});

import { install } from 'kubevue-utils';

install(UILibrary, Vue);

import routes from './routes';
new Vue({
    router: new VueRouter({
        mode: history.pushState ? 'history' : 'hash',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
