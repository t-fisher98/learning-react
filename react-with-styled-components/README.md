# Creating a React app with create-react-app

In the terminal, run the following command:

> ### `npx create-react-app {folder name}`

Ensure you are working within the root folder, and not a descendant folder.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

> ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

> ### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Cleaning out the framework folder

It is suggested to delete the default CSS files and all of the testing files as well.

## How does React work?

React works by only delivering a single HTML page to the client, and in the HTML markup, there is a single div element with an ID of "root".

```jsx
<div id="root">
<div>
```

React takes your JavaScript and injects it into the `<div>`

`index.js` is the file that is linked to the HTML document.

## JSX Templating

JSX looks a lot like HTML markup, however it isn't. Under the hood, JSX is converted to HTML.

If you want to put a `class` on an element in JSX, unlike HTML markup syntax, you use the `className` attribute.

### **IMPORTANT**

In JSX, you **cannot** have two sibling elements.

```jsx
function App() {
  return (
    <div>

    </div>

    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}

```

**If you are going to have sibling elements, they must be wrapped in some type of wrapper.**

**Notice `<div>` wrapping the sibling elements: `<header>` and `<main>`**

```jsx
function App() {
  return (
    <div>
      <header className="page-header">
        <h1>Crakit React Starter Kit</h1>
      </header>

      <main>

      </main>
    </div>
  );
}
```

Is a `<div>` the only element that can be used as a wrapper? No. You can use what is called a React fragment.

```jsx
function App() {
  return (
    <>
      <header className="page-header">
        <h1>Crakit React Starter Kit</h1>
      </header>

      <main>

      </main>
    </>
  );
}
```

**Notice the `<></>` wrapping the `<header>` and `<main>` elements.**

This still gives you the protection of having a parent element wrapping the siblings, but it does not render as extra markup in the DOM.


# Components

Create a `components` folder inside the `src` folder.


## Naming Conventions
---

### Folder Naming Conventions

- All lowercase

### Component File Naming Conventions

- First letter is uppercase
- The component name should match component file name
---

## Props

A component can have as many props (properties) as you want.

In our example, we have a button. We want our button to have a custom label determined by the dev.

```jsx
Button.js

function Button(props) {
  return <button>{props.label}</button>;
}

App.js

function App() {
  return (
    <Button label="This is an example of props"/>
  );
}
```

In the example above, you can see that in our `App.js`, we are accessing the Button component and passing it a `label` prop. Then in `Button.js`, we are passing the `props` object.

We are then accessing the `label` prop of our `Button` and injecting it into our `Button` element.

The code below is a `console.log()` of the `props` object being passed to our `Button` component.

```js
> {label: 'This is an example of props'}
    label: "This is an example of props"
    >[[Prototype]]: Object
```

When passing properties, you can think of the component as a `Template Literal`. Everything you type will be passed as a string. If you want to pass a numeric value, then you can break out of `JSX` by using `{}`, and then enter you value.

```jsx
<Button label="This is an example of props" age={12}/>
```

If we `console.log(props)` we will see:

```js
{label: 'This is an example of props', age: 12}
```

Instead of 

```js
{label: 'This is an example of props', age: '12'}
```

**Notice the difference between `12` and `'12'` in the two `console.log(props)`**

The same concept can be applied to all of JavaScript's native data types, variables, functions, or objects.

Since the properties are passed as an Object, you can use **Object Destructuring** to store the values of the properties in variables.

```jsx
function Button({label, age}) {
  return <button>{label}</button>;
}
```

If you still want to bring the rest of the properties into the function, you can use the **spread operator**

```jsx
function Button({label, age, ...props}) {
  return <button>{label}</button>;
}
```

```js
Console

This is an example of props
12
>{}
```

Notice that when we `console.log(props)`, we are returned an empty object. This is because both `label` and `age` have already been pulled out of `props`. 

If we add another property to our Button component in `App.js`, we will then see the last property in our `console.log(props)`

```jsx
App.js

<Button label="This is an example of props" age={12} name="Tyler"/>

Console

This is an example of props
12
>{name: 'Tyler'}
```

Notice that `'Tyler'` is now a property of the Button, but it is still in the `props` object becuase we have not destructured `props` any further.

---

## Styled Components

### Pre-Flight Checklist
- Install styled components library

> `npm install styled-components`

- Install Styled-Components VSCode Extension

## Setting up Global Styles
- Create a directory inside `src` for your global styles: `styles/GlobalStyles.js`
- Create Global Styles and attach to index.js

```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
`;

export {GlobalStyles}
```

- Import `GlobalStyles` into `index.js`

```js
import {GlobalStyles} from './styles/GlobalStyles'
```

- Add the `<GlobalStyles/>` component to the `<React.StrictMode>` component inside `index.js`

```js
<React.StrictMode>
  <GlobalStyles/>
  <App />
</React.StrictMode>
```

### **IMPORTANT**

**Ensure that the `<GlobalStyles/>` component is rendered before the `<App/>` component**

## Creating a Styled Component

- Create a component folder
- Create an `index.js` inside the component folder. (We do it this way so that our import statements are clean) Ex: `import {Button} from './ui/buttons'`

**Notice there is no need to specify the `index.js` file in our import statement because it is the default**

- Import styled components library into `index.js` using `imsc` snippet
```js
imsc > import styled from 'styled-components';
```
- Create a styled component using `sc` snippet
```js
const  = styled.`
  
`;
```
  - Using the tab stops, you can insert your component name, JSX element, styles, and export statement.

```js
const Button = styled.button`
  background-color: blue;
`;

export {Button}
```

## Styling Components

Styled components has Sass built in so you can use nested selectors to style the children elements of your components.
```js
const Button = styled.button`
  background-color: blue;
  h1{
    color: white;
    font-size: 4rem;
  }
`;
```

When using `styled components`, your component `props` are automatically passed to the component file. This means that you can use `styled component properties` to set user-defined CSS styles.

```js
  index.js

  background-color: ${props => props.bgcolor || 'transparent'};

  App.js

  <Button bgcolor="crimson" color="white">
    UI Button
  </Button>
```

In our example above, we are setting the `background-color` to the `bgcolor` property that is being set in `App.js`, OR we are defaulting the `background-color` to `transparent`

```js
bgcolor="crimson"
```