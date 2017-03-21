# Gorilla Interview Excercise

## Pre Conditions

In Order to instantiate the Gorilla Interview Excercise, we need to make sure our local machine has Node.js and Grunt.js as dependencies.
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

First of all we need to use the npm to download all dependencies specified in `package.json`.  To do that please execute the command on the project root directory.
```sh
$ sudo npm install
```

## Run the Node Server

The Gorilla Interview Excercise is built on the top of the assemble architecture.  Assemble provides with a grunt shortcut to initiate our node server on port 8094.  Please view `Gruntfile.js` on line 23 if you wish to change that port.
The grunt task to run the server is `server`, so you only need to execute the command:

```sh
$ grunt server
```
And voilà...

## Git

Please do not include the /build and the /node_modules folders to the GIT repository, those are already included in the `.gitignore` file to avoid flooding the repository with generated code.

## Folder structure

```
|--- src /
     |--- assets /
          |--- images /
          |--- less /
               |--- vendors /
                    |--- normalize.less
               |--- styles.less
     |--- data /
          |--- page.json
     |--- js /
          |--- vendor /
               |--- jquery-1.9.min.js
          |--- main.js     
     |--- templates /
          |--- helpers /
               |--- helpers.js
          |--- layouts /
               |--- 1column-full.hbs
               |--- 1column.hbs
               |--- 2column-left.hbs
               |--- 2column-right.hbs
               |--- 3columns.hbs
          |--- pages /
               |--- index.hbs
          |--- partials /
               |--- footer.hbs
               |--- head.hbs
               |--- header.hbs
               |--- left.hbs
               |--- right.hbs
               |--- scripts.hbs
     |--- .gitignore
     |--- Gruntfile.js
     |--- package.json
     |--- plp.psd
     |--- readme.md
```