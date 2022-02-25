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

## Modular SCSS

- Turn off VSCode extensions for SASS.
  - DartJS Sass
  - Live Sass Compiler
- CRA/Webpack Bundler has SASS built in. To get it working, you must install the SASS module

> ### `npm i sass`

This is using [Node SASS](https://sass-lang.com/)

- Set up Gloabl Styles
  - Inside **src**, create a folder called **styles**.
  - Inside **styles**, create a file called **GlobalStyles.scss**
  
**NOTE** - We named the file using **Pascal Case**. This is because when working with React components, the naming convention is to use Pascal Case for your components.

## Review

- Components Folder
  - Component File (IconButton.js)
    - Closed component style `<Button/>` - Will not accept child JSX/Components
    - Open component style `<Button>Text</Button>` - Will accept child JSX/Components

## Button Component with SASS

Button components could be placed within a directory called **ui** inside your **src** folder, which acts as a personal UI library of components to reuse in other projects.

Similarly, you can create a directory called **layouts** inside **src** where you would store all of your different layout components, such as a **flex** container, which would help you rapidly add structure to your UI.

You may choose to seperate these components so that you can fully customize how your components work together to build your UI.

## Directory Structure

You may choose name your component folder using an uppercase letter.

```
> components
  > Button
    > index.js
    > button.styles.scss
```

By doing so, it helps you write cleaner import statements by eliminating the need for `index.js` in the import statement. It would look something like this:

```
./components/Button
```

This is because the **index.js** inside the component folder is the default file that React will look for when importing.

## Styling with SCSS

First thing you need to do is link your stylesheet with your component file so that you can start to use the styles you write. If the stylesheet is not a module, your import statement does not require you to give it a name, but instead you can just import the path directly.

```
import './button.styles.scss'
```

If your stylesheet is a module, then you must give it a name.

```
import styles from './styles.module.scss'
```

To write the most user friendly code, there are a few things you want to consider:

- You can create a base class in Sass by using `%` at the beginning of your class name.

```css
%buttonBase{
  background-color: transparent;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 3px 1px rgb(219, 219, 219);
  margin: 2rem;
  padding: 0.25rem 2rem;
  color: grey;
}
```

**The above example shows our base button class**

- You can use the base class to rapidly build out the variants of the component by using [`@extend`](https://sass-lang.com/documentation/at-rules/extend#how-it-works) in the variant style body.

```css
.default{
  @extend %buttonBase;
  background-color: blue;
}
```

**This means that the class of `.default` will inherit all of the styles from our base button class `buttonBase`, and any additional styles will be applied.**

### Using your Classes
- Apply a `prop`, such as `variant`, to your `<Button>` in `App.js`.

```js
<Button variant="default">UI Button</Button>
```

- Access your `variant` prop in `Button.js` and inject it into your JSX using `className`

```js
<button className={props.variant}>{props.children}</button>
```

