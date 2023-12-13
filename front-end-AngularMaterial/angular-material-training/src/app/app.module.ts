import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '././material/material.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressspinnerComponent } from './progressspinner/progressspinner.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { HeaderComponent } from './header/header.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component'
@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    BadgeComponent,
    ButtonComponent,
    ButtontoggleComponent,
    CardComponent,
    CheckboxComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionpanelComponent,
    GridlistComponent,
    IconComponent,
    InputComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressspinnerComponent,
    RadiobuttonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SliderComponent,
    SnackbarComponent,
    HeaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
