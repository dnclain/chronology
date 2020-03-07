import { init } from "snabbdom";
import Snabbdom from "snabbdom-pragma"
import classModule from "snabbdom/modules/class"
import propsModule from "snabbdom/modules/props"
import attributesModule from "snabbdom/modules/attributes"
import styleModule from "snabbdom/modules/style"
import eventListenersModule from "snabbdom/modules/eventlisteners"
var patch = init([
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  attributesModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule // attaches event listeners
]);

//var h = require('snabbdom/h').default; // helper function for creating vnodesyarn a

var vnode : any;

var data : {degRotation:number} = {
  degRotation: 0
};

function gRotation () {
  console.log("gRotation: %s", data.degRotation);
  return 'rotate(' + data.degRotation + 'deg)';
}

function triangleClick (id : string) {
  console.log('triangleClick: %s', id);
  render();
}

function sceRotate (degs : number) {
  data.degRotation += degs;
  console.log('handleRotate: %s, %s', degs, data.degRotation);
}

function handleRotate (degs : number) : void {
  sceRotate(degs)
  render();
}

function sceReset (degs : number) {
  data.degRotation = degs;
}

function handleReset () : void {
  sceReset(0)
  render();
}

function render () {
  vnode = patch(vnode, view(data));
}

const hTriangle = (id : any, degRotation : any) => (
    <polygon id={id} points="-50,-88 0,-175 50,-88" stroke-width="3" transform={"rotate(" + degRotation + ")"} on-click={() => triangleClick(id)} />
  )

const view = (data : any) => (
  <div className="view">
    <h1>Snabbdom SVG Carousel</h1> 
    <svg width="380" height="380" viewBox="-190 -190 380 380">
      <g id="carousel" style={{transform: gRotation()}}>
        {[
          hTriangle('yellow', 0),
          hTriangle('green', 60),
          hTriangle('magenta', 120),
          hTriangle('red', 180),
          hTriangle('cyan', 240),
          hTriangle('blue', 300)
        ]}
      </g>
    </svg>
    <button on-click={ () => handleRotate(60) }>Rotate Clockwise</button>
    <button on-click={ () => handleRotate(-60) }>Rotate Anticlockwise</button>
    <button on-click={ () => handleReset() }>Reset</button>    
  </div>
)

window.addEventListener('DOMContentLoaded', () => {
  var container : HTMLDivElement = document.getElementById('container') as HTMLDivElement;
  vnode = patch(container, view(data));
  render();
});