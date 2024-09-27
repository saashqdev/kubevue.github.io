<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar">
                <u-sidebar-item to="/concepts/technical-selection">Technical Selection</u-sidebar-item>
                <u-sidebar-item to="/concepts/modularity">Modularity</u-sidebar-item>
                <u-sidebar-item to="/concepts/component-based">Componentization</u-sidebar-item>
                <u-sidebar-item to="/concepts/library">Component Library</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Directory Structure</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Routing</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Services</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Component Documentation</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Interface Documentation</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Test</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Server-side Rendering</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>Packaging and Deployment</u-sidebar-item>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

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
