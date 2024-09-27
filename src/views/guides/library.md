# Component Library

### Scope of Application

When we are working on a project, we usually put the common components in the project in one place for unified management. This is the **project-level** component library.

As the number of product projects increases, in order to ensure the consistency of interactive vision and reduce development costs, it is necessary to extract the common components in these projects and put them in a separate warehouse for unified management. This is the **product-level** component library.

There are always some components between multiple products, with similar interaction logic but quite different visuals. We can also simplify the visuals, retain the interaction logic and designed APIs, and form a prototype component library to facilitate the expansion of each product. This is a **cross-product level** component library.

### Directory Structure

In order for the above three levels of component libraries to form a derivation relationship and for components to migrate smoothly among them, they must have the same structure.

```
.
├─ src/ # Source files
│ ├─ index.js # Index file
│ ├─ base/ # Basic configuration
│ │ ├─ global.css # CSS global variables. Will be injected into each CSS file. Please do not add anything other than variable declarations, otherwise a lot of CSS will be generated.
│ │ ├─ base.css # Basic CSS layout style.
│   │   ├─ ...
│ ├─ assets/ # Resource directory. Stores resource files that need to be imported in Webpack
│ ├─ components/ # Component directory
│ │ ├─ category/ # Secondary directory, used for classification
│   │   │   ├─ u-search-box.vue
│   │   │   ├─ u-timeline.vue
│   │   │   └─ ...
│ │ ├─ u-select.vue # Select component
│   │   ├─ u-select-item.vue
│ │ ├─ u-pagination.vue # Pagination component
│ │ └─ ... # Other components
```

It is recommended that the component directory only include the second level of directories at most. If there are deeper directories, consider placing the components in the page module.

### Index File

The index file is a simple ES6 module that is only used to import and export components and does not handle other work.

The following is an example of an index file:

``` js
export * from 'proto-ui.kubevue';

export { USelect, USelectItem } from './u-select.vue';
export { UWell } from './u-well.vue';
```

If you want to register the components in this library with Vue globally, just use `install` of `kubevue-utils`:

``` js
import Vue from 'vue';

import * as Components from '@@/components';
import { install } from 'kubevue-utils';
install(Vue, Components);
```

`@@` is an alias that Kubevue automatically adds to `libraryPath` in Webpack.

### Design

The `base/global.css` file is used to define global CSS variables, which correspond to the color scheme, size and other design schemes in the visual design. It can be inherited by introducing the design scheme of other component libraries.

In order to be able to flexibly adjust the design scheme, such as theme color, rounded corners, etc., we do not allow it to be directly referenced in specific components (this will form a fixed dependency), but use a loader to inject it in each CSS file. Therefore, please do not add anything other than variable declarations in `global.css`, otherwise a lot of CSS will be generated.

### Basic Typography

The `base/base.css` file is used to set the basic CSS layout, such as the default color, font size, margin, etc. of the web page. It can also be inherited by introducing the basic layout of other component libraries.

It is recommended to inherit the `base.css` in `proto-ui`, which only makes some simple extensions to `normalize.css` and uniformly uses the `box-sizing: border-box` property.

For example, the following is an example of a simple `base.css` file:

``` css
@import 'proto-ui.kubevue/src/base/base.css';

body {
    color: #333;
}
```

### Next Step

Next, we will discuss some technical details of the [components](/guides/components) in the component library.