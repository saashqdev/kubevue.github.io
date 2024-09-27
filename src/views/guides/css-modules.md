# CSS

### CSS Modules

In order to avoid conflicts in global selectors and complex naming conventions, Kubevue uses [CSS Modules](https://github.com/css-modules/css-modules) to solve this problem.

In a single-file Vue, add `module` directly to `<style>` and dynamically bind the class in the template:

``` view
<template>
<p :class="$style.red">
    This sentence <span :class="$style['strong-word']">should be</span> red.
</p>
</template>
<style module>
.red {
    color: red;
}

.strong-word {
    font-weight: bold;
}
</style>
```

These styles will be converted to

``` css
._21t-NHydruDPXRXUWJnMmm {
    color: red;
}

._2VTt8mZxuYxYIcjuT-eGzP {
    font-weight: bold;
}
```

For details, please refer to [CSS Modules of vue-loader](https://vue-loader.vuejs.org/features/css-modules.html).

> Note: If the class name has a hyphen, don't forget to use square brackets around `$style`, for example: `$style['strong-word']`.

In multi-file Vue, add a `module.css` file in the `.vue` folder. The writing method is the same as that of single-file Vue.

```
u-sample.vue/
    index.html
    index.js
    module.css
```

REA Style

On the basis of CSS Modules, we introduced [PostCSS](https://github.com/postcss/postcss) and some of its plugins [\<code\>](https://github.com/saashqdev/kubevue-cli/blob/master/webpack/base.js#L13) to simplify style writing and eventually form a unique CSS writing style - REA style.

REA stands for Root, Element, Attribute, which borrows some ideas from BEM (Block, Element, Modifier), but it does not require those cumbersome word formation forms.

It has the following rules:

- Class is only used to indicate the role of the element in the component
    - The root node is always `.root`
    - Child nodes are represented by a simple word, such as `head`, `item`, `side`, etc.
- Attribute is used for style extension, and the naming method is consistent with common props
    - Boolean type, such as `selected`, `disabled`, `active`, `checked`, etc.
    - Color, such as `color="primary"`, `color="success"`, `color="error"`, etc.
    - Size, one word means that the width and height change at the same time, two words, the former means height and the latter means width, similar to the CSS `margin` or `padding` attributes. For example, `size="normal"`, `size="large"`, `size="mini large"`, etc.
- Do not abbreviate words and use hyphens instead of camelCase
- Nesting of style blocks is not allowed
- No need to add browser prefixes, the [autoprefixer](https://github.com/postcss/autoprefixer) plugin has been introduced in PostCSS

Best examples:

``` xhtml
<template>
<div :class="$style.root">
    <div :class="$style.track">
        <div :class="$style.trail"></div>
    </div>
</div>
</template>
<style>
.root {
    width: 240px;
}

.track {
    height: 20px;
    background: #eee;
}

.trail {
    width: 30%;
    height: 100%;
    background: $brand-primary;
}

.root[color="success"] .trail {
    background: $brand-success;
}

.root[active] .trail {
    animation: ...
}
</style>
```

### Priority issue [\<issue\>](https://github.com/kubevue/kubevue-cli/issues/21)

Since the CSS dependencies are all in JS and then converted into tags by [style-loader](https://github.com/webpack-contrib/style-loader) and inserted into the page, the order between components cannot be guaranteed. In rare cases, there will be priority issues. Here we recommend a way to increase the priority:

``` xhtml
<template>
<u-button :class="$style.button">Button</u-button>
</template>

<style module>
.button[class] {
    color: red;
}
</style>
```

### Next Step

Various image resources in Kubevue will be added in CSS. The next section will explain how to handle [resources](/guides/assets).