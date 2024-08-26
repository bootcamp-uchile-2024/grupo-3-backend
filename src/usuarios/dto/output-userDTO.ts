import { ApiProperty } from "@nestjs/swagger";
import { OutputCarroComprasDto } from "src/carro-compras/dto/output-carro-compras.dto";
import { CarroCompra } from "src/carro-compras/entities/carro-compra.entity";
import { Pedido } from "src/pedidos/entities/pedido.entity";

export class OutputUserDTO {
    public name: string;
    public email: string;
    public carrito: OutputCarroComprasDto;
    public pedido: Pedido;
    constructor(name: string, email: string, carrito: OutputCarroComprasDto, pedido: Pedido) {
        this.name = name;
        this.email = email;
        this.carrito = carrito;
        this.pedido = pedido;
    }
}