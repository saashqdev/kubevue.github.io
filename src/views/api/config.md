# Configuration

## Command Line Tool (CLI)

### Configuration File

Create `kubevue.config.js` in the project directory with the following options:

``` javascript
{
    type: '', // Kubevue project type. Required. Optional options: 'library', 'app'.
    staticPath: '', // Static resource directory
    assetsPath: '', // @Deprecated, same as `staticPath`
    libraryPath: '', // Library entry file. When the project type is `library`, the default is `./index.js`.
    baseCSSPath: './src/base/index.css', // Basic CSS typesetting
    globalCSSPath: './global.css', // Global CSS file path
    clean: true, // Clear the output directory before `dev` or `build` operations.
    docs: false, // Generate documentation for basic components in the library. When `project-type` is `library`, this function is enabled by default.
    open: true, // In `dev` mode, whether to open the browser when starting the service.
    hot: true, // In `dev` mode, whether to turn on hot update when starting the service.
    sourceMap: false, // In `build` mode, whether to enable source map.
    extractCSS: false, // In `build` mode, whether to use ExtractTextPlugin to process CSS files.
    uglifyJS: false, // In `build` mode, whether to use UglifyJSPlugin to process JS files.
    experimental: false, // Enable trial loader or plugin. For example: ModuleConcatenationPlugin.
    resolvePriority: 'cwd', // Priority to resolve modules or loaders, "cwd"(default) or "cli"
    webpack: {}, // Extend webpack configuration
    webpackDevServer: {}, // Extend webpackDevServer configuration
    postcss: [], // Extend postcss plugins configuration
    vue: {}, // Extend vue-loader configuration
    karma: {}, // Extend karma configuration
}
```
