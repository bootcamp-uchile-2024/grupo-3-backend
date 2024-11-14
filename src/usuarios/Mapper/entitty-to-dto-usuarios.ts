import { Usuario } from '../entities/usuario.entity';
import { OutputUserDTO } from '../dto/output-userDTO';

export function toOutputUserDTO(usuario: Usuario): OutputUserDTO {
  return {
    id: usuario.id,
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    nombreUsuario: usuario.nombreUsuario,
    email: usuario.email,
    telefono: usuario.telefono,
    genero: usuario.genero,
    rut: usuario.rut,
    fechaNacimiento: usuario.fechaNacimiento,
    tipoUsuario: usuario.tipoUsuario.tipo,
    direcciones: usuario.direccion?.map((dir) => {
      const direccionCompleta = `${dir.calle}, ${dir.numero}, ${dir.comuna}`;
      return dir.departamento
        ? `${direccionCompleta}, Depto ${dir.departamento}`
        : direccionCompleta;
    }),
  };
}