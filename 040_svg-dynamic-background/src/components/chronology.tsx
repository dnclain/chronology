/** @jsx html */

import { html } from 'snabbdom-jsx';
import { Component, ChildrenHandler, View, Initializer, ParentHandler } from '../elm/structure';
import { VNode } from 'snabbdom/vnode';

export type ChronologyModel = {
    zoom: number
}

export const AZoomIn = Symbol('AZoomIn')
export const AZoomOut = Symbol('AZoomOut')

const init : Initializer<ParentHandler<any>, ChronologyModel> = (handler : ParentHandler<any>) : ChronologyModel => {
    return {
        zoom: 0
    }
}

const update : ChildrenHandler<ChronologyModel,ChronologyModel> = (action:Symbol, previous: ChronologyModel, payload:ChronologyModel) : ChronologyModel => {
    var model : ChronologyModel = {...previous}
    switch(action) {
        case AZoomIn:
            model.zoom += payload.zoom
            model.zoom = (model.zoom > 10) ? 10 : model.zoom            
            break;
        case AZoomOut:
            model.zoom -= payload.zoom
            model.zoom = (model.zoom < 0) ? 0 : model.zoom
            break;
        default:
            // TODO
    }

    console.log("ZOOM:%s", model.zoom)
    return model
}

const view : View = ({model, handler}, children : VNode) : VNode => {
    return (<div>
        <p>{model.zoom}</p>
        <div>
        <button on-click={()=>{handler(AZoomIn, {zoom: 0.1})}}>+</button>
        <button on-click={()=>{handler(AZoomOut, {zoom: 0.1})}}>-</button>
        </div>
    </div>)
}

export const Chronology : Component<ChronologyModel,ParentHandler<any>,ChronologyModel> = {
    init, view, update
}




