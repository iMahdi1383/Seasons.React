<style>
    html body{background-color: #19181a!important}html body h1,html body h2,html body h3,html body h4,html body h5{font-weight:inherit;font-family:"open sans"}pre{background-color:#221f22!important}html body .highlight pre, html body pre{border-radius: 6px !important;border: solid 1px rgb(255 255 255 / 0.1);padding: 1em 1.5em !important}code[class*=language-] .token.atrule,code[class*=language-] .token.attr-value,code[class*=language-] .token.keyword,pre[class*=language-] .token.atrule,pre[class*=language-] .token.attr-value,pre[class*=language-] .token.keyword{color:#ab9df2}code[class*="language-"] .token.tag, pre[class*="language-"] .token.tag{color: #ff6188}code[class*="language-"] .token.attr-name, pre[class*="language-"] .token.attr-name{color: #fc9867}code[class*=language-] .token.function,pre[class*=language-] .token.function{color:#a9dc76}code[class*=language-] .token.boolean,code[class*=language-] .token.function-name,code[class*=language-] .token.number,pre[class*=language-] .token.boolean,pre[class*=language-] .token.function-name,pre[class*=language-] .token.number{color:#fc9867}html body p, html body blockquote, html body ul, html body ol, html body dl, html body pre{margin-top: 16px}html body .highlight pre, html body pre{font-size: 1em !important;}
</style>

# Modern React & Redux

(End of 5-6)

---

### Use React

<details>
<summary>
<h5 style="display:inline">
1-11 : 'src/index.js' : Add a Functional Component
</h5>
</summary>

```jsx
// Import the React and ReactDOM libraries.
import React from "react";
import ReactDOM from "react-dom";

// Create a react component.
const App = () => {
    return <div> Hi there! </div>; // Functional Component
};

// Take the react component and show it on the screen.
ReactDOM.render(<App />, document.querySelector("#root"));
```

&nbsp;

</details>

---

### JSX

<details>
<summary>
<h5 style="display:inline">2-2 : Convert Html into JSX</h5>
</summary>

-   class :

    ```jsx
    <p class="a"> Html </p>
    <p className="a"> JSX </p>
    ```

-   inline style :
    ```jsx
    <p style="color: red; text-align: center;"> Html </p>
    <p style={{ color: 'red', text-align: 'center' }}> JSX </p>
    ```
-   label for :

    ```jsx
    <label for="name"> Html </label> <label htmlFor="name"> JSX </label>
    ```

&nbsp;

</details>

<details>
<summary>
<h5 style="display:inline"> 2-6 : Use JS Variables in JSX</h5>
</summary>

-   Example :

    ```jsx
    let text1 = "blue"; //              Define a Variable

    const App = () => {
        let text2 = "blue";
        return (
            <div>
                {text1} is {text2}       <!-- // sky is blue -->
            </div>
        );
    };
    ```

-   All Variables :

    ```jsx
    let text = "sth"; //                    {text}  returns   sth
    let num = 5; //                         {num}   returns   5
    let arr = ["Hi", "There"]; //           {arr}   returns   HiThere
    let arr2 = [2, 3]; //                   {arr2}  returns   23
    ```

    ```jsx
    let styles = { color: "red", float: "right" };
    <p style={styles}> red </p>;
    ```

    !!! ERROR Objects are not valid as a React child

        ```jsx
        const buttonText = { text: "Click Me" }; // Define an Object

        const App = () => {
            return <div> {buttonText} </div>; // ERROR : Objects are not valid as a React child
            return <div> {buttonText.text} </div>; // Solved  :)
        ```

-   Functions

    ```jsx
    let getButtonText = () => {
        return "Click On Me"; //                    Function (Returns a string)
    };

    const App = () => {
        return (
            <button class="btn">
                Please {getButtonText()}        <!-- Please Click On Me -->
            </button>
        );
    };
    ```

&nbsp;

</details>

---

### Components

<details>
<summary>
<h5 style="display:inline">
 3-11 : External Component
 </h5>
</summary>

1.  Create 'src/CommentDetail.js' :

    ```jsx
    import React from "react";

    const CommentDetail = () => {
        return <div> its a Reusable Component </div>;
    };

    export default CommentDetail; // Export (to use in another component)
    ```

2.  Edit 'src/index.js' :

    ```jsx
    import CommentDetail from "./CommentDetail"; // Import from 'src/CommentDetail.js'

    const App = () => {
        return (
            <div>
                <CommentDetail /> // use CommentDetail
            </div>
        );
    };
    ```

&nbsp;

</details>

<details>
<summary>
<h5 style="display:inline">
 3-12 : Props
 </h5>
</summary>

1.  Edit 'src/CommentDetail.js' :

    ```jsx
    /* use props */
    const CommentDetail = (props) => {
        return (
            <div>
                {props.name} is {props.age} years old.
            </div>
        );
    };

    export default CommentDetail; // Export
    ```

2.  Edit 'src/index.js' :

    ```jsx
    import CommentDetail from "./CommentDetail"; // Import

    const App = () => {
        return (
            <div>
                <CommentDetail name="Jack" age="17" /> // use props
            </div>
        );
    };
    ```

</details>

<details>
<summary>
<h5 style="display:inline">
 3-14 : Props in JSX attributes
 </h5>
</summary>

```jsx
<div>
    <p> {props.name} </p> // normal
    <img src={props.image} /> // DO NOT USE ""
</div>
```

</details>

<details>
<summary>
<h5 style="display:inline">
 3-16 : Use a Component in another Component (as Children)
 </h5>
</summary>

1.  Edit 'src/index.js' :

    ```html
    <!-- {props.children} is a Text -->
    <ApprovalCard> Are you sure you want to do this? </ApprovalCard>

    <!-- {props.children} is a Component -->
    <ApprovalCard>
        <CommentDetail author="Sam" />
    </ApprovalCard>
    ```

2.  Edit 'src/ApprovalCard.js' :
    ```jsx
    const ApprovalCard = (props) => {
        return (
            <div>
                <div>
                    {props.children}
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        );
    };
    ```

</details>

---

### Class Components

<details>
<summary>
<h5 style="display:inline">4-4 : Get User Location</h5>
</summary>

-   Vanilla JavaScript (get from Browser Location settings) :

    ```javascript
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    ```

&nbsp;

</details>

<details>
<summary>
<h5 style="display:inline">4-7 : Create a Class Component</h5>
</summary>

-   Class VS Functional Component :

    ```jsx
    // Class Component
    class App extends React.Component {
        render() {
            let a = 2 * 3; // vanilla js
            return <div> age : {a} </div>; // jsx
        }
    }

    // Functional Component
    const App = () => {
        let a = 2 * 3; // vanilla js
        return <div> age : {a} </div>; // jsx
    };
    ```

&nbsp;

</details>

<details>
<summary>
<h5 style="display:inline">4-7 : 'render()' & 'constructor()' methods</h5>
</summary>

```jsx
class Car extends React.Component {
    constructor(props) {
        super(props);
        let bodyColor = { doors: "black", roof: "red" };
    }

    render() {
        return <div> Doors Color : {this.bodyColor.doors} </div>;
    }
}
```

&nbsp;

</details>

<details>
<summary>
<h5 style="display:inline">5-1 : States</h5>
</summary>

-   (Define, Update & Render, Show) a State :

    ```jsx
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { lat: null }; //? define a state
            this.setState({ lat: 30 }); //? Update state value, then Render Component again
        }
        render() {
            return <div> Latitude: {this.state.lat}</div>; //? show state
        }
    }
    ```

    !!! WARNING DO NOT use this :

        ```jsx
        this.state.lat = position.coords.latitude; //! WARNING : it doesnt reRender Component again! we must use 'this.setState()'
        this.setState({ lat: position.coords.latitude }); // Solved :)
        ```

-   Example

    ```jsx
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { lat: null }; //? define a state
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({ lat: position.coords.latitude }); //? update state value, then render component again
                },
                (err) => console.log(err)
            );
        }
        render() {
            return <div> Latitude: {this.state.lat}</div>; //? show defined state
        }
    }
    ```

&nbsp;

</details>

<details>
<summary>
<h5 style="display:inline">5-6 : Multiple states</h5>
</summary>

```jsx
//#1 define state
this.state = { lat: null, errorMessage: "" };
//#2 update state
this.setState({ lat: 5 });
this.setState({ errorMessage: 'something' });
//#3 show state */
render() {
    return (
        <div>
            Latitude: {this.state.lat}
            Error: {this.state.errorMessage}
        </div>
    );
}
```

&nbsp;

</details>
