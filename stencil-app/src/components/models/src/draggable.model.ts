import { ILocaleProp } from "./locale-prop.model";

export interface IDraggableControlInput{
    type:string;
    description:ILocaleProp;
    icon?:string;
    iconPath?:string;
    style?:string;
    size?:string;
    category:string;
}

export interface IDraggableControlOutput{
  row:number;
  col:number;
  type:string;
  properties:any;
}