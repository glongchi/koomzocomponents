import { DroppableControlInput, DroppableControlInputRow, IDroppableControlInput, IDroppableControlInputRow } from "../models/index"

 class FormCanvasService {

    private _layout : Array<IDroppableControlInput> 

    constructor(){
        this._layout = new Array<IDroppableControlInput> ();
        this._layout.push( new DroppableControlInput({row:1,col:1}));
        this._layout.push( new DroppableControlInput({row:1,col:2}));
        this._layout.push( new DroppableControlInput({row:1,col:3}));
        this._layout.push( new DroppableControlInput({row:1,col:4}));
        this._layout.push( new DroppableControlInput({row:2,col:1}));
        this._layout.push( new DroppableControlInput({row:2,col:2}));
    }

    public addControl(obj:IDroppableControlInput):void{    
        console.log(`${obj}`)     
    }

    public removeControl(id:string):void {   
        console.log(`${id}`)     
    }

    public moveControl(fromId:string, toId:string):void { 
          
        console.log(`${fromId}  to ${toId}`)     
    }  
    public getControlList(): Array<IDroppableControlInput>{
        return this._layout;
    }

    public getControlLayoutList(): Array<IDroppableControlInputRow>{
         //group rows
         let output:IDroppableControlInputRow[] =[];
         const rowMap = this.groupLayoutCells();
         
        for(let key of Object.keys(rowMap)){

            this.initRowCells(rowMap[key]);
            output.push(new DroppableControlInputRow(rowMap[key]));

        }

        return output;
    }

    private groupLayoutCells(): {[name:string]:Array<IDroppableControlInput>}{

        let rowMap ={};
         for(let dInput of this._layout){

            if(!rowMap[dInput.row])
                rowMap[dInput.row]=[];

            rowMap[dInput.row].push(dInput);
         }
         return rowMap;
    }

    private initRowCells(rowObjs: IDroppableControlInput[]):IDroppableControlInput[]{
         
        for(let cell of rowObjs){
            cell.layoutControlColCount=rowObjs.length;
        }
        return rowObjs;
    }

}

export const FormCanvasBuilder = new FormCanvasService();