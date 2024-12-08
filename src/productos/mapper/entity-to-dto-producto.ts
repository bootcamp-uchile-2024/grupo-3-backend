import { UpdateProductCarro } from 'src/carro-compras/dto/update-product-carro';
import { CreateProductoDto } from '../dto/producto/create-producto.dto';
import { GetProductoDto } from '../dto/producto/get-producto.dto';
import { Producto } from '../entities/producto.entity';
import { UpdateProductoDto } from '../dto/producto/update-producto.dto';

export class ProductoMapper {
  static entityToDto(producto: Producto): GetProductoDto {
    const productoDto = new GetProductoDto();
    productoDto.id = producto.id;
    productoDto.SKU = producto.SKU;
    productoDto.nombre = producto.nombre;
    productoDto.idCategoria = producto.categoria.id;
    productoDto.precio = producto.precio;
    productoDto.descripcion = producto.descripcion;
    productoDto.imagen = producto.imagen;
    productoDto.cantidad = producto.cantidad;
    productoDto.unidadesVendidas = producto.unidadesVendidas;
    productoDto.puntuacion = producto.puntuacion;
    productoDto.ancho = producto.ancho;
    productoDto.alto = producto.alto;
    productoDto.largo = producto.largo;
    productoDto.peso = producto.peso;
    productoDto.habilitado = producto.habilitado;

    if (producto.categoria) {
      productoDto.categoria = {
        id: producto.categoria.id,
        categoria: producto.categoria.categoria,
      };
      if (producto.planta) {
        productoDto.planta = {
          idProducto: producto.planta.idProducto,
          petFriendly: producto.planta.petFriendly,
          toleranciaTemperatura: producto.planta.toleranciaTemperatura,
          ciclo: producto.planta.ciclo,
          altura: producto.planta.altura,
          idEspecie: producto.planta.idEspecie,
          idColor: producto.planta.idColor,
          idFotoperiodo: producto.planta.idFotoperiodo,
          idTipoRiego: producto.planta.idTipoRiego,
          idHabitoCrecimiento: producto.planta.idHabitoCrecimiento,
          habitoCrecimiento: producto.planta.habitoCrecimiento.crecimiento,
          especie: producto.planta.especie.especie,
          color: producto.planta.color.color,
          fotoPeriodo: producto.planta.fotoPeriodo.tipoFotoperiodo,
          tipoRiego: producto.planta.tipoRiego.tipoRiego,
        };
      }
    }
    if (producto.macetero) {
      productoDto.macetero = {
        idProducto: producto.macetero.idProducto,
        idMarca: producto.macetero.idMarca,
        idTipoMacetero: producto.macetero.idTipoMacetero,
        material: producto.macetero.material,
        forma: producto.macetero.forma,
        diametro: producto.macetero.diametro,
        litros: producto.macetero.litros,
        marca: producto.macetero.marca.nombre,
        tipoMacetero: producto.macetero.tipoMacetero.tipo,
      };
    }
    if (producto.accesorio) {
      productoDto.accesorio = {
        idProducto: producto.accesorio.idProducto,
        idMarca: producto.accesorio.idMarca,
        idTipoAccesorio: producto.accesorio.idTipoAccesorio,
        idColor: producto.accesorio.idColor,
        marca: producto.accesorio.marca.nombre,
        tipoAccesorio: producto.accesorio.tipoAccesorio.tipo,
        color: producto.accesorio.color.color,
      };
    }
    if (producto.insumo) {
      productoDto.insumo = {
        idProducto: producto.insumo.idProducto,
        idTipoInsumo: producto.insumo.idTipoInsumo,
        idMarca: producto.insumo.idMarca,
        tipoInsumo: producto.insumo.tipoInsumo.tipoInsumo,
        marca: producto.insumo.marca.nombre,
      };
    }
    return productoDto;
  }

  static DtoToProducto(
    productoDto: CreateProductoDto | UpdateProductoDto,
  ): Producto {
    const producto = new Producto();
    producto.SKU = productoDto.SKU;
    producto.nombre = productoDto.nombre;
    producto.precio = productoDto.precio;
    producto.descripcion = productoDto.descripcion;
    producto.idCategoria = productoDto.idCategoria;
    // producto.imagen = productoDto.imagen;
    producto.cantidad = productoDto.cantidad;
    producto.unidadesVendidas = productoDto.unidadesVendidas;
    producto.puntuacion = productoDto.puntuacion;
    producto.ancho = productoDto.ancho;
    producto.alto = productoDto.alto;
    producto.largo = productoDto.largo;
    producto.peso = productoDto.peso;
    producto.habilitado = productoDto.habilitado;
    return producto;
  }
}
