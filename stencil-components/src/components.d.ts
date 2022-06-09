/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
import { IDroppableControlInput } from "./components/models/index";
export namespace Components {
    interface AppDraggable {
        "dropData": any;
        "droppable": any;
    }
    interface AppDroppable {
        "complete": (ev: any, data: any) => Promise<void>;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface KzDraggable {
        "dropData": any;
        "droppableList": any;
    }
    interface KzDroppable {
        "complete": (ev: any, data: any) => Promise<void>;
        "input": IDroppableControlInput;
    }
}
declare global {
    interface HTMLAppDraggableElement extends Components.AppDraggable, HTMLStencilElement {
    }
    var HTMLAppDraggableElement: {
        prototype: HTMLAppDraggableElement;
        new (): HTMLAppDraggableElement;
    };
    interface HTMLAppDroppableElement extends Components.AppDroppable, HTMLStencilElement {
    }
    var HTMLAppDroppableElement: {
        prototype: HTMLAppDroppableElement;
        new (): HTMLAppDroppableElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLKzDraggableElement extends Components.KzDraggable, HTMLStencilElement {
    }
    var HTMLKzDraggableElement: {
        prototype: HTMLKzDraggableElement;
        new (): HTMLKzDraggableElement;
    };
    interface HTMLKzDroppableElement extends Components.KzDroppable, HTMLStencilElement {
    }
    var HTMLKzDroppableElement: {
        prototype: HTMLKzDroppableElement;
        new (): HTMLKzDroppableElement;
    };
    interface HTMLElementTagNameMap {
        "app-draggable": HTMLAppDraggableElement;
        "app-droppable": HTMLAppDroppableElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "kz-draggable": HTMLKzDraggableElement;
        "kz-droppable": HTMLKzDroppableElement;
    }
}
declare namespace LocalJSX {
    interface AppDraggable {
        "dropData"?: any;
        "droppable"?: any;
    }
    interface AppDroppable {
        "onElementDropped"?: (event: CustomEvent<any>) => void;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface KzDraggable {
        "dropData"?: any;
        "droppableList"?: any;
    }
    interface KzDroppable {
        "input"?: IDroppableControlInput;
        "onElementDropped"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "app-draggable": AppDraggable;
        "app-droppable": AppDroppable;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "kz-draggable": KzDraggable;
        "kz-droppable": KzDroppable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-draggable": LocalJSX.AppDraggable & JSXBase.HTMLAttributes<HTMLAppDraggableElement>;
            "app-droppable": LocalJSX.AppDroppable & JSXBase.HTMLAttributes<HTMLAppDroppableElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "kz-draggable": LocalJSX.KzDraggable & JSXBase.HTMLAttributes<HTMLKzDraggableElement>;
            "kz-droppable": LocalJSX.KzDroppable & JSXBase.HTMLAttributes<HTMLKzDroppableElement>;
        }
    }
}
