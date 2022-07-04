import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Host,
  h,
  Prop,
} from "@stencil/core";
import { DroppableControlOutput, IDroppableControlInput } from "../models/index";

@Component({
  tag: "kz-droppable",
  styleUrl: "kz-droppable.css",
  shadow: true,
})
export class KzDroppable {
  @Element() hostElement: HTMLElement;
  @Event() elementDropped: EventEmitter;
  @Prop() input : IDroppableControlInput;

  @Method()
  async complete(ev, data) {
          
          
      console.log(`${ev}  to ${data}`)     
      let output = new DroppableControlOutput({...data, ... this.input})
      this.elementDropped.emit(output);      
      console.log('draggedControl: ',output);
  }


  async isInsideDroppableArea(x, y) {
    const droppableArea = this.hostElement.getBoundingClientRect();
   // console.log('Rect',droppableArea)
    //console.log(`cell ${this.input.row}:${this.input.col}, dropArea: left ${droppableArea.left}, right ${droppableArea.right} ,top ${droppableArea.top} ,bottom ${droppableArea.bottom}`)

    if (x < droppableArea.left || x >= droppableArea.right) {
      return false;
    }
    if (y < droppableArea.top || y >= droppableArea.bottom) {
      return false;
    }    
    return true;
  }

  render() {
    return (
      <Host>
        <slot name ={ this.input.layoutControlColCount === 1 ? "" : `${this.input.row}_${this.input.col}` }></slot>
      </Host>
    );
  }
}
