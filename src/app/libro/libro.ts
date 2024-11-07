export class Libro {
    id: number;
    titulo: string;
    edicion: string;
    estado: boolean;
    paginas: number;
    editorial_id: number | null;
    seccion_id: number | null;
  
    constructor(
      id: number = 0,
      titulo: string = '',
      edicion: string = '',
      estado: boolean = true,
      paginas: number = 0,
      editorial_id: number | null = null,
      seccion_id: number | null = null
    ) {
      this.id = id;
      this.titulo = titulo;
      this.edicion = edicion;
      this.estado = estado;
      this.paginas = paginas;
      this.editorial_id = editorial_id;
      this.seccion_id = seccion_id;
    }
  }
  