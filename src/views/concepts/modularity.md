# Modular

### Completely Modular

Usually large front-end projects need to process many resource files, such as common JS, CSS and pictures, as well as other static resources such as fonts, videos, audios, etc. Traditional tools such as Require.js, SASS/LESS, and Icomoon are often only one-sided. Without a certain type of resources, these solutions are incomplete in handling front-end modularization issues.

And in Webpack's view:

> All resources are modules.

We call this modular completeness.

After Webpack handles this, it has three major advantages:

- Simplification of dependencies: The dependencies of all resources such as CSS and images are unified along the JS route. There is no need to deal with the dependencies of the CSS preprocessor, and there is no need to deal with path issues such as image merging and font images during code migration;
- Integrated resource processing: For example, issues such as hashing, synchronous and asynchronous loading of resources can be handled uniformly, and complex files like Vue can also be accommodated in this system;
- Standardization of common components: Traditionally, there are various ways to introduce common components in a community, but now they can be standardized according to Webpack's loaders.

### Modularization of JS

Under the current development trend of JavaScript, there is no reason not to choose ES6 Modules.

#### Babel

Kubevue CLI has integrated [babel-loader](https://github.com/babel/babel-loader) and added default configuration [\<code\>](https://github.com/kubevue/kubevue -cli/blob/master/webpack/base.js#L98), but it will not take effect immediately.

If you have no requirements for browser compatibility, that is, as long as the latest modern browser supports it, such as Chrome, Firfox, Safari, or driving the App through Electron, and some future features of ECMAScript are not used in the code. Then it can run without babel.

Otherwise, you need to add a `.babelrc` file to the project root path. Kubevue will determine whether to enable `babel-loader` based on whether this file exists.

The simplest way is:

``` shell
npm install --save-dev babel-preset-env
```

Then add a `.babelrc` file under the project root path:

```json
{
    "presets": ["env"]
}
```

For other detailed configuration of Babel, please refer to the official documentation of [babeljs.io](https://babeljs.io/).

#### Compression and Obfuscation of JS

In the Webpack ecosystem, [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) is usually used to handle JS compression and obfuscation. This plug-in has also been integrated into the Kubevue CLI. .

Just add the configuration in the `kubevue` object in `kubevue.config.js` or `package.json`:

``` json
{
    "uglifyJS": true
}
```

You can also add the `--uglify-js` parameter when running the CLI build command:

``` shell
kubevue build --uglify-js
```

### Modularization of CSS

Although preprocessors such as SASS, LESS, and Stylus implement CSS file splitting, they do not solve the pain point of CSS modularization: the localization problem of selectors (global pollution problem).

It stands to reason that a modular file should hide the internal scope and only expose a small number of interfaces to users. According to the current preprocessor method, after introducing a CSS module, the existing styles are still at risk of being overwritten.

In order to avoid conflicts with global selectors and to avoid complex, cumbersome, and weakly constrained naming conventions, we use [CSS Modules](https://github.com/css-modules/css-modules) to solve this problem.

#### CSS Modules

In a single file Vue, add `module` directly to `<style>`, and dynamically bind the class in the template:

``` vue
<template>
<p :class="$style.red">
    This should be red.
</p>
</template>
<style module>
.red {
    color: red;
}

.bold {
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

For details, please refer to [vue-loader’s CSS Modules](https://vue-loader.vuejs.org/features/css-modules.html)

In multi-file Vue, add the `module.css` file in the `.vue` folder. The writing method is the same as that of single-file Vue.

```
u-sample.vue/
    index.html
    index.js
    module.css
```

#### REA Style

Based on CSS Modules, we introduced [PostCSS](https://github.com/postcss/postcss) and some of its plugins[\<code\>](https://github.com/kubevue/kubevue -cli/blob/master/webpack/base.js#L13), used to simplify style writing, and ultimately form a unique CSS writing style - REA style.

REA stands for Root, Element, Attribute, which borrows some ideas from BEM (Block, Element, Modifier), but it does not require those cumbersome word formation forms.

It has the following rules:

- Class is only used to represent the role of the element in the component
    - The root node is always `.root`
    - Child nodes are represented by a simple word, such as `head`, `item`, `side`, etc.
- Attribute is used for style extension, and the naming method is consistent with commonly used props
    - Boolean type, such as `selected`, `disabled`, `active`, `checked`, etc.
    - Color, such as `color="primary"`, `color="success"`, `color="error"`, etc.
    - Size, one word means that the width and height change at the same time, the former means the height and the latter means the width of the two words, similar to the `margin` or `padding` attributes of CSS. Such as `size="normal"`, `size="large"`, `size="mini large"`, etc.
- Don’t abbreviate words and use hyphens instead of camelCase
- Do not allow nesting of style blocks
- No need to add a browser prefix, the [autoprefixer](https://github.com/postcss/autoprefixer) plug-in has been introduced in PostCSS

Best example:

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

#### Priority issue [\<issue\>](https://github.com/kubevue/kubevue-cli/issues/21)

Since the dependencies of CSS are unified through JS, and then converted into tags and inserted into the page through [style-loader](https://github.com/webpack-contrib/style-loader), the order between the components cannot be guaranteed. . In rare cases, there will be priority issues. Here we recommend a writing method that can improve priority:

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

#### Extract CSS Into Separate Files

In the Webpack ecosystem, [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) is usually used to extract CSS content into independent files. This plug-in also Already integrated in Kubevue CLI.

Just add the configuration in the `kubevue` object in `kubevue.config.js` or `package.json`:

```json
{
    "extractCSS": true
}
```

You can also add the --extract-css parameter when running the CLI build command:

``` shell
kubevue build --extract-css
```

The extracted CSS file name is the same as the JS bundle file name, only the extension is different.

### Modularization of Images

Since bitmap images need to be set to @2x images under Retina screens, we recommend using svg images first.

Especially for single-color icons, you can convert svg into icon-font, and for multi-color icons, you can merge svg into svg-sprite. If that doesn't work, you can merge bitmap formats such as png or jpg into css-sprite.

#### icon-font

icon-font can easily set the color and size using CSS.

In Kubevue, we have developed an [icon-font-loader](https://github.com/kubevue/icon-font-loader/blob/master/README.md), which provides a custom The attribute `icon-font` is very convenient to use:

``` css
.select:after {
    icon-font: url('./icons/arrow-down.svg');
    color: #666;
}
```

it will turn into

``` css
.select:after {
    font-family: 'kubevue-icon-font';
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-decoration: inherit;
    text-rendering: optimizeLegibility;
    text-transform: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    content: '\f106';
    color: #666;
}
```

At the same time, fonts such as (eot, svg, ttf, woff) and a global @font-face file are generated.

> Why not introduce icons in HTML or JS? similar:

```xhtml
<div class="require('./inner.svg)">
```

- In fact, most icons also need to set CSS properties
- The introduction of image resources is essentially a style modification
- CSS has the feature of overriding

#### svg-sprite

svg-sprite has resizing features that css-sprite does not have.

In Kubevue, we use a [svg-sprite-loader](https://github.com/CXHtml/svg-sprite-loader). It’s also easy to use:

``` css
.root {
    background: url('./icons/refresh.svg?sprite');
    width: 200px;
    height: 120px;
}
```

it will turn into

``` css
.root {
    background: url('/public/sprite.1c9f4bcca4a42798.svg#refresh');
    width: 200px;
    height: 120px;
}
```

#### css-sprite

Under research. . .

You can use CSS background first, and use [file-loader](https://github.com/webpack-contrib/file-loader).

#### Other Resources

Other resources will be unified through [file-loader](https://github.com/webpack-contrib/file-loader). Currently, the formats `png|jpg|gif|eot|ttf|woff|woff2` have been configured [ \<code\>](https://github.com/kubevue/kubevue-cli/blob/develop/webpack/base.js#L88).

### Modularization

Modularization solves the organization problem of various resources in front-end engineering. So at the user interface (UI) level, how to decompose, reuse and manage a complex project efficiently belongs to the category of componentization. The next section will tell you in detail.
