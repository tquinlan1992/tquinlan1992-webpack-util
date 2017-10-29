<h1 align="center">tquinlan1992-webpack-util</h1>

[![npm](https://img.shields.io/npm/v/tquinlan1992-webpack-util.svg?style=flat-square)](https://www.npmjs.com/package/tquinlan1992-webpack-util)
[![Dependencies](https://david-dm.org/tquinlan1992/tquinlan1992-webpack-util.svg)](https://david-dm.org/tquinlan1992/tquinlan1992-webpack-util)

Custom typescript wrapper around webpack

<h2 align="center">Install</h2>

- Install with npm: ```npm install --save-dev tquinlan1992-webpack-util```

<h2 align="center">Usage</h2>

<h5 align="left">Build</h5>

- run with ```tquinlan1992-webpack-util```

<h5 align="left">Config.json path</h5>

- The config path is relative to package.json
- Default config path is ```./tquinlan1992-webpack-util.config.json```
- To run with a different config path use the flag --config to specify the path
```tquinlan1992-webpack-util --config <config path>```

<h5>Watch</h5>

- Use the flag ```--watch``` or ```-w``` for the alias
```tquinlan1992-webpack-util --watch```

<h5>Dev Server</h5>

- To run the dev server: use the flag ```--devServer``` or ```-d``` for the alias
```tquinlan1992-webpack-util -devServer```
    - The watch flag is ignored when using the ```--devServer``` flag

<h2 align="center">tquinlan1992-webpack-util.config.json Schema</h2>

- ```tsconfig.json``` path is hardcoded to be the root of the project

```json
{
    "entry": "any file with extension ['.ts', '.tsx', '.js'] for index of app",
    "appOutputFilename": "Name of bundled build javascript file",
    "appOutputPath": "build path for app and publicDirOut",
    "htmlTitle": "title of html file generated",
    "publicDirSrc": "Path of static files (environment variables are recommended for this directory)",
    "publicDirOut": "directory path relative to appOutputPath of publicDir build"
}
```

<h2 align="center">Sample tquinlan1992-webpack-util.config.json</h2>

```json
{
    "entry": "/src/app.tsx",
    "appOutputFilename": "app.js",
    "appOutputPath": "/build",
    "htmlTitle": "Webpack",
    "publicDirSrc": "/src/public/**/*",
    "publicDirOut": "/public"
}
```

<h3 align="left">Development env for index.js</h3>

- ```#!/usr/bin/env node```
