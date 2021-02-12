import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxFormModule, DxTreeListModule, DxListModule, DxDrawerModule, DxToolbarModule, DxScrollViewModule, DxSelectBoxModule, DxTemplateModule, DxTabPanelModule, DxTabsModule, DxRadioGroupModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxValidationGroupModule } from 'devextreme-angular/ui/validation-group';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , DxDataGridModule
    , DxFormModule
    , DxTreeListModule
    , DxListModule
    , DxDrawerModule
    , DxToolbarModule
    , DxScrollViewModule
    , DxButtonModule
    , DxCheckBoxModule
    , DxTextBoxModule
    , DxValidatorModule
    , DxValidationGroupModule
    , DxContextMenuModule
    , BrowserModule
    , DxSelectBoxModule
    , DxTemplateModule
    , DxTabPanelModule
    ,DxTabsModule
    ,DxRadioGroupModule
  ],
  exports: [
    CommonModule
    , DxDataGridModule
    , DxFormModule
    , DxTreeListModule
    , DxListModule
    , DxDrawerModule
    , DxToolbarModule
    , DxScrollViewModule
    , DxButtonModule
    , DxCheckBoxModule
    , DxTextBoxModule
    , DxValidatorModule
    , DxValidationGroupModule
    , DxContextMenuModule
    , BrowserModule
    , DxSelectBoxModule
    , DxTemplateModule
    , DxTabPanelModule
    , DxTabsModule
    ,DxRadioGroupModule
  ]
})
export class DevexpressModule { }
