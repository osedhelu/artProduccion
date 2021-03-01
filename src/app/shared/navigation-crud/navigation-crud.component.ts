import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import {Employee, State, } from '../../_class/example.class'
import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';
import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';
@Component({
  selector: 'app-navigation-crud',
  templateUrl: './navigation-crud.component.html',
  styleUrls: ['./navigation-crud.component.scss']
})
export class NavigationCrudComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
    directions: any;
    selectedRowIndex = -1;

  constructor() { }
  capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
  ngOnInit() {
    this.directionChanged()
  }
  addclick(e) {
    const buttonText = e.component.option("text");
    notify("The " + this.capitalize(buttonText) + " button was clicked");
  }
  editRow() {
    this.grid.instance.editRow(this.selectedRowIndex);
    this.grid.instance.deselectAll();
}

deleteRow() {
    this.grid.instance.deleteRow(this.selectedRowIndex);
    this.grid.instance.deselectAll();
}

addRow() {
    this.grid.instance.addRow();
    this.grid.instance.deselectAll();
}
directionChanged() {
  config({
      floatingActionButtonConfig: {  
        icon: "rowfield",
      shading: true,
      label: "Acciones",
      position: {
          my: "right bottom",
          at: "right bottom",
        }
      }
  });

  repaintFloatingActionButton();
}
selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
}
}
