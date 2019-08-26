https://youtu.be/DLX62G4lc44

Only one react element in ReactDOM.render()

import React from "react" this line is important for rendering also, works under the hood, if you remove it it will give error in the render line.

Apply className to only react elements not react Components, it will not produce desired results.

To be treated as javascript put it inside {}
template strings `My firstname is ${firstName}`

Inline styling - Double curly braces required for treating as javascript object. Remember strings don't work, the style attribute should have javascript object as the value.
Also notice backgroundColor, there can't be any - inside javascript object, camelCase is used. Deafult will be px for any int value in css.

<h1 style = {{color: "blue", backgroundColor: "red"}}>Ashish </h1>

props are passed from JSX to functional components in a function parameter called props.
function myComp(props)
You can directly us the props variable as props.firstName
Don't pass on multiple attributes/props from JSX, rather have one single object passed from JSX.
This will help in case you need to extend to some more props or change the data source.

You can have conditional styling for the elements by this way

<h3 style= {{display: !props.question && "none"}}>Hello </h3>
<h3 style ={{color: !props.question && "red"}}>Hello</h3>

How to display multiple components?
Say you data is coming in some json format in a variable called jokesData then you can use map function to return an array of components (Joke)

const jokeComponents = jokes.map(joke => <Joke key ={joke.id}, question = {joke.question}/>)
In the return part from the component you can simply do {jokeComponents} to display all the components.

Props can't be changed by the components receiving them, State can be changed.
Props are immutable. Only class based components can have state.

on submit of a button don't forget to do an event.preventDefault() otherwise the page will refresh.
