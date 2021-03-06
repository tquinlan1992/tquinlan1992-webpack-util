<h1 align="center">tquinlan1992-webpack-util and tquinlan1992-webpack-util-jest</h1>

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

```json
{
    "entry": "any file with extension ['.ts', '.tsx', '.js'] for index of app",
    "appOutputFilename": "Name of bundled build javascript file",
    "appOutputPath": "build path for app and publicDirOut",
    "htmlTitle": "title of html file generated",
    "publicDirSrc": "Path of static files (environment variables are recommended for this directory)",
    "publicDirOut": "directory path relative to appOutputPath",
    "tsconfig": "path of tsconfig.json file, defaults to ./tsconfig.json relative to project root"
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
    "publicDirOut": "/public",
    "urlBase": "hostname",
    "port": "optional port for hostname",
    "allowedHosts": "optional hosts allowed"
}
```

<h2 align="center">Jest (For testing)</h2>
This is a wrapper around the Jest test with typescript/jsx configurations setup, file-loader configurations

 - To run all tests ```tquinlan1992-webpack-util-jest```
    - This runs the tests for ```"(/__src__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|ts?|js?)$"```

 - All jest cli commands can be used https://facebook.github.io/jest/docs/en/cli.html

<h3 align="left">Development env for index.js</h3>

- ```#!/usr/bin/env node```
