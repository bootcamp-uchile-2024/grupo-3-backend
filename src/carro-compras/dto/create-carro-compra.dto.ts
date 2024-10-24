import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { GetProductoDto } from 'src/productos/dto/producto/get-producto.dto';

export class CreateCarroCompraDto {
  @ApiProperty({
    name: 'idUsuario',
    description: 'Identificador del usuario',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  idUsuario: number;

  @ApiProperty({
    name: 'productos',
    description: 'Productos del carro de compras',
    type: [GetProductoDto],
  })
  @ValidateNested()
  @Type(() => GetProductoDto)
  @IsOptional()
  productos?: GetProductoDto[];
}
