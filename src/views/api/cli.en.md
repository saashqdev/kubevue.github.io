# Command Line Tools (CLI)


- `kubevue help`: Show help of all commands
- `kubevue -V, --version`: Show the version of current CLI

- `kubevue init <project-type> <project-name>`: Initalize a kubevue project
- `kubevue dev`: Run develop server
    - `-c, --config-path <path>`: Kubevue config path
    - `-e, --entry-path <path>`: Change default entry path
    - `-C, --no-clean`: Disable to clean and copy
    - `-l, --library-path <path>`: Library entry path. To be `./index.js` by default if project type is `library`
    - `-d, --docs`: Generate docs of common components in library. Always be true if project type is `library`
    - `-p, --port <port>`: Web Server Port
    - `-O, --no-open`: Disable to open browser at the beginning
    - `-H, --no-hot`: Disable to hot reload
    - `--resolve-priority`: Priority to resolve modules or loaders, "cwd"(default) or "cli"
- `kubevue build`: Build a distribution
    - `-c, --config-path <path>`: Kubevue config path
    - `-e, --entry-path <path>`: Change default entry path
    - `-C, --no-clean`: Disable to clean and copy
    - `-l, --library-path <path>`: Library entry path. To be `./index.js` by default if project type is `library`
    - `-d, --docs`: Generate docs of common components in library. Always be true if project type is `library`
    - `-s, --source-map`: Generate source map in build mode
    - `--extract-css`: Extract CSS by ExtractTextPlugin in build mode
    - `--uglify-js`: Compress and mangle JS by UglifyJSPlugin in build mode
    - `--minify-js`: Minify JS only in `build` mode. Set `true` or `'babel-minify'` to use BabelMinifyPlugin, set `'uglify-js'` to use UglifyJSPlugin as same as `--uglify`
    - `--experimental`: Enable some experimental loaders or plugins
    - `--resolve-priority`: Priority to resolve modules or loaders, "cwd"(default) or "cli"
- `kubevue test`: Run karma test
    - `-c, --config-path <path>`: Kubevue config path
    - `-p, --port <port>`: Web Server Port
    - `-w, --watch`: Karma watch
    - `--resolve-priority`: Priority to resolve modules or loaders, "cwd"(default) or "cli"
- `kubevue publish <version>`: Publish a new version
- `kubevue ghpages`: Push output directory to gh-pages
    - `-c, --config-path <path>`: Kubevue config path
    - `-p, --path <path>`: Path to publish. Default is webpack output path
- `kubevue dep`: List dependencies of kubevue-cli

- `kubevue transform <vue-path>`: Transform Vue component between singlefile and multifile pattern
