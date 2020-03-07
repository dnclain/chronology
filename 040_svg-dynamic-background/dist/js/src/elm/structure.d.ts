import { VNode } from "snabbdom/vnode";
/**
 * Event Handler given by the parent.
 * Its mission : to be called by Event
 * Then will call the corresponding handler of the children (the updater) with the good part of the model.
 * Then update the view
 */
export declare type ParentHandler<PAYLOAD> = (action: Symbol, payload: PAYLOAD) => void;
/**
 * Asynchronous user event : expect an handler and event data (payload)
 * Does not return data. Just call the handler with the correct action.
 */
export declare type UserEvent<HANDLER, PAYLOAD> = (handler: HANDLER, payload: PAYLOAD) => void;
/**
 * Call by the parent handler.
 * Then will call the good updater.
 */
export declare type ChildrenHandler<MODEL, PAYLOAD> = (action: Symbol, previous: MODEL, payload: PAYLOAD) => MODEL;
/**
 * Update the corresponding part of the model.
 * There is one updater by action.
 * Return the new model.
 */
export declare type Initializer<PARENT_HANDLER, MODEL> = (handler: PARENT_HANDLER) => MODEL;
export declare type Updater<MODEL, PAYLOAD> = (previous: MODEL, payload: PAYLOAD) => MODEL;
/**
 * The view
 */
export declare type View = (tags: any, attrs: any, children: VNode) => VNode;
export declare type Component<MODEL, PARENT_HANDLER, PAYLOAD> = {
    init: Initializer<PARENT_HANDLER, MODEL>;
    view: View;
    update: ChildrenHandler<MODEL, PAYLOAD>;
};
//# sourceMappingURL=structure.d.ts.map