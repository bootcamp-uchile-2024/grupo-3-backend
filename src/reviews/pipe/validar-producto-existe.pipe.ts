import {
    ArgumentMetadata,
    Injectable,
    NotFoundException,
    PipeTransform
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { Repository } from 'typeorm';

/**Comprueba si un producto existe según su id */
@Injectable()
export class ValidarProductoExistePipe implements PipeTransform {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) { }

    async transform(value: any, metadata: ArgumentMetadata) {
        const productoExiste: boolean = await this.productoRepository.existsBy({ id: value })
        if (!productoExiste) {
            throw new NotFoundException(
                `No existe un producto con ID ${value}`,
            );
        }
        return value;
    }
}