import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ComponentsComponent } from "./components/components.component"

const routes: Routes = [
  { path: "components", component: ComponentsComponent },
  { path: "components/:component", component: ComponentsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
