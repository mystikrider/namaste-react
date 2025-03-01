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

## tools prettier code formatter, bracket pair colorizer, eslint -msoft, better comments, json viewer, tailwind css intelisense

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
    utils/constants.js for mockdata/common files
    named imoort/export
    comp file shud not exceed more than 100 lines - Performance
    Ract can do fater dom manipulation

## React Hooks

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
    if No dependency array - useEff will be called on every comp render
    if theres emoty depenedy aarry - will be called only once 
    if depend array have any value/vars = will be called wheenever that value/vars changes

    useEffect(() => {

        "useEffect will be rendered after comp render for once and then clean up func after comp unmounts"

        const timer = setInterval(() => {
            "timer"
        }, 1000);

        return () => {
            clearInterval(timer)
            }

    }, [])
    

## Api call
    cors policy - not allowing swiggy api calling dfrom locakhost
    to bypass use, allow cors chrome extension - important
    get rid of cors plugin
        to bypass cors error
            corsproxy.io


## Shimmer ui or loader - better ui experice user can antcipate, 
    as api loads data show fake cards/skeleton resembling UI
    dummy page
    conditional rendering

## Javascript
    .toLowerCase
    .includes()
    Array.join(", ")
    fetch post call - important
    || operatior

## Pending Task
    as user scroll update restaurant list using fetch post

## Routing/child routes/link instead of a tag, error handling
    React are signle page app - SPA only 1 page , going to route meabs rendrign a comp only not reloading
    react-router-dom
    npm i react-router-dom
    
    import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path: "/about",
                    element: <About/>
                }
            ]
            errorElement: <ErrorPage/>
        },
        {
            path: "/about",
            element: <About/>
        }
    ])

    root.render(<RouterProvider router={appRouter}>)

    const err = useRouteError() to get more info on errors

## Routing 

    Server side - network call will be made and page will served to the ui, orfetches the page
    
    Client side - single page with diff comps, on click comps will be loaded i nthe ui

## Dynamic Routing
    /restaurants/:resId
    graphql makes api handling easym helps u with overfetching
    load only wanted data - graphql

## Pending
    toggle veg/nonveg
    show all item cards in restarant page not just recomnd

## const {resId} = useParams()
    to get params like ids from the url eg: /restaurant/:resId
    restaurnt/params or restaraunt/1234
    

## Perfomance
    Single Responsibility Principle
        breaking down code into multiple components based on purpose
        break down code into modular fashion
        code becomes more testable, maintainable
        catching bugs very easily
        reusable. maintainable testable
        setup linters like eslint,

## Custom hooks
    utilitiy funcs to abstract certain logic to make it resuable
    Learn local storage/session storage
    internet on/off

## Optimize/ Performance
    chunking or lazy loadung, code splitting, dynamic bundling
    small bundles of components instead of 1 large signle bndle file
    if u want to scale ur big apps 
    feature specific chunks or bundles
    logicallu breaking app onti smaler bndles

    import { lazy, Suspense }
    const About = lazy(() => import("./comp/About))
    element: <Suspense fallback={<h1>fallback comp or loading text</h1>}><About /></Suspense>

## CSS/SASS/SCSS - not a recommended way now
    https://styled-components.com/
    materia ui - u will get pre build css comps
    bootsrap
    chakra ui
    ant design

    TAILWIND css
        style comps without leavin html
        some initail learnin curve only
        Tailwind ui - but its paid some are free
        ships only used styles
        Theme dark mode/ is common for apps, so its easy with tailwinf
        
