import { ApiProperty } from '@nestjs/swagger';
import { CarroCompra } from 'src/carro-compras/entities/carros.entity';
import { estadoPedido } from '../entities/estado_pedido.entity';
import { tipoDespacho } from '../entities/tipo_despacho.entity';
import { tipoPago } from '../entities/pago.enum';

export class OutputPedidoDto {
  @ApiProperty({ example: 1 })
  public id: number;

  @ApiProperty({ example: 1 })
  public idUsuario: number;

  @ApiProperty({ example: new Date() })
  public fechaCreacion: Date;

  @ApiProperty({ example: estadoPedido.CONFIRMADO })
  public estado: estadoPedido;

  @ApiProperty({ example: tipoDespacho.RETIRO })
  public tipoDespacho: tipoDespacho;

  @ApiProperty({ example: tipoPago.MERCADOPAGO })
  public tipoPago: tipoPago;

  @ApiProperty({})
  public carrito: CarroCompra;

  @ApiProperty({ example: new Date() })
  public fechaEntrega: Date;

  constructor(
    idUsuario: number,
    estado: estadoPedido,
    tipoDespacho: tipoDespacho,
    tipoPago: tipoPago,
    carrito: CarroCompra,
  ) {
    this.id = 0;
    this.idUsuario = idUsuario;
    this.fechaCreacion = new Date();
    this.estado = estado;
    this.tipoDespacho = tipoDespacho;
    this.tipoPago = tipoPago;
    this.carrito = carrito;
    this.fechaEntrega = new Date();
  }
}
