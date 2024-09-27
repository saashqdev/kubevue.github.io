# Directory Structure

This section shows in detail the directory structure of different types of Kubevue projects, as well as the functions of various directories and files. If you find it unintuitive, you can check out the [Kubevue project template](https://github.com/saashqdev/kubevue-templates).

### Simple Single-Page Application (simple)

This type of project is a simple single-page app that has Vue Router configured. For example, the documentation page you are reading now is of this type.

Its directory structure is as follows:

```
.
├─ src/ # Source files
│ ├─ base/ # Basic configuration
│ │ ├─ global.css # CSS global variables. Will be injected into each CSS file. Please do not add anything other than variable declarations, otherwise a lot of CSS will be generated.
│ │ ├─ base.css # Basic CSS layout style.
│   │   └─ ...
│ ├─ views/ # View (page) directory. Store all pages according to the routing hierarchy
│ │ ├─ index.(html|ejs) # Page entry template
│ │ ├─ index.js # JS entry
│ │ ├─ index.vue # Vue entry
│ │ ├─ routes.js # Routing configuration
│ │ ├─ main.vue #Home page
│ │ ├─ page2.vue # Page 2
│ │ ├─ page3/ #
│ │ │ ├─ index.vue # Page 3
│ │ │ ├─ routes.js # Subroutes
│ │ │ ├─ subpage1.vue # Subpage 3-1
│   │   │   └─ ...
│   │   └─ ...
│ ├─ components/ # Component (library) directory. Stores all components that need to be globally registered in Vue
│ │ ├─ index.js # Index file
│ │ ├─ common # Common components
│ │ │ ├─ u-search-box.vue # For example, a general search box
│   │   │   └─ ...
│ │ ├─ specific # Specific component
│ │ │ ├─ u-purchase-list.vue # For example, a purchase list
│   │   │   └─ ...
│ │ ├─ cloud-ui # Components that need to be rewritten for CodeWave. Design
│ │ │ ├─ u-select.vue # For example, you need to rewrite the Select component
│   │   │   ├─ u-select-item.vue
│   │   │   └─ ...
│ │ └─ ... # You can also add other libraries
│ ├─ assets/ # Resource directory. Stores resource files that need to be imported in Webpack
│ ├─ services/ # Data layer. You can configure it yourself, but Kubevue does not handle it at present.
│ ├─ filters/ # General filters
│ ├─ directives/ # General directives
│ ├─ utils/ # General utility library
│   └─ ...
├─ static/ # Static file directory. The contents of this directory will be copied directly to the output directory
├─ public/ # Output directory. All generated files are here
├─ test/ # Test directory. Most component tests can be written in Vue files
│ ├─ unit/ # Unit tests
│ │ ├─ page2.spec.js # Unit test for page 2
│ │ ├─ page3/ #
│ │ │ ├─ index.spec.js # Unit test for page 3
│ │ │ ├─ subpage1.spec.js # Unit test for subpage 3-1
│   │   │   └─ ...
│   │   └─ ...
│ └─ e2e/ # End-to-end test
│ ├─ page2.spec.js # End-to-end test of page 2
│ ├─ page3/ #
│ │ ├─ index.spec.js # End-to-end test for page 3
│ │ ├─ subpage1.spec.js # End-to-end test of subpage 3-1
│       │   └─ ...
│       └─ ...
├─ .babelrc #Babel configuration
├─ .eslintrc # ESLint configuration
├─ .eslintignore # Files that need to be ignored by ESLint
├─ .gitignore # Files that need to be ignored by git
├─ package.json # npm package configuration
├─ kubevue.config.js # Kubevue configuration
├─ README.md #Default project documentation
└─ ...
```

Some paths or names can be configured in `kubevue.config.js` according to actual conditions. See [Configuration](/api/config) for details.

### Medium-Sized Multi-Page Application (web-app)

This project structure is suitable for multi-page, multi-module, enterprise-level application scenarios, such as when backend routing is needed to control login permissions, business modules are large and complex, or may even be split into sub-projects, etc.

Its directory structure is very similar to most of `simple`, only `src/views` is different, so only that part is listed below:

```
.
├─ src/ # Source files
│ ├─ views/ # View (page) directory. Store all pages according to the routing hierarchy
│ │ ├─ login/ # Login page
│ │ │ ├─ index.(html|ejs) # Page entry template
│ │ │ ├─ index.js # JS entry
│ │ │ └─ index.vue # Vue entry
│ │ ├─ index/ # Home
│ │ │ ├─ index.(html|ejs) # Page entry template
│ │ │ ├─ index.js # JS entry
│ │ │ ├─ index.vue # Vue entry
│ │ │ ├─ routes.js # Routing configuration
│ │ │ ├─ main.vue #Home page
│ │ │ ├─ page2.vue # Page 2
│ │ │ ├─ page3.vue # Page 3
│   │   │   └─ ...
│ │ ├─ dashboard/ # Complex page
│ │ │ ├─ index.(html|ejs) # Page entry template
│ │ │ ├─ index.js # JS entry
│ │ │ ├─ index.vue # Vue entry
│ │ │ ├─ routes.js # Routing configuration
│ │ │ ├─ overview.vue # Overview module
│ │ │ ├─ module2/ #
│ │ │ │ ├─ module.js # Module configuration
│ │ │ │ ├─ index.vue # Module 2 page
│ │ │ │ ├─ routes.js # Subroutes
│ │ │ │ ├─ sub1.vue # Submodule 3-1
│   │   │   │   └─ ...
│   │   │   ├─ module3/             #
│ │ │ │ ├─ module.js # Module configuration
│ │ │ │ ├─ components/ # Module-level components
│ │ │ │ │ ├─ s-detail.vue #Details component
│   │   │   │   │   └─ ...
│ │ │ │ ├─ filters/ # Module-level filters
│ │ │ │ ├─ directives/ # module-level directives
│ │ │ │ ├─ utils/ # Module-level utility library
│ │ │ │ ├─ index.vue # Module 3
│ │ │ │ ├─ routes.js # Subroutes
│ │ │ │ ├─ sub1.vue # Submodule 3-1
│   │   │   │   └─ ...
│   │   └─ ...
│   └─ ...
└─ ...
```

In order to adapt to large-scale scenarios, separate public and private, and facilitate code management, it has to be so complicated.

### Component Library or Tool Library (Library)

This type of project is a Kubevue component library or tool library. For example, Proto UI, CodeWave. Design, and Icon Sets are of this type.

Its directory structure is as follows:

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
│ │ ├─ u-select.vue # Select component
│ │ │ ├─ item.vue # child component
│ │ ├─ u-pagination.vue # Pagination component
│ └─ ... # Other components
├─ public/ # Output directory. All generated files are here
├─ test/ # Test directory. Most component tests can be written in Vue files
│   └─ ...
├─ .babelrc # Babel configuration
├─ .eslintrc # ESLint configuration
├─ .eslintignore # Files that need to be ignored by ESLint
├─ .gitignore # Files that need to be ignored by git
├─ package.json # npm package configuration. Simple Kubevue configuration can also be written here
├─ README.md # Default project documentation
└─ ...
```

### Next Step

Still confused? The next few sections will break down the entire set of technologies. The next section [Pages and Routes](/guides/views).