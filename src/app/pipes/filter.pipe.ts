import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../clients/client';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clients: Client[], searchSharedKey: string): Client[] {
    
    if(!clients||!searchSharedKey){
      return clients;  
    }
    return clients.filter(client=>
       client.sharedKey.toLocaleLowerCase().includes(searchSharedKey.toLocaleLowerCase()));
  }

}
