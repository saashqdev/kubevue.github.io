# Getting Started

## Command Line Tool (CLI)

### 1. Create a new project

Run the following command to create a new application:

``` bash
kubevue init web-app my-app
```

`web-app` is the project type. We want to create a single-page PC-side web application. `my-app` is the project name. You can also change it to another name.

<!-- If you want to create a multi-page, multi-module, enterprise-level large application, please use the `app-pro` type. -->

### 2. Install dependency packages

Next, install the required dependency packages in the project:

``` bash
cd my-app
npm install
```

> For mainland users, it is recommended to set the npm registry source to a domestic mirror, which can greatly increase the installation speed.

### 3. Start the development server

``` bash
npm run dev
```

The `dev` configuration of scripts in the package.json file is `vue-cli-service serve`. This command starts the development server, automatically opens the browser, uses Webpack to monitor file changes, and rebuilds the application when these files are modified.

- You can use the `--port` option to specify the port;
- You can use the `--open` option to automatically open the browser.

For more commands and parameters, please refer to the [Vue CLI 3 official documentation](https://cli.vuejs.org).

If the operation is successful, a Hello World page like the following will be opened in the browser:

### 4. Edit the first page

Open the src/views/main.vue file and change Welcome to Kubevue App to Welcome to My First Kubevue App in <template> .

After saving, the browser will automatically update.

Try changing the style again. In the <style module> , increase the font-size of .heading .

Open the `src/components/base/global.css` file again and change the color of `$brand-primary`, such as `#1976d2`.

After saving, does the theme color of various components on the page change instantly?

### Next Step

Seeing so many files, you must be wondering what they are for? The next section will introduce the [directory structure](/guides/structure) of the Kubevue project in detail.