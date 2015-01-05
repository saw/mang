# An example architecture for an angular app

This is a way of laying out an app that makes sense to me. 

Not missing: browserify for everything, a magic template loader, a terrible data store.

## How it works

This app is built around [browserify](http://browserify.org), so modules are written using CommonJS syntax. The app is built using gulp, which transforms the files into one giant rollup with all dependencies. In addition, the templates are inlined using partialify.

`templateUrl` is still supported, via `lib/templateLoader.js`.

## Important concepts:
   - Data comes from servies (`addressModelService.js`)
   - DOM interaction is via directives
   - Non-shared components still use directives for DOM/template loading
   - Controllers are thin and bind data to views


## Running

```
git clone https://github.com/saw/mang.git
npm install
gulp build
npm start
```
