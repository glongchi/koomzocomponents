import { Component, Element, Prop, Host, h, writeTask } from "@stencil/core";
//import { createGesture, Gesture,GestureConfig } from "@ionic/core";
import { createGesture, Gesture, GestureConfig} from '../services/gesture/index'


@Component({
  tag: "kz-draggable",
  styleUrl: "kz-draggable.css",
  shadow: true,
})
export class KzDraggable {
  @Element() hostElement: HTMLElement;
  @Prop() droppableList;
  //@Prop() droppable;
  @Prop() dropData;


  isInsideDroppableArea(x, y, element:HTMLElement) {
    const droppableArea = element.getBoundingClientRect();
    console.log('Rect',droppableArea)
    //console.log(`cell ${this.input.row}:${this.input.col}, dropArea: left ${droppableArea.left}, right ${droppableArea.right} ,top ${droppableArea.top} ,bottom ${droppableArea.bottom}`)

    if (x < droppableArea.left || x >= droppableArea.right) {
      return false;
    }

    if (y < droppableArea.top || y >= droppableArea.bottom) {
      return false;
    }
    
    console.log('Rect found',droppableArea)
    return true;
  }

  componentDidLoad() {
    const style = this.hostElement.style;

    console.log('dragGesture componentDidLoad')
    const options:GestureConfig ={
      el: this.hostElement,
      gestureName: "draggable",
      threshold: 0,
      onStart: () => {
        writeTask(() => {
          style.transition = "none";
          style.opacity = "0.7";
        });
      },
      onMove: (ev) => {
        writeTask(() => {
          style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px)`;
        });
      },
      onEnd: (ev) => {
        writeTask(() => {
          style.transition = ".3s ease-out";
          style.transform = `translate(0, 0)`;
          style.zIndex = "inherit";
          style.opacity = "1";
        });
        //console.log(`coordinates: x: ${ev.currentX} x: ${ev.currentX}`)
        //const targetDroppable = this.droppableList.find( async (x) => await x.isInsideDroppableArea(ev.currentX, ev.currentY))
        
        const targetDroppable = this.droppableList.find(x => this.isInsideDroppableArea(ev.currentX, ev.currentY,x))
        if(targetDroppable){
          console.log('targetDroppable',targetDroppable.input)
          targetDroppable.complete(ev, this.dropData);
        }
      },
    };

    const dragGesture: Gesture = createGesture(options);
    console.log('dragGesture',dragGesture)
    dragGesture.enable();
    
   // console.log('dragGesture',dragGesture.enable())
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
