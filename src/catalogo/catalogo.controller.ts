import { Controller, Get, Param, Res, Query } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, query, response } from 'express';
import { ProductoSalidaDto } from 'src/productos/dto/producto-salida.dto';
@ApiTags('Catálogo')
@Controller('catalogo')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) { }

  /**Historia de Usuario 12: Visualización del catálogo*/

  //Entrega la descripción de la épica visualización

  //obtener todos los productos del catálogo
  @ApiResponse({
    status: 200,
    description: 'Retorna todos los productos del catálogo',
    type: ProductoSalidaDto,
  })
  @ApiResponse({ status: 404, description: 'No se encontraron los productos' })
  @ApiOperation({ summary: 'Obtener todos los productos del catálogo' })
  @Get()
  findAll() {

    return this.catalogoService.findAll();
  }


  //obtener productos mas vendidos del catálogo
  @ApiResponse({
    status: 200,
    description: 'Retorna los productos más vendidos',
    type: ProductoSalidaDto
  })
  @ApiResponse({
    status: 404,
    description: 'Productos más vendidos no encontrados',
  })
  @ApiOperation({ summary: 'Obtener los productos más vendidos' })
  @Get('mas-vendidos')
  findBestSellers() {
    return this.catalogoService.findBestSellers();
  }


  //obtener productos por puntuacion
  @ApiResponse({
    status: 200,
    description: 'Retorna los productos con la puntuación especificada',
    type: ProductoSalidaDto
  })
  @ApiResponse({
    status: 404,
    description: 'Productos con la puntuación especificada no encontrados',
  })
  @ApiOperation({ summary: 'Obtener productos por puntuación' })
  @ApiParam({
    name: 'puntuacion',
    description: 'Puntuación del producto en una escala del 1 al 10',
    example: 5,
  })
  @Get('puntuacion/:puntuacion')
  findByRating(@Param('puntuacion') puntuacion: number) {
    return this.catalogoService.findByRating(puntuacion);
  }


  //obtener recomendados por historial\
  @ApiResponse({
    status: 200,
    description: 'Retorna los productos recomendados para el id entregado',
    type: ProductoSalidaDto
  })
  @ApiResponse({
    status: 404,
    description: 'Productos recomendados no encontrados',
  })
  @ApiOperation({ summary: 'Obtener productos recomendados por id usuario' })
  @ApiParam({
    name: 'id',
    description: 'Identificador del usuario',
    example: 1,
  })
  @Get('recomendados/:id')
  findRecommended(@Param('id') id: number) {
    return this.catalogoService.findRecommended(id);
  }


  //filtrar productos por cota de precios\
  @ApiOperation({ summary: 'Obtener productos por rango de precios' })
  @ApiResponse({
    status: 200,
    description: 'Retorna los productos dentro del rango de precios',
    type: ProductoSalidaDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Rangos de precios no válidos',
  })
  @Get('filtro-precio')
  filterbyPrice(@Query('minPrice') minPrice: number, @Query('maxPrice') maxPrice: number, @Res() res) {
    const min = +minPrice
    const max = +maxPrice
    const result = this.catalogoService.filterByPrice(min, max);
    if (result) {
      res.status(200).send('Filtro por precio aplicado')
    } else {
      res.status(404).send('rango de precios no válido')
    }
  }
}
