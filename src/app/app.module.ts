import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContainerComponent } from "./companyPage/containerComponent/container.component";
import { ContentComponent } from "./companyPage/contentComponent/content.component";
import { FooterComponent } from "./companyPage/footerComponent/footer.component";
import { HeaderComponent } from "./companyPage/header/header.component";
import { EventBindingComponent } from './containers/event-binding/event-binding.component';



/**
 *  Decorating a class to let Angular know that this is a module not just sny class
 */
@NgModule({
    imports: [BrowserModule], // modules dependencies
    declarations: [ContainerComponent, HeaderComponent, FooterComponent, ContentComponent, EventBindingComponent], // Used to register components/services
    bootstrap: [EventBindingComponent] // container required at startup
})
export class AppModule { }