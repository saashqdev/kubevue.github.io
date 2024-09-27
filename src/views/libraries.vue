<template>
<div :class="$style.root">
    <div :class="$style.main">
        <u-library :colors="['#67aaf5', '#4a89e8', '#2cb78e']" target="_blank" title="KubeVue. Design" logo="kubevue" brief="UI Library"
                    href="https://kubevue.github.io/cloud-ui">
            Extended from Proto UI, it has complete components, powerful functions, and multiple themes, and is used to quickly build NetEase Cloud-style web applications.
        </u-library>
        <!-- <u-library :colors="['#457cd0', '#575962']" target="_blank" title="Kubevue UI" logo="kubevue" brief="UI Library" href="https ://kubevue.github.io/kubevue-ui">
            The standard component library officially provided by Kubevue is beautiful and functional, and can be used to quickly build websites.
        </u-library> -->
        <u-library :colors="['#457cd0', '#f4f5f9']" target="_blank" title="Proto UI" brief="UI Library" href="https://kubevue.github.io/ proto-ui">
            The prototype component library officially provided by Kubevue has a simple style and complete functions, and is used for rapid expansion of new component libraries.
        </u-library>
        <u-library :colors="['#575962', '#f4f5f9']" target="_blank" title="Icon Sets" logo-color="#575962" brief="Icon Library" href="https: //kubevue.github.io/icon-sets">
            Kubevue Icon Library
        </u-library>
        <u-library target="_blank" title="Charts" logo-color="#d34345" brief="Chart Library" href="https://kubevue.github.io/charts">
            Adapted to popular chart libraries on the market
        </u-library>
        <u-library target="_blank" title="Editors" logo-color="#3674ab" brief="Editors" href="https://kubevue.github.io/editors">
            Adapted to popular editors on the market
        </u-library>
        <!-- <u-library target="_blank" title="Kubeworkz UI" disabled logo-color="#e24244"></u-library>
        <u-library target="_blank" title="Material Design" disabled logo-color="#20bcd2"></u-library> -->
        <!-- <u-library target="_blank" title="Flat UI" disabled logo-color="#2abb9c"></u-library> -->
        <!-- <u-library target="_blank" title="Mac Style" :colors="['#419bf9', '#f4f4f4']" logo-color="#459df6" brief="UI Library" href ="https://kubevue.github.io/mac-style">
            Extended from Proto UI, it simulates the native Mac style and is used to quickly build Electron applications under Mac.
        </u-library> -->
        <u-library more href="mailto:kubeworkz@gmail.com?subject=%E6%88%91%E4%BB%AC%E6%83%B3%E6%8F%90%E4%BE%9B%E4%B8%80%E5%A5%97%E8%87%AA%E5%B7%B1%E7%9A%84%E7%BB%84%E4%BB%B6%E5%BA%93"></u-library>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.root {
    background: #f4f5f9;
    /* display: flex;
    flex-wrap: wrap; */
    padding: 40px 0;
    min-height: calc(100vh - $navbar-height);
}

.main {
    text-align: left;
    width: 1200px;
    margin: 0 auto;
}
</style>
