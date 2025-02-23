import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = React.createElement("h1", {className: "heading"}, "Namaste Sethu!");
//render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//jsx
// const newHeading = <h1>This is jsx heading</h1>

// const HeadingComponent = () => <h1>This is heading component</h1>
// const HeadingComponent3 = () => {
//     return <h1>This is also Heading Component3</h1>
// }

const Title = () => (
    <h1>Component Title</h1>
)
const HeadingComponent = () => (
    <div>
        {/* both are same */}
        {Title()}
        <Title />
        <h2>Heading Content</h2>
    </div>
)

//func component called inside a react element
const title = (
    <div className="title">
        {100 + 20}
        {<HeadingComponent />}
    </div>
)


root.render(title )