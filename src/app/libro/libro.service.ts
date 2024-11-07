import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = 'http://localhost:3000/libros'; // Cambia esta URL a tu API

  constructor(private http: HttpClient) {}

  getLibros(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getLibroById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createLibro(libro: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, libro);
  }

  updateLibro(id: number, libro: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, libro);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
