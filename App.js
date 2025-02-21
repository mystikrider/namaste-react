const parent = React.createElement(
    "div",
    { className: "parent"},
    [
        React.createElement("div", { className: "child1"}, [
            React.createElement("h1", { className: "head1"}, "Im an h1 tag"),
            React.createElement("h1", { className: "head1"}, "Im an h1 tag")
        ]),
        React.createElement("div", { className: "child2"}, [
            React.createElement("h1", { className: "head2"}, "Im an h1 tag"),
            React.createElement("h1", { className: "head2"}, "Im an h1 tag")
        ])
    ]
   
);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent)

root.render(parent)