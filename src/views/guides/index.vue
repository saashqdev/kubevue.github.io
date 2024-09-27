<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar" color="inverse">
                <u-sidebar-group title="Tutorial">
                    <u-sidebar-item to="/guides/introduction">Introduction</u-sidebar-item>
                    <u-sidebar-item to="/guides/installation">Installation</u-sidebar-item>
                    <u-sidebar-item to="/guides/quickstart">Getting Started</u-sidebar-item>
                    <u-sidebar-item to="/guides/structure">Directory Structure</u-sidebar-item>
                    <u-sidebar-item to="/guides/views">Pages and Routes</u-sidebar-item>
                    <u-sidebar-item to="/guides/library">Component Library</u-sidebar-item>
                    <u-sidebar-item to="/guides/components">Components</u-sidebar-item>
                    <u-sidebar-item to="/guides/css-modules">CSS</u-sidebar-item>
                    <u-sidebar-item to="/guides/assets">Resources</u-sidebar-item>
                    <u-sidebar-item to="/guides/test">Test</u-sidebar-item>
                    <u-sidebar-item to="/guides/deployment">Packaging and Deployment</u-sidebar-item>
                    <u-sidebar-item to="/guides/commands">Common Commands</u-sidebar-item>
                    <u-sidebar-item to="/guides/config">Basic Configuration</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Style Guide">
                    <u-sidebar-item to="/guides/editor">Editor Configuration</u-sidebar-item>
                    <u-sidebar-item to="/guides/js-style">JavaScript Style</u-sidebar-item>
                    <u-sidebar-item to="/guides/css-style">CSS Style</u-sidebar-item>
                    <u-sidebar-item to="/guides/vue-style">Vue Style</u-sidebar-item>
                    <u-sidebar-item to="/guides/ui-style">Component Design Style</u-sidebar-item>
                </u-sidebar-group>
                <!-- <u-sidebar-group title="Advanced">
                    <u-sidebar-item to="/guides/af">Introduction</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">Configuration</u-sidebar-item>
                    <u-sidebar-item to="/guides/wefef">Packaging</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Full stack">
                    <u-sidebar-item to="/guides/af">Introduction</u-sidebar-item>
                    <u-sidebar-item to="/guides/vweeve">Configuration</u-sidebar-item>
                </u-sidebar-group> -->
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const advanced = !!JSON.parse(localStorage.getItem('advanced'));

        return {
            advanced,
        };
    },
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: $sidebar-width;
    top: $navbar-height;
    bottom: 0;
    overflow: hidden;
}

.sidebar {
    width: calc($sidebar-width + 8px);
}

.sidebar > * {
    width: $sidebar-width;
}

.main {
    margin-left: $sidebar-width;
    max-width: 1010px;
    padding-left: 50px;
    padding-bottom: 50px;
    padding-top: 30px;
}
</style>