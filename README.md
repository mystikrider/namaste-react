## Git
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

## package json
    "start": "parcel index.html",
    "build": "parcel build index.html"

    JSX is not HTML inside JS anad jsx is a different syntax by itself
    its an HTML like syntax, it looks like xml, even more close to xml
    babel js transpile/compile jsx to react code so that browser can understand
    babes does transpiles convert new js code to the way oldr browser understands

## prettier code formatter, bracket pair colorizer, eslint -msoft, better comments, json viewer

## Class comps & Func Comps
    this is diff in func and arrow comp

## (XSS) attacks or Cross site scripting - JSX sanitize data inside {} to prevetn attack from malicious apis/data/scripts

## Keep the code modular, follow DRY priciple

## Props - pass dynamic data to comps
    props to comp = args to functions = is an object
    const { var1, var2} = props - destructrung

## Config Driven UI in swiggy API - System Design Interview - latest practice
    - controlling/displaying ui based on data/config/ - eg: diff offer carousel for diff cities
    ui layer/data layer

## array.join(", ") = for comma separetd
    big sites do keep images in CDN
    data?.var - optional chaining
    map filer and reduce is importan
    list items shud be uniquely represented using key
    Performance hit - react has to render all the cards if list items are not uniquley identified with keys, infinite scroll, lots of list items impact very high
    never use index as key recommended by react

## Why react
    superfast, optimized apps

## React Hooks
    utils/constants.js for mockdata/common files
    named imoort/export
    comp file shud not exceed more than 100 lines - Performance
    Ract can do fater dom manipulation

## useState() - super powerful react variable

    const [list, setList] = useState([]);
    when a settr fun changes a state var in nw render its whole new const var

    hook is ust a normal js utility func
    wenever a state var changes react re render the comp
    react keeps the ui layer in sync wiyh data layer
    reqct is super quick in dom maniplation

## react fibre architecture, diff algorithm, reconsciliation, virtual dom
    react fibre or reconciliation algo
    git diff
    virtual dom is onject reprresentatio of actual dom that is div tags, html nodes
    this is react is Best at, why react is fast becasue it has viryual dom, effiencen dom manipulaion

## Monolith vs Microservices Architec
    Monolith
        all in one place, repo - api, db, ui, authentication, sms services etc.
        all wrkng on same repo
        even 4 a small change full build is needed
    Microservic

        sepatation of concern 
        every sefcie theri own deploument cycle
        decision - wht use case ? which land suitable, what techsatk
        diff ports will runig for diff services
        all pirts can be mappedd to domian name finaly
        :1234 - ui running on diff ports
        :234 - api
        / - ui
        /api - api

## Render UI - better Ui
    page laods > render ui > api > render ui again

## useEffect()

    useEffect(() => {
        console.log("useEffect called")
    }, [])

    will be called after comp is rendered

## Api call
    cors policy - not allowing swiggy api calling dfrom locakhost
    to bypass use, allow cors chrome extension - important

## Shimmer ui or loader - better ui experice user can antcipate, 
    as api loads data show fake cards/skeleton resembling UI
    dummy page
    conditional rendering

## Javascript
    .toLowerCase
    .includes()
    Array.join(", ")
 