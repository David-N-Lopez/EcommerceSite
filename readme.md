# Gorilla UI Kit

## Pre Conditions

In Order to instantiate the Gorilla UI Kit, we need to make sure our local machine has Node.js and Grunt.js as dependencies.
If you don't have those, you can use a command line in linux/Mac OS to install them, or download Node from their website and its package manager (npm).

Before you try to install node, please verify whether you have it installed yet by executing the following test command:

```sh
$ node -v
```

The version should be higher than v0.10.32.

__For Windows Users__ Please follow the instructions described [here](http://blog.teamtreehouse.com/install-node-js-npm-windows).

__For MacOS Users__ Please follow the instructions described [here](http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/)

__For Linux Users__ Please execute the following command on your terminal window:

```sh
$ sudo apt-get install nodejs npm
```
Once you have node and npm installed, you need to make sure you have grunt as well, please execute the command to install it in your local machine

```sh
$ sudo npm install grunt-cli -g
```

## Installation

First of all we need to use the npm to download all dependencies specified in `package.json`.  To do that please execute the command on the root directory.

### Gorilla FED Guis

In order to get your dependencies in sync, provisionally you need to modify `package.json` file on line 26 with your stash username to:

```json
    "gorilla-fed-guis": "git+https://aromero@stash.gorillagroup.com/scm/ft/gorilla-fed-guis.git",
```

```sh
$ npm install
```

## Run the Node Server

The Gorilla UI Kit is built on the top of the assemble architecture.  Assemble provides with a grunt shortcut to initiate our node server on port 8094.  Please view `Gruntfile.js` on line 23 if you wish to change that port.
The grunt task to run the server is `server`, so you only need to execute the command:

```sh
$ grunt server
```
And voilà...

## Git

Please do not include the /build and the /node_modules folders to the GIT repository, those are already included in the `.gitignore` file to avoid flooding the repository with generated code.

## Folder structure

todo

## site.json

We use `site.json` file as a sitemap to enlist all links available for the UI Kit website grouped in 4 different kind of links:

- `top-links`. Currently used at the top of the navigation in all pages.  Javascript (Gorilla JS Plugins), Utilities (utilities.js) and Prototypes.
- `documentation-links`. Used in the homepage to describe each section of the UI/UX boilerplate.
- `gorilla-js-links`. All the links to the Gorilla JS Plugins documentation pages.
- `3rd-party-js-links`. All the links to the current prototypes examples we show as references.
