<script>
import Select from 'cloud-ui.kubevue/src/u-select.vue';

export default {
    name: 'u-theme-select',
    mixins: [Select],
};
</script>

<style module>
@import 'cloud-ui.kubevue/src/u-select.vue/module.css';

.root {
    height: 64px;
    line-height: 64px;
    background: none;
    border: none;
    color: white;
}

.root:hover {
    background: rgba(255,255,255,0.1);
}

.text {
    width: auto;
}

.root:after {
    color: white;
    font-size: 20px;
}

.popper {
    margin-top: 0px;
    border: none;
    border-radius: 0;
    box-shadow: 0 3px 4px rgba(0,0,0,0.1);
}
</style>
