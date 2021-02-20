# Sixty Six

[![Version][version-image]][github-url][![Downloads][downloads-image]][npm-url][![JavaScript][javascript-image]][github-url][![License][license-image]][license-url]

- [**Homepage**](https://www.apteryx.xyz/npm/sixty-six)

## Table Of Contents

- [**About**](#about)
- [**Installation**](#installation)
- [**Usage**](#usage)

## About

Sixty Six is a node module made to make it easier to find/know the root directory of your node app.<br>
The name is a kind of play on words of Route 66.

The module will find the root of the app and set it to the 'process.env' variable as 'SIXTY_SIX_ROOT', so once required from any file, you'll be able to access the value from anywhere. When requiring the file it will also return an object containing more information, explained below.

## Installation

```npm install sixty-six```

## Test

```cd ./node_modules/sixty-six && npm test```

## Usage

```js
const sixty = require('sixty-six');

process.env.SIXTY_SIX_ROOT;
// /home/Apteryx/node/project

sixty.root;
// /home/Apteryx/node/project

// /home/Apteryx/node/> node project/index.js
sixty.cwd;
// /home/Apteryx/node

sixty.sep;
// /

sixty.package;
// { name: 'project', version: '1.0.0' ... }

sixty.file.path
// /home/Apteryx/node/project

sixty.file.name
// index.js

sixty.file.extension
// js

sixty.file.exports
// { }

sixty.file.path + sixty.sep + sixty.file.name;
// /home/Apteryx/node/project/index.js
```

## API

### root
Root directory of the current node app, AKA the path to the folder with the 'package.json' file and 'node_modules' folder.

### cwd
Current working directory, AKA the folder in which you ran 'node *.js'.

### sep
Your OS's path seperator.

### package
The contents of the apps package.json file. If an error occured while trying to require it, it will be an object containing the property 'error' (sixty.package.error).

### file
Information about the file that required this module.

- ### path
    Path to the current file, including the file name itself.

- ### name
    Name of the current file.

- ### extension
    The current files extension.

- ### exports
    The module exports of the current file.


[version-image]: https://img.shields.io/github/package-json/v/apteryxxyz/sixty-six?logo=github
[downloads-image]: https://img.shields.io/npm/dt/sixty-six?logo=npm
[javascript-image]: https://img.shields.io/github/languages/top/apteryxxyz/sixty-six?logo=github
[license-image]: https://img.shields.io/npm/l/sixty-six?logo=github

[npm-url]: https://npmjs.com/package/sixty-six
[license-url]: https://github.com/apteryxxyz/sixty-six/blob/master/LICENSE
[github-url]: https://github.com/apteryxxyz/sixty-six/