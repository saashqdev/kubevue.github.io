# Componentization

### Completely Componentized

In the Kubevue concept, we call each fully functional structural unit in the user interface a **component**.

"Full-featured" here not only refers to templates (HTML), styles (CSS) and logic (JS), but also includes dependent resources, documents, unit tests, etc. We call this **componentized completeness* *.

For some traditional front-end projects, the directory structure will be divided according to `html`, `css`, `js`, `docs`, and `test`. This often leads to deep path references, undivided files, confusing directory structures, and components. Problems such as inability to extract separately.

In Kubevue, we adopt the principle of **one component, one place**.

#### Single File Component

We have extended Vue's native single-file component. For example, a `u-select.vue` file:

```xhtml
<template></template> <!-- Component template -->
<script></script> <!-- Component logic -->
<style module></style> <!-- Component style -->
<test></test> <!-- Unit test -->
<docs></docs> <!-- Component documentation -->
<changelog></changelog> <!-- Modification log -->
```

In addition to the original three tags of `<template>`, `<script>` and `<style>`, [vue-loader](https://github.com/vuejs/vue-loader) also uses [custom Blocks](https://vue-loader.vuejs.org/en-us/configurations/custom-blocks.html) function adds three tags: `<test>`, `<docs>`, and `<changelog>` .

#### Multi-File Component

But sometimes the functions that a single file can support are still a bit weak, such as the inability to place resources, so we created [vue-multifile-loader](https://github.com/kubevue/vue-multifile-loader), which is similar to `vue -Loader` functions are always synchronized.

In this way, a Vue component can be written in the following way:

```
u-select.vue/index.html # Component template
u-select.vue/index.js # Component logic
u-select.vue/module.css # Component style
u-select.vue/icons/arrow-down.svg # Related resources
u-select.vue/test.spec.js # Unit test
u-select.vue/README.md # Component documentation
u-select.vue/CHANGELOG.md # Modify log
u-select.vue/package.json # npm package information
```

#### Single File Component vs Multi-File Component

So why support both writing methods at the same time?

Mainly because both writing methods have their own characteristics. Single-file components are faster to create and are a native feature of Vue. They are suitable for writing business modules; while multi-file components support more functions and are suitable for constructing general components for easy expansion.

Webpack's module introduction string can omit the `index.js` part, so both writing methods can be written as `import Select from 'u-select.vue'`, which will not affect the dependent modules.

Generally speaking, the functionality of a single-file component is a subset of the functionality of a multi-file component. If a component does not use those additional features, we consider the two writing methods to be **equivalent**.

Therefore, Kubevue CLI provides a `transform` command to convert components between the two.

``` shell
kubevue transform ./src/u-select.vue
```

<!-- Consistency -->

### Classification of Components

In a project, components can generally be classified into two categories:

- **Common components (common)**: Components that may be used in multiple modules in the project. It is recommended to register globally in Vue and conduct unified management.

    ``` javascript
    Vue.component('u-select', Select);
    ```

- **Specific component (specific)**: Components used by only individual modules in the project. In order to reduce global pollution, it is recommended to use Vue's `components` option for local registration.

    ``` javascript
    export default {
        components: {
            's-task-detail': TaskDetail,
        },
    };
    ```

### Extension and Inheritance of Components

In Vue, you can use `extend` or `mixin` to extend and inherit components.

For example, form controls all have some common features such as validation, feedback, and restrictions. At this time, we can extract these features into a base class component `u-field`, and then let `u-input`, `u-select`, ` u-date-picker` etc. are derived from this base component.

After complete modularization, component dependencies can only take the JS route. If you want to override the style or add attributes to the component `u-select` in a component library, you need to derive a new component also called `u-select` from this component, and then register the original component in the global registration Cover it.

For the convenience of description, we call the latter derivation with the same name **extension** and the former derivation with the same name **inheritance**.

#### Strategies for Extension and Inheritance

For simplicity, when a component is extended or inherited, some functional blocks such as templates, styles, and logic can be omitted if they do not change.

The following table shows the expansion and inheritance strategies when several function blocks are omitted or not omitted.

| | Logic (JS) | Template (HTML) | Style (CSS) | Documentation (Docs) |
| ----- | --------- | ---------- | ---------- | ---------- |
| Omitted | *Error* | Consistent with base component | Consistent with base component | Consistent with base component |
| Not omitted | Vue's Mixin strategy | Override | Supplement/Merge/Rewrite | Override |

Precisely because Kubevue provides such a flexible extension and inheritance mechanism for components, it supports any combination and derivation of the component library, improving the applicability of the component library. The next section will describe how it is done.
