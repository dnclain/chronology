# ELM Architecture

## More Info
- https://medium.com/@yelouafi/react-less-virtual-dom-with-snabbdom-functions-everywhere-53b672cb2fe3
- https://github.com/snabbdom-jsx/snabbdom-jsx/blob/master/examples/todomvc/js/task.js

## Explanation 
The ELM Architecture is suitable to graphical component based on virtual dom.

The term 'Component' means "function that return a view part".

It consists in 3 elements :
- A view component 
- A state updater
- A Model

# The view 
It updates the virtual dom with the new view containing data from new state. 
It reloads also 