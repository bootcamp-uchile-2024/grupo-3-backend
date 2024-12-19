import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarroComprasModule } from 'src/carro-compras/carro-compras.module';
import { PedidosController } from './controller/pedidos.controller';
import { EstadoPedido } from './entities/estado_pedido.entity';
import { Pedido } from './entities/pedido.entity';
import { TipoDespacho } from './entities/tipo_despacho.entity';
import { PedidosService } from './service/pedidos.service';
import { ProductoPedido } from './entities/productos_pedido.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { DireccionEnvio } from './entities/direccion-envio.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Producto, EstadoPedido, TipoDespacho, ProductoPedido, Usuario, DireccionEnvio]), CarroComprasModule],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule { }
