import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class GetInsumoDto {
  @ApiProperty({
    example: 1,
    description: 'Identificador del producto',
  })
  @IsInt()
  idProducto: number;

  @ApiProperty({
    example: 1,
    description: 'identificador del tipo insumo',
  })
  @IsInt()
  idTipoInsumo: number;

  @ApiProperty({
    example: 1,
    description: 'Identificador de la marca',
  })
  @IsInt()
  idMarca: number;

  // relaciones
  @ApiProperty({ description: 'Tipo de insumo' })
  tipoInsumo: string;
  @ApiProperty({ description: 'Marca' })
  marca: string;
}
