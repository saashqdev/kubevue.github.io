# Common Commands

### kubevue -V, --version

This command is used to view the current version of kubevue.

### kubevue init \<project-type\> \<project-name\>

This command is used to create a new project. `project-type` can be selected from the following types: `app`, `app-pro`, `library`, `fullstack`. `project-name` is the name of the new project.

Templates for new projects can be found in [Kubevue Templates](https://github.com/saashqdev/kubevue-templates).

### kubevue dev

This command is used in the development phase. It will start a development server (WebpackDevSever), enable hot updates, and monitor file changes. When started, the page will automatically open in the browser.

- You can use the `-p` option to specify the port;
- You can use the `-O, --no-open` option to prevent the browser from opening automatically.

In dev mode, the faster packaging method `#eval-source-map` with Source Map is used. In order to quickly update, some loaders and plugins that are only needed for deployment will be turned off.

This mode automatically injects the environment variable `process.env.NODE_ENV === 'development'`.

### kubevue build

This command is used to package and publish. By default, UglifyJS will be used to compress and package svg and png sprite images.

- You can use `--extract-css` to extract CSS from JS;
- You can use `--source-map` to enable Source Map, which is convenient for debugging in the deployment environment.

In build mode, plugins such as `OccurrenceOrderPlugin` and `ModuleConcatenationPlugin` are used to optimize modules.

This mode automatically injects the environment variable `process.env.NODE_ENV === 'production'`.

### kubevue test

This command uses Karma to run the unit test script. By default, the Chrome browser is used to retrieve unit tests in `<test>` or `*.spec.js` in all Vue components in the `src` directory, and unit tests in `*.spec.js` in the `test` directory.

- You can use the `-p` option to specify the port;
- You can use `-w, --watch` to watch file changes.

### kubevue ghpages

You can publish the `public` directory directly to the `gh-pages` branch. Mainly used for component documentation release.

### kubevue dep

All dependent package versions of kubevue will be displayed for easy debugging.

### Next Step

The various options of common commands can instantly turn on and off various functions of kubevue. For more commands, see the [Command Line Tool API](/api/cli).

If you want to set up more flexible and complex functions for a long time, you need to [modify the configuration file](/guides/config).
