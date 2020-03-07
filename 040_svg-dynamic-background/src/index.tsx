/** @jsx html */

import { html } from 'snabbdom-jsx';

import { VNode } from 'snabbdom/vnode';
import { init } from "snabbdom";
import propsModule from "snabbdom/modules/props"
import classModule from "snabbdom/modules/class"
import attributesModule from "snabbdom/modules/attributes"
import styleModule from "snabbdom/modules/style"
import eventListenersModule from "snabbdom/modules/eventlisteners"
import { Chronology, ChronologyModel } from "./components/chronology";
import { ParentHandler } from './elm/structure';

const patch = init([
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  attributesModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule // attaches event listeners
]);


var vnode : VNode
// Initial Model
var model : ChronologyModel

const parentHandler : ParentHandler<ChronologyModel> = (action : Symbol, newModel : ChronologyModel) => {
  model = Chronology.update(action, model, newModel)
  render()
}

model = Chronology.init(parentHandler)

const render : Function = () : void => {
  const newVNode : VNode = <Chronology.view model={model} handler={parentHandler} />
  vnode = patch(vnode, newVNode)
}

// https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // first time.
  vnode = document.getElementById('container') as unknown as VNode;
  render();
});