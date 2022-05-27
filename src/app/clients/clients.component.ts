import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  title: string = "Alianza Clients";
  clients: Client[];
  searchSharedKey:string;
  constructor(private clientService: ClientService) { }

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

}
