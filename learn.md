# Modern React & Redux

(End of 3-15)

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

-   Functions

    ```jsx
    let getButtonText = () => {
        return "Click On Me"; //                    Function (Returns a string)
    };

    const App = () => {
        return (
            <button class="btn">
                Please {getButtonText()}        <!-- // Please Click On Me -->
            </button>
        );
    };
    ```

&nbsp;

</details>

<details>
<summary>
<h5 style="display:inline"> 2-7 : ERROR : Objects are not valid as a React child</h5>
</summary>

```jsx
const buttonText = { text: "Click Me" }; //         Define an Object

const App = () => {
    return <div> {buttonText} </div>;           <!-- // ERROR : Objects are not valid as a React child -->
    return <div> {buttonText.text} </div>;      <!-- // Solved  :) -->
```

## </details>

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
    // {props.children} = Text
    <ApprovalCard> Are you sure you want to do this? </ApprovalCard>

    // {props.children} = Component
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
