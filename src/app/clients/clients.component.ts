import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { ModalDismissReasons,NgbModal } from  '@ng-bootstrap/ng-bootstrap';  
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  closeResult:string;
  title: string = "Alianza Clients";
  clients: Client[];
  client:Client = new Client();
  searchSharedKey:string;
  constructor(private clientService: ClientService,private modalService:NgbModal,private router:Router) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(
      e => this.clients = e
    );
  }

  delete(client: Client): void {
    console.log(client);
    this.clientService.delete(client.id).subscribe(
      res => this.clientService.getAll().subscribe(
        response=>this.clients=response
      )
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  create():void{
    console.log(this.client);
    this.clientService.create(this.client).subscribe(
      res=>window.location.reload()
    );
    
  }

  update():void{
    console.log(this.client);
    this.clientService.update(this.client).subscribe(
      res=>this.router.navigate(['/clients']) 
    );
  }

  clickme(name:string) {
    var blankposition=name.indexOf(' ');
    var cadenanueva=name.charAt(0)+name.substring(blankposition,name.length).trim();
    this.client.sharedKey=cadenanueva;
  }
  

  
}

