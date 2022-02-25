# Creating a React app with create-react-app

In the terminal, run the following command:

### `npx create-react-app {folder name}`

Ensure you are working within the root folder, and not a descendant folder.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Cleaning out the framework folder

It is suggested to delete the default CSS files and all of the testing files as well.

## How does React work?

React works by only delivering a single HTML page to the client, and in the HTML markup, there is a single div element with an ID of "root".

```
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

```
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

```
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

```
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

```
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

```
> {label: 'This is an example of props'}
    label: "This is an example of props"
    >[[Prototype]]: Object
```

When passing properties, you can think of the component as a `Template Literal`. Everything you type will be passed as a string. If you want to pass a numeric value, then you can break out of `JSX` by using `{}`, and then enter you value.

```
<Button label="This is an example of props" age={12}/>
```

If we `console.log(props)` we will see:

```
{label: 'This is an example of props', age: 12}
```

Instead of 

```
{label: 'This is an example of props', age: '12'}
```

**Notice the difference between `12` and `'12'` in the two `console.log(props)`**

The same concept can be applied to all of JavaScript's native data types, variables, functions, or objects.

Since the properties are passed as an Object, you can use **Object Destructuring** to store the values of the properties in variables.

```
function Button({label, age}) {
  return <button>{label}</button>;
}
```

If you still want to bring the rest of the properties into the function, you can use the **spread operator**

```
function Button({label, age, ...props}) {
  return <button>{label}</button>;
}
```

```
Console

This is an example of props
12
>{}
```

Notice that when we `console.log(props)`, we are returned an empty object. This is because both `label` and `age` have already been pulled out of `props`. 

If we add another property to our Button component in `App.js`, we will then see the last property in our `console.log(props)`

```
App.js

<Button label="This is an example of props" age={12} name="Tyler"/>

Console

This is an example of props
12
>{name: 'Tyler'}
```

Notice that `'Tyler'` is now a property of the Button, but it is still in the `props` object becuase we have not destructured `props` any further.

---

## Modular CSS

To use ***Modular CSS***, you create a stylesheet within the module folder.

In our example case, we would create a stylesheet called `button.css` inside of our `button` module folder

After you write your styles, you then have to make sure to import the stylesheet within your component file. 

```
import './button.css'
```

**No export is needed in the `button.css` file.**

The issue with this approach of styling is that the styles are still global. This means that if you use a regular `<button>` instead of the `<Button>` component, the styles will still be applied.

**What we do instead is:**
- Name the stylesheet ***button.module.css***
- Create a `className` that you can apply to your `<Button>` component
- Import the stylesheet module as an object

```
import styles from './button.module.css'
```

- Inject the specified style you would like into your `<Button>` component.

```
<button className={styles.default}>{label}</button>
```

This way, the regular `<button>` element that we created in our `App.js` file does not receive the styling, but the `<Button>` components do.

If we want to give different styles to individual `<Button>` components, then we can add a property to the component that will then be passed to our component function inside of our `props` object.

```
<Button variant="default" label="Default UI Button" />
```

Inside of our `<Button>` component, we then destructure our props object and grab the `variant` property, which holds the string value that we would like to apply as a class to our button.

```
function Button({label, variant}) {
  return <button className={styles[variant]}>{label}</button>;
}
```

Then, similarly to how we applied the style earlier, we use `className={}`, but instead of accessing the style explicitly from our stylesheet like so: 

`<button className={styles.default}>{label}</button>;`

We use our variant property to dynamically access the `styles` object's properties.

In JavaScript, the styles object would look something like this:

```
styles {
  default: {
    background-color: white,
    color: grey
  }
  warning: {
    background-color: orange,
    color: white
  }
}
```

So, knowing this, you can access the style you would like to use by accessing the `styles` object property using ***Object Bracket Notation***

```
<button className={styles[variant]}>{label}</button>
```
---
### CSS Composition

In our stylesheet module, we don't want to have redundant code. Since our buttons are only differentiated by color, we can use a base styling class, such as `.default`, and derive our other styling classes from it. 

To do this, we use the `composes` styling attribute which allows us to use the `default` class attributes in our other styling classes without re-writing the code.

**NOTE** The `composes` attribute can only be used within a *CSS Module*

```
.default{
  background-color: transparent;
  border: none;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 2px 0 var(--slate-400);
  color:grey;
  border-radius: 3px;
  margin: 1rem;
  font-size:1rem;
}

.warning{
  composes: default;
}
```

Any button created with the `variant` of `warning` will now inherit all styling attributes from the `default` variant. You can then add styles that will be unique to the `warning` variant as seen in the example below.

```
.default{
  background-color: transparent;
  border: none;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 2px 0 var(--slate-400);
  color:grey;
  border-radius: 3px;
  margin: 1rem;
  font-size:1rem;
}

.warning{
  composes: default;
  background-color: var(--orange-500);
  color: white;
}
```

Now, any button with the `warning` variant will still have all of the `default` styles, but will also have its `background-color` and `color` attributes set to new values.

We can expand further on this topic and make our CSS more scalable and maintainable by using CSS Composition to derive even more styling attributes.

```
.lightText{
  color: white;
}

.darkText{
  color: var(--slate-600);
}

.warning{
  composes: default;
  composes: lightText;
}

.danger{
  composes: default;
  composes: darkText;
}
```

The example above would style the `warning` button variant using the base class of `default` and the class of `lightText`. Similiarly, it style the `danger` button variant using the base class of `default` and the class of `darkText`
---

## Creating an Open Component

Closed components don't have any children elements. They are a self-contained component.

Open components, such as an open `<Button>` component, would have children elements.

**Example**
```
<Button variant="default">Default Button</Button>
```

Notice that in the example above, we are trying to give the `<Button>` some text content, however, the text content does not get rendered in the markup.

To allow this to work, we must pass the built-in component property of `children` to the `<Button>` component function. 

```
function Button({label, variant, children}) {
  return <button className={styles[variant]}>{label}</button>;
}
```

Notice the `children` property being passed to the Button function.

This property is built in to React meaning that you **do not have to explicitly pass it when writing your JSX markup**

By passing it to the component function, it essentially tells React that the component has children.

Using the `children` property, instead of injecting the `label` property as the text content, we can inject the `children` property instead.

```
<button className={styles[variant]}>{children}</button>
```

