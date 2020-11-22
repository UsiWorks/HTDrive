# HTDrive

## Getting started...
Download the most recent release and import it into your editor.

## Files
Certain files to certain things... make sure to read this!

### app.js
The app is the place for your Drive Elements.
Drive elements are like this:
```js
Drive.custom({
  elements: {
    prefix: 'YOUR PREFIX HERE',
    color: 'OPTIONAL',
    data: 'Hello world!',
  }
});
```

### main.js
This is the main JavaScript file, **DO NOT USE DRIVE ELEMENTS**

### index.html
The console file.

# htdrive.js
HTDrive (hypertext drive) is a powerful console tool used for logging, debugging and more.

### Configuration
Placed inside app.js (This is there automatically).
```js
import { Drive } from './htdrive';

Drive.config({
  baseURL: null,
  extension: true,
  main: './main',
  packages: {
    defaultExtension: '.js',
    js: {
      
    },
    css: {
      
    },
  }
}); 

// Drive elements here...
```

## Drive elements
These elements are to be put in app.js

### Say [Drive.say]
```js
Drive.say({
  data: "/* What you want to say */",
});
```

### Custom [Drive.custom]
```js
Drive.custom({
  elements: {
    prefix: "A-PREFIX",
    color: "HEX", /* optional */
    data: "YOUR TEXT HERE",
  }
});
