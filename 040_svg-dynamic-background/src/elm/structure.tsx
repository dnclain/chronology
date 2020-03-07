import {VNode} from "snabbdom/vnode";

// engine types

/**
 * Event Handler given by the parent. 
 * Its mission : to be called by Event
 * Then will call the corresponding handler of the children (the updater) with the good part of the model.
 * Then update the view
 */
export type ParentHandler<PAYLOAD> = (action: Symbol, payload: PAYLOAD) => void


/**
 * Asynchronous user event : expect an handler and event data (payload)
 * Does not return data. Just call the handler with the correct action.
 */
export type UserEvent<HANDLER, PAYLOAD> = (handler: HANDLER, payload: PAYLOAD) => void

/**
 * Call by the parent handler.
 * Then will call the good updater.
 */
export type ChildrenHandler<MODEL, PAYLOAD> = (action: Symbol, previous: MODEL, payload: PAYLOAD) => MODEL

/**
 * Update the corresponding part of the model.
 * There is one updater by action.
 * Return the new model.
 */
export type Initializer<PARENT_HANDLER, MODEL> = (handler: PARENT_HANDLER) => MODEL
export type Updater<MODEL, PAYLOAD> = (previous: MODEL, payload: PAYLOAD) => MODEL

/**
 * The view
 */
export type View = (tags: any, attrs:any, children : VNode) => VNode

export type Component<MODEL, PARENT_HANDLER, PAYLOAD> = {
    init: Initializer<PARENT_HANDLER, MODEL>
    view: View
    update: ChildrenHandler<MODEL, PAYLOAD>
}