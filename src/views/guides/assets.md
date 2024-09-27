# Resource

Since bitmap images need to be set as @2x images on Retina screens, we recommend using svg images first.

In particular, monochrome icons can convert svg into icon-font, and multi-color icons can merge svg into svg-sprite. If that doesn't work, you can merge bitmap formats such as png or jpg into css-sprite.

#### icon-font

Icon-font can be easily set in color and size using CSS.

In Vusion, we developed an [icon-font-loader](https://github.com/saashqdev/icon-font-loader/blob/master/README.md), which provides a custom property `icon-font`, which is very convenient to use:

> Note: Use it in `:after`.

```css
.select:after {
    icon-font: url('./icons/arrow-down.svg');
    color: #666;
}
```

It will turn into

```css
.select:after {
    font-family: 'vusion-icon-font';
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

Generate fonts (eot, svg, ttf, woff) and a global @font-face file at the same time.

Why not include the icon in HTML or JS? Something like:

``` xhtml
<div class="require('./inner.svg)">
```

There are several main reasons:

- In fact, most icons also need to set CSS properties
- The introduction of image resources is essentially a style modification
- CSS has the property of duplication

#### svg-sprite

svg-sprite has a resizing feature that css-sprite does not have.

We developed a [svg-classic-sprite-loader](https://github.com/saashqdev/svg-classic-sprite-loader). It is also very convenient to use:

> [svg-sprite-loader]

```css
.root {
    background: url('./icons/refresh.svg?sprite');
    width: 200px;
    height: 120px;
}
```

It will turn into

```css
.root {
    background: url('/public/sprite.1c9f4bcca4a42798.svg');
    width: 200px;
    height: 120px;
}
```

#### css-sprite

We have developed another [svg-classic-sprite-loader](https://github.com/saashqdev/svg-classic-sprite-loader). It is also very convenient to use:

```css
.root {
    background: url('./icons/detail.png?sprite');
    width: 200px;
    height: 120px;
}
```

It will turn into

```css
.root {
    background: url('/public/sprite.1c9f4bcca4a42798.png');
    width: 200px;
    height: 120px;
}
```

Sprites can be grouped, for example:


```css
.root {
    background: url('./icons/detail.png?sprite=group1');
    width: 200px;
    height: 120px;
}
```

It will turn into

```css
.root {
    background: url('/public/group1.1c9f4bcca4a42798.png');
    width: 200px;
    height: 120px;
}
```

#### Other Resources

Other resources will be uniformly used by [file-loader](https://github.com/webpack-contrib/file-loader). Currently, the following formats have been configured: `png|jpg|gif|svg|eot|ttf|woff|woff2`[\<code\>](https://github.com/saashqdev/vusion-cli/blob/develop/webpack/base.js#L88).

### Next Step

Next section [test](/guides/test).