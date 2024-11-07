import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../libro/libro.service'; 
import { Libro } from '../../libro/libro'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroListComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private libroService: LibroService, private router: Router) {}

  ngOnInit(): void {
    this.fetchLibros();
  }

  fetchLibros(): void {
    this.libroService.getLibros().subscribe((data) => {
      this.libros = data;
    });
  }

  deleteLibro(id: number): void {
    if (confirm('¿Está seguro de eliminar este libro?')) {
      this.libroService.deleteLibro(id).subscribe(() => {
        this.fetchLibros();
      });
    }
  }

  editLibro(id: number): void {
    this.router.navigate(['/libros/edit', id]);
  }

  addLibro(): void {
    this.router.navigate(['/libros/new']);
  }
}
