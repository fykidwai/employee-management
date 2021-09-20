import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './companyPage/containerComponent/container.component';
import { ContentComponent } from './companyPage/contentComponent/content.component';
import { FooterComponent } from './companyPage/footerComponent/footer.component';
import { HeaderComponent } from './companyPage/header/header.component';
import { EventBindingComponent } from './containers/event-binding/event-binding.component';
import { ImplementBootstrapComponent } from './containers/implement-bootstrap/implement-bootstrap.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeModelComponent } from './employees/employee-model/employee-model.component';

/**
 *  Decorating a class to let Angular know that this is a module not just sny class
 */
@NgModule({
  imports: [BrowserModule, FormsModule], // modules dependencies
  declarations: [
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    EventBindingComponent,
    ImplementBootstrapComponent,
    EmployeeListComponent,
    EmployeeModelComponent,
  ], // Used to register components/services
  bootstrap: [EmployeeModelComponent], // container required at startup
})
export class AppModule {}
