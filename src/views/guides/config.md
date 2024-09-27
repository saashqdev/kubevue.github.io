# Basic Configuration

Kubevue has more configuration items based on Vue CLI 3. For the configuration of Vue CLI, please refer to the [Configuration Reference](https://cli.vuejs.org/zh/config/).

### Configuration

Kubevue project configuration can be represented by a `kubevue` object in `package.json`, or by creating a `kubevue.config.js` in the directory. If both exist at the same time, the configuration file will be used first.

For example, the configuration of component library type is very simple, just add in `package.json`:

```json
{ "kubevue": {
    "version": ">=0.6.0",
    "type": "library"
} }
```

Application types generally use configuration files. Below is a simple configuration in the `app` template.

```js
module.exports = {
    version: '>=0.6.0', // The version condition of Kubevue CLI that can support this project
    type: 'app', // [Required] Project type. Currently available options: app, app-pro, library, fullstack
    staticPath: './static', //Specify the static file directory. The contents of this directory will be copied directly to the output directory
    libraryPath: './src/components', // [Required] Specifies the path of the project library. Used to retrieve global style files
};
```

### Next Step

This concludes the guide. Next, you can:

- View [All Configuration APIs](/api/config);
<!-- - Read [Concepts](/concepts) to understand the Kubevue architecture details in depth; -->
- View the Kubevue platform's [Component Library](/libraries).
