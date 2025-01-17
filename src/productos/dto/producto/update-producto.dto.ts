import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { UpdateAccesorioDto } from '../accesorio/update-accesorio.dto';
import { UpdateInsumoDto } from '../insumo/update-insumo.dto';
import { UpdateMaceteroDto } from '../macetero/update-macetero.dto';
import { UpdatePlantaDto } from '../planta/update-planta.dto';
// export class UpdateProductoDto extends PartialType(CreateProductoDto) {}
export class UpdateProductoDto {
  @ApiProperty({ description: 'SKU del producto', example: 'AGT-001' })
  @IsString()
  @IsOptional()
  SKU?: string;

  @ApiProperty({ description: 'Nombre del producto', example: 'Agatea Verde' })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiProperty({ description: 'ID de la categoría', example: 1 })
  @IsInt()
  @IsOptional()
  idCategoria?: number;

  @ApiProperty({ description: 'Precio del producto', example: 1000 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  precio?: number;

  @ApiProperty({
    description: 'Descripción del producto',
    example: 'Planta de interior',
  })
  @IsString()
  @IsOptional()
  descripcion?: string;

  // @ApiProperty({
  //   description: 'Imagen en base64',
  //   example: 'base64',
  // })
  // @IsOptional()
  // imagen?: string;

  @ApiProperty({ description: 'Cantidad disponible del producto', example: 10 })
  @IsNumber()
  @IsInt()
  @Min(0)
  @IsOptional()
  stock?: number;

  @ApiProperty({ description: 'Unidades vendidas del producto', example: 5 })
  @IsNumber()
  @IsInt()
  @Min(0)
  @IsOptional()
  unidadesVendidas?: number;

  @ApiProperty({
    description: 'Puntuación del producto',
    minimum: 0,
    maximum: 5,
    example: 3,
  })
  @IsNumber()
  @Min(0)
  @Max(5)
  @IsOptional()
  puntuacion?: number;

  @ApiProperty({ description: 'Ancho del producto en cm', example: 10 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  ancho?: number;

  @ApiProperty({ description: 'Alto del producto en cm', example: 20 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  alto?: number;

  @ApiProperty({ description: 'Largo del producto en cm', example: 30 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  largo?: number;

  @ApiProperty({ description: 'Peso del producto en kg', example: 0.5 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  peso?: number;

  @ApiProperty({ description: 'Habilitado', example: true })
  @IsBoolean()
  @IsOptional()
  habilitado?: boolean;

  @ApiProperty({
    description: 'Planta asociada al producto',
    type: UpdatePlantaDto,
  })
  @IsOptional()
  planta?: UpdatePlantaDto;

  // @ApiProperty({
  //   description: 'Macetero asociado al producto',
  //   type: UpdateMaceteroDto,
  // })
  @IsOptional()
  macetero?: UpdateMaceteroDto;

  // @ApiProperty({
  //   description: 'Accesorio asociado al producto',
  //   type: UpdateAccesorioDto,
  // })
  @IsOptional()
  accesorio?: UpdateAccesorioDto;

  // @ApiProperty({
  //   description: 'Insumo asociado al producto',
  //   type: UpdateInsumoDto,
  // })
  @IsOptional()
  insumo?: UpdateInsumoDto;
}
