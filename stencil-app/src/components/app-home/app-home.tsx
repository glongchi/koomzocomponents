import { Component, State, Element, h } from "@stencil/core";
import { controlCategory, ControlType, IDraggableControlInput,  IDroppableControlInputRow } from "../models/index";
import { FormCanvasBuilder } from "../services/index";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  @Element() hostElement: HTMLElement;
  @State() droppableAreaList;
  @State() cards;
  @State() chosenOne: string = "pick a card...";
  
  @State() draggableControls:IDraggableControlInput[];
  
  @State() droppableControls:IDroppableControlInputRow[];

  componentWillLoad() {
     this.draggableControls=[
       {type:ControlType.textBox, category:controlCategory.controls, icon:'text-outline', iconPath :'/assets/app/imgs/textbox.svg', description:{ "en":"Textbox"} },
       {type:ControlType.checkbox,  category:controlCategory.controls, icon:'checkbox-outline', iconPath :'/assets/app/imgs/checkbox.svg', description:{ "en":"Checkbox"} },
       {type:ControlType.select,  category:controlCategory.controls, icon:'list-outline', iconPath :'/assets/app/imgs/textbox.svg', description:{ "en":"Select"} }
     ];

     
    console.log('this.draggableControls',this.draggableControls)

     this.droppableControls= FormCanvasBuilder.getControlLayoutList();
  }

  componentDidLoad() {
   // this.droppableArea = this.hostElement.querySelector("kz-droppable");
    //https://attacomsian.com/blog/javascript-convert-nodelist-to-array
    this.droppableAreaList = Array.from( this.hostElement.querySelectorAll("kz-droppable") );
    console.log('this.droppableAreaList',this.droppableAreaList.map(x=> x.input))
  }

  handleDrop(data) {
    this.chosenOne = data.content;
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Drag and Drop</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding  home-screen">
       
       <ion-grid>
        <ion-row>
       
          <ion-col size="3">


                    <ion-grid class="dashboard">
                    <ion-row>
                                {this.draggableControls.map((control) => (            
                                  <ion-col  class="ion-no-padding" size="6" size-md="4" size-lg="3" size-xl="2"> 
                                  <div class="cell-container ion-padding" >
                                    
                                  
                                  <kz-draggable droppableList={this.droppableAreaList}  dropData={control}>
		                                 <ion-icon src={control.iconPath}> </ion-icon>
	                                  </kz-draggable>
                                    <ion-img src={control.iconPath}></ion-img>
                                  
                                  </div>
                                  </ion-col>
                              ))}
                  </ion-row>
                  </ion-grid>   

          </ion-col>
          <ion-col size="9">


          <ion-grid>

          {this.droppableControls.map((controlsRow) => (   
                        <ion-row>
                             {   controlsRow.items.map( (control) => (
                                 <ion-col size={control.colSize.toString()} >

                                  
                                   <div
                                    style={{
                                      border: `2px dashed #ebe0e0`,
                                     // width: `100%`,
                                      //height: `50px`,
                                    //  display: `flex`,
                                      alignItems: `center`,
                                      justifyContent: `center`,
                                    }}
                                   >

                                          

                                      <kz-droppable input={control} onElementDropped={(ev) => this.handleDrop(ev.detail)} >
                                      </kz-droppable> 

                                   </div>
                                </ion-col>
                                ))   
                              }                     
                      </ion-row>
                     
                        ))} 
        </ion-grid>  

          </ion-col>
        </ion-row>
        </ion-grid>

       

    
      </ion-content>,
    ];
  }
}
