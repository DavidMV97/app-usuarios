import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any ; 
  imgUrl : string = '' ; 
  firstName: string = '';
  email:string = '';

  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name ; 
    this.email = this.user.email ; 
  }

}
