import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private ApiURl = 'http://localhost:8080/api/autores';
  constructor(private http: HttpClient) {}

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.ApiURl);
  }
  getAutorbyID(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.ApiURl}/${id}`);
  }
  updateAutor(id: number, Autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(`${this.ApiURl}/${id}`, Autor);
  }
  deleteAutor(id: number): Observable<Autor> {
    return this.http.delete<Autor>(`${this.ApiURl}/${id}`);
  }
  crearAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.ApiURl, autor);
  }
}
