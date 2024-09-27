# Components

We call each fully functional structural unit in the user interface a **component**.

### Component Structure

In reality, a component often includes not only templates (HTML), styles (CSS) and logic (JS), but also the resources, documents, unit tests, etc. that it depends on.

In order to better manage files, kubevue adopts the principle of **one component in one place**.

#### Single File Components

We have extended Vue's native single-file component. For example, a `u-select.vue` file:

``` xhtml
<template></template> <!-- Component template-->
<script></script> <!-- Component logic-->
<style module></style> <!-- Component style-->
<test></test> <!-- Unit test -->
<docs></docs> <!-- Component documentation -->
<changelog></changelog> <!-- Change log -->
```

In addition to the original `<template>`, `<script>`, and `<style>` tags, we use the [custom block](https://vue-loader.vuejs.org/en-us/configurations/custom-blocks.html) feature of [vue-loader](https://github.com/vuejs/vue-loader) to add the `<test>`, `<docs>`, and `<changelog>` tags.

#### Multi-File Components

But sometimes the functions that a single file can support are still a bit weak, such as the inability to place other files such as resources, so we created [vue-multifile-loader](https://github.com/kubevue/vue-multifile-loader), which will often keep in sync with the functions of `vue-loader`.

Thus, a Vue component can be written as follows:

```
u-select.vue/index.html # Component template
u-select.vue/index.js # Component logic
u-select.vue/module.css # Component style
u-select.vue/assets/arrow-down.svg # Related resources
u-select.vue/test.spec.js # Unit test
u-select.vue/README.md # Component documentation
u-select.vue/CHANGELOG.md # Change log
u-select.vue/package.json # npm package information
```

#### Single-File Components vs. Multi-File Components

Why support two writing methods at the same time?

Mainly because the two writing methods have their own characteristics. Single-file components are quick to create and are also a native feature of Vue, suitable for writing page components; multi-file components support more functions and are suitable for constructing general components and are easy to expand.

Webpack's module import string can omit the `index.js` part. Both writing methods can be written as `import USelect from 'u-select.vue'`, so they will not affect the dependent modules.

In general, the two ways of writing are **equivalent**.

### Component Extension and Inheritance

Flexible expansion of components is a major feature of kubevue.

In actual business, we often encounter such a situation: the new component to be developed is similar to the original component, but the function or style is slightly different. If you rewrite one, the cost is high or you have to maintain two codes in the future, so extending the original component is a good choice.

On the one hand, extensions can have different degrees, such as extending only the style, changing only the icon, extending the style and logic, or even rewriting the template; on the other hand, since most of these components are globally registered in Vue, the new component can have the same name as the original component and overwrite the original component. For the convenience of description, we call the same name **extension** and the different names **inheritance**.

Here are some examples that you can try in the kubevue project you just created:

#### Extended Styles Only

``` xhtml
<script>
import { USelect as OSelect } from 'proto-ui.kubevue/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: USelect,
};

export default USelect;
</script>

<style module>
@import 'proto-ui.kubevue/src/components/u-select.vue';

.root {
    height: 36px;
    border-color: #ccc;
}
</style>
```

The component's dependencies are determined only by JS, so the content in the `<script>` tag is necessary.

#### Modify Icons in Style

In kubevue, resource issues are all style issues.

In the style, we provide a shorthand way of inheritance `@extend;`, which can automatically find dependencies based on `extends` in JS.

``` xhtml
<script>
import { USelect as OSelect } from 'proto-ui.kubevue/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: USelect,
};

export default USelect;
</script>

<style module>
@extend;

.root:before {
    icon-font: url('../assets/my-arrow-down.svg');
}
</style>
```

#### Inherit and Add Styles

For example, now we want to create a new component `<u-custom-select>` which is very similar to `<u-select>`.

``` xhtml
<script>
import USelect from 'proto-ui.kubevue/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
};

export default UCustomSelect;
</script>

<style module>
@extend;

.root {
    height: 36px;
    border-color: #ccc;
}
</style>
```

#### Inherit and Override Styles

You can override component styles and still use the original component's template and logic without `@import` or `@extend` the original component's styles in the `<style>` tag.

``` xhtml
<script>
import USelect from 'proto-ui.kubevue/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
};

export default UCustomSelect;
</script>

<style module>
.root {
    height: 36px;
    border-color: #ccc;
}

.root[disabled] {
    color: red;
}
</style>
```

#### Extension Logic

The `extends` or `mixins` extension strategy of Vue components is used here.

``` xhtml
<script>
import { USelect as OSelect } from 'proto-ui.kubevue/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: OSelect,
    methods: {
        select() {
            // override
        },
    },
};

export default USelect;
</script>
```

#### Inherit and Add Logic

Same as the one with the same name, just change the `name` field.

``` xhtml
<script>
import USelect from 'proto-ui.kubevue/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
    methods: {
        select() {
            // override
        },
    },
};

export default UCustomSelect;
</script>
```

#### Overriding the Template

Templates do not have the ability to be extended, they can only be rewritten. Therefore, when designing components, it is best to make good use of the `<slot>` feature to reduce template rewriting.

``` xhtml
<template>
    <li :class="$style.root"><slot></slot></li>
</template>

<script>
import USelect from 'proto-ui.kubevue/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: USelect,
};

export default USelect;
</script>
```

#### All have Different Degrees of Expansion

``` xhtml
<template>
    <li :class="$style.root"><slot></slot></li>
</template>

<script>
import USelect from 'proto-ui.kubevue/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
    methods: {
        select() {
            // override
        },
    },
};

export UCustomSelect;
</script>

<style module>
@extend;

.root:before {
    height: 36px;
    border-color: #ccc;
    icon-font: url('../assets/my-arrow-down.svg');
}
</style>
```

Of course, this situation is relatively rare, and is occasionally used to deal with bugs, etc. If the difference is large, you can rewrite a component.

### Next Step

Next, we will talk about how to write [CSS](/guides/css-modules) in components.