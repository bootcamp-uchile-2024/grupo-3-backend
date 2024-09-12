import { Injectable } from '@nestjs/common';

import { CarroCompra } from 'src/carro-compras/entities/carro-compra.entity';
import { tipoPago } from '../entities/pago.enum';
import { tipoDespacho } from '../entities/despacho.enum';
import { estadoPedido } from '../entities/estado.enum';
import { OutputPedidoDto } from '../dto/output-pedido.dto';
import { UpdatePedidoDto } from '../dto/update-pedido.dto';

const PedidoSalidaEjemplo: OutputPedidoDto = new OutputPedidoDto(
  1,
  estadoPedido.PAGADO,
  tipoDespacho.RETIRO,
  tipoPago.MERCADOPAGO,
  new CarroCompra(1, 1, [], 0),
);
PedidoSalidaEjemplo.id = 1;

@Injectable()
export class PedidosService {
  //servicio Crear Pedido
  create() {
    // let pedido: Pedido = new Pedido();
    // return pedido;
    return { mensaje: 'Pedido creado' };
  }
  //entrega todos los pedidos
  findAll(): OutputPedidoDto[] {
    return [PedidoSalidaEjemplo];
  }
  //entrega pedidos por id
  findOne(id: number): OutputPedidoDto {
    return PedidoSalidaEjemplo;
  }

  //modificar un pedido
  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    // return new Pedido;
    return { mensaje: 'Pedido modificado' };
  }
}