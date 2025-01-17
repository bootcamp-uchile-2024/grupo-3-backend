import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises as FS } from 'fs';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Producto } from '../entities/producto.entity';
@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) { }

  /** Agrega una imagen nueva */
  async addImage(base64Content: string) {
    //crear uuid para nombre de archivo
    const uuid = uuidv4();
    //cortar base64 string
    try {
      const baseValido = base64Content.split(',')[1];

      //extraer extensión de la imagen
      const tipoArchivo = base64Content.match(
        /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64/,
      )[1];
      const extension = tipoArchivo.split('/')[1];

      //definir la ruta del archivo
      const rutaPadre = `${process.env.RUTA_FISICA}` || `./imagenes/productos`;
      const rutaArchivo = `${rutaPadre}/${uuid}.${extension}`;
      const rutaPublica = `${process.env.RUTA_ESTATICOS}/${uuid}.${extension}`;
      await FS.mkdir(rutaPadre, { recursive: true });
      await FS.writeFile(rutaArchivo, baseValido, { encoding: 'base64' });
      return rutaPublica;
    } catch (err) {
      throw new BadRequestException('Error al subir archivo');
    }
  }

  /** Elimina una imagen */

  async deleteImage(rutaArchivo: string) {
    try {
      await FS.rm(rutaArchivo);
    } catch (err) {
      throw new BadRequestException('Error al eliminar imagen');
    }
  }

  /** Actualiza o reemplaza una imagen existente */
  async updateImage(base64Content: string, rutaArchivo: string) {
    //Elimina archivo
    await this.deleteImage(rutaArchivo);

    //Agrega nueva imagen
    return await this.addImage(base64Content);
  }
}
