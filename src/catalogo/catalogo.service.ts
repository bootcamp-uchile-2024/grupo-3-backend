import { Injectable } from '@nestjs/common';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';

@Injectable()
export class CatalogoService {
  
  findAll() {
    return `visualizacion de catalogo de productos`;
  }
}
