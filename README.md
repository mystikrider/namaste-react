## git

git init
git branch -M main
git add .
git commit -m "message"
git remote add origin https://github.com/mystikrider/namaste-react.git

## TODO # setup github ssh in local system

## npm is NOT node package manager
    add NPM to ur project - npm init

## Bundlers minify/code splitting/ image opimizing/chunking/ and bundling the code/files b4 shipping into production
    parcel, webpack, vite

## Parcel
    npm install -D parcel - dev dependency not for prod
    alwasys safe to have caret ^(minor) not tilde ~ major ver upgrade 
    package.lock json integrity sha15# - working on dev brokern on production isue to prevent that keep tarck of exact verisuon
    pakage and lock shud be in git to keep

## Ignite app
    npx parcel index.html - source file createion- created local server and running
    npm install react
    npm install react-dom
    import reatc, dom in app.js

## What Parcel do
    Dev build
    local server
    differential bundling for older browsers
    tree shaking - removing unused code
    code splittin
    minifying
    compressing files
    image optimization 
    https 
    cacheing for faster builds
    HMR - file watching algorithm
    different dev and prod bundles
    bundling
    diagnosis
    error handling in a graceful way

## Dev build files in dist folder, c
## Production build files also in DIST folder
## git ignore is a must
    remove "main": "App.js", from package - source build file
    npx parcel build index.html

## Browserlist package to make code compatible wih older browsers
    "browserslist": [
        "last 2 version"
        query composition for country based brw sprt
    ]
## This is enough for the setup, same as we do with create-react-app