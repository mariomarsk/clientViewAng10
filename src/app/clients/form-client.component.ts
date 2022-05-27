import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
  client:Client = new Client();
  title:String =  "Gestion Client";
  constructor(private clientService:ClientService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{

    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.clientService.get(id).subscribe(
            es=>this.client=es
          );
        }
      }
    );
  }

  create():void{
    console.log(this.client);
    this.clientService.create(this.client).subscribe(
      res=>this.router.navigate(['/clients'])
    );
  }

  update():void{
    console.log(this.client);
    this.clientService.update(this.client).subscribe(
      res=>this.router.navigate(['/clients']) 
    );
  }

}
