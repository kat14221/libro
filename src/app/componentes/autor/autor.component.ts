
import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { NgFor } from '@angular/common';
import { Autor } from '../../autor/autor'; 
import { AutorService } from '../../autor/autor.service'; 

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [NabvarComponent, NgFor],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {
  autores:Autor[]=[];
  constructor(
    private autorService:AutorService
  ){}
  ngOnInit(){
    this.listarAutores();
  }

  listarAutores(){
    this.autorService.getAutores().subscribe((data)=>{
      this.autores=data;
    });
  }
  
}
