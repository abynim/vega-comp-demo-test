import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { VegaComponentModule } from "@heartlandone/vega-angular"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ComponentsComponent } from "./components/components.component"
import { ComponentContentComponent } from "./component-content/component-content.component"
import { ComponentSubContentComponent } from "./component-sub-content/component-sub-content.component"
import { AccordionComponent } from "../components/accordion/examples/accordion/accordion.component"
import { AccordionWithRightChevronComponent } from "../components/accordion/examples/accordion-with-right-chevron/accordion-with-right-chevron.component"
import { AppFooterComponent } from "../components/app-footer/examples/app-footer/app-footer.component"
import { AppFooterWithAdditionalLinksComponent } from "../components/app-footer/examples/app-footer-with-additional-links/app-footer-with-additional-links.component"
import { BadgeComponent } from "../components/badge/examples/badge/badge.component"
import { BannerComponent } from "../components/banner/examples/banner/banner.component"
import { ButtonComponent } from "../components/button/examples/button/button.component"
import { ButtonWithIconComponent } from "../components/button/examples/button-with-icon/button-with-icon.component"
import { ButtonSecondaryVariantComponent } from "../components/button/examples/button-secondary-variant/button-secondary-variant.component"
import { ButtonSmallComponent } from "../components/button/examples/button-small/button-small.component"
import { ButtonLargeComponent } from "../components/button/examples/button-large/button-large.component"
import { ButtonCircleComponent } from "../components/button-circle/examples/button-circle/button-circle.component"
import { ButtonCircleWithSearchIconComponent } from "../components/button-circle/examples/button-circle-with-search-icon/button-circle-with-search-icon.component"
import { ButtonCircleDangerComponent } from "../components/button-circle/examples/button-circle-danger/button-circle-danger.component"
import { ButtonLinkComponent } from "../components/button-link/examples/button-link/button-link.component"
import { ButtonLinkWithIconComponent } from "../components/button-link/examples/button-link-with-icon/button-link-with-icon.component"
import { ButtonLinkDangerComponent } from "../components/button-link/examples/button-link-danger/button-link-danger.component"

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ComponentContentComponent,
    ComponentSubContentComponent,
    AccordionComponent,
    AccordionWithRightChevronComponent,
    AppFooterComponent,
    AppFooterWithAdditionalLinksComponent,
    BadgeComponent,
    BannerComponent,
    ButtonComponent,
    ButtonWithIconComponent,
    ButtonSecondaryVariantComponent,
    ButtonSmallComponent,
    ButtonLargeComponent,
    ButtonCircleComponent,
    ButtonCircleWithSearchIconComponent,
    ButtonCircleDangerComponent,
    ButtonLinkComponent,
    ButtonLinkWithIconComponent,
    ButtonLinkDangerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, VegaComponentModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
