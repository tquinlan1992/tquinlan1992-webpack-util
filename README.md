<h1 align="center">tquinlan1992-webpack-util</h1>

Custom typescript wrapper around webpack

<h2 align="center">Install</h2>
Install with npm: ```npm install --save-dev tquinlan1992-webpack-util```

<h2 align="center">Usage</h2>
run with ```tquinlan1992-webpack-util```

Default config path is ```./tquinlan1992-webpack-util.config.json``` relative to package.json


<h2 align="center">Schema</h2>

```json
{
    "entry": "any file with extension ['.ts', '.tsx', '.js'] for index of app",
    "appOutputFilename": "Name of bundled build javascript file",
    "appOutputPath": "build path for app and publicDirOut",
    "htmlTitle": "title of html file generated",
    "publicDirSrc": "Path of static files (environment variables are recommended for this dirctory)"",
    ",
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

### Development env for index.js
- ```#!/usr/bin/env node```
