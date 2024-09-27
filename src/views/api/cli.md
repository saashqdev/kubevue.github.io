# Command Line Tool (CLI)

### kubevue help

Display all kubevue commands

### kubevue -V, --version

Installed version

### kubevue init \<template-name\> \<project-name\>

Create kubevue project. `template-name` can choose from these types: `simple`, `web-app`, `library`, `admin-cloud-fs`. `project-name` is the name of the new project.

### kubevue publish \<version\>

release version

### kubevue ghpages

Post to gh-pages

#### -p, --path \<path\>
Set service port

#### -c, --config-path \<path\>
Publish folder. Defaults to webpack's output path.

### kubevue dep

Display all dependencies of kubevue-cli

### kubevue transform \<vue-path\>
Switch Vue component mode: single file or multi-file mode.
