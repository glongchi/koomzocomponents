import { controlCategory } from "./control-category.enum";

export interface IDroppableControlInput{
  //layout:
  row:number;
  col:number;
  controlCategory:string;
  layoutControlColCount:number;
  colSize:number;
  layoutControlColConfigs:string[];
  controlContainerId:string;
}


export interface IDroppableControlOutput{
    //layout:
    row: number;
    col: number;
    type: string;
    //format: row_col
    //controlContainerId:string;
  }

  export class DroppableControlOutput implements IDroppableControlOutput{
    row: number;
    col: number;
    type: string;

    constructor(value: { row:number, col:number, type:string }){
      this.row=value.row;
      this.col=value.col;
      this.type=value.type;
    }

  }

  export class DroppableControlInput implements IDroppableControlInput{
    row: number;
    col: number;
    controlCategory:string;
    layoutControlColCount:number;
    constructor(value: { row:number, col:number, controlCategory?:string , layoutControlColCount?:number}){
      this.row=value.row;
      this.col=value.col;
      this.controlCategory =value.controlCategory || controlCategory.controls;
      this.layoutControlColCount=value.layoutControlColCount || 1
    }

    get controlContainerId(): string {
      return `${this.row}_${this.col}`;
    }

    get colSize(): number {
      return 12/this.layoutControlColCount;
    }

    get layoutControlColConfigs(): string[] {
      const output =[];
      const colSize = 12/this.layoutControlColCount;
       for(let i=1; i<=this.layoutControlColCount; i++)
       output.push([this.row, i,colSize]); //[row, col, colSize]

      return output;
    }


  }

  export interface IDroppableControlInputRow{
    //layout:
   items: IDroppableControlInput[];
  }

  export class DroppableControlInputRow implements IDroppableControlInputRow{
    items: IDroppableControlInput[];
    constructor(items:IDroppableControlInput[]){
      this.items=items;
    }

  }
  