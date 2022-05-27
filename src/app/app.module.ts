import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { FormClientComponent } from './clients/form-client.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe';

const routes:Routes=[
 {path:'' ,redirectTo:'/clients',pathMatch:'full'},
 {path:'clients' ,component:ClientsComponent},
 {path:'clients/form' ,component:FormClientComponent},
 {path:'clients/form/:id' ,component:FormClientComponent} 
 
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    FormClientComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
