# Install

## Command Line Tool (CLI)

### Prerequisites

Before you begin, make sure you have the latest version of [Node.js](https://nodejs.org/) installed. The best option is to use the latest Long Term Support (LTS) version of Node.js. Using older versions may cause various problems because they may be missing dependencies for Kubevue CLI.

### Global Installation

The following is how to install npm:

``` bash
npm install -g kubevue-cli
```

The following is how to install yarn:

``` bash
yarn global add kubevue-cli
```

The installation may take a long time because Kubevue CLI integrates many functions, so please be patient.

#### Test Functionality

The test function requires `mocha` and `chai` to be installed globally, otherwise it may not run:

``` bash
npm install -g mocha chai
```

### Next Step

Next, we will start by [creating a new project](/guides/quickstart) and teach you how to use the command line tools.