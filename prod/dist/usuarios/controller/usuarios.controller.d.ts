import { UsuariosService } from '../service/usuarios.service';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateCarroCompraDto } from 'src/carro-compras/dto/update-carro-compra.dto';
import { CreatePedidoDto } from 'src/pedidos/dto/create-pedido.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): any;
    findOne(id: number): any;
    createUser(usuario: CreateUsuarioDto): any;
    updateOne(id: number, usuario: UpdateUsuarioDto): string;
    deleteOne(id: number): {
        mensaje: string;
    };
    updateCarro(idUsuario: number, carro: UpdateCarroCompraDto): UpdateCarroCompraDto;
    addPedido(pedido: CreatePedidoDto, idUsuario: number): string;
    findPedidos(idUsuario: number): string;
    updateMedioPago(idUsuario: number, medioPago: string): string;
}
