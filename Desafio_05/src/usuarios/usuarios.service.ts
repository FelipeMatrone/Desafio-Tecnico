import { BadRequestException, Injectable } from '@nestjs/common';
import type { CriarUsuarioDto } from './dto/criar-usuario.dto.js';
import type { Usuario } from './usuario.interface.js';

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    { id: 1, name: 'Ana', email: 'ana@email.com' },
    { id: 2, name: 'Pedro', email: 'pedro@email.com' },
  ];

  private proximoId = 3;

  listar(): Usuario[] {
    return this.usuarios;
  }

  criar(dados: CriarUsuarioDto): Usuario {
    if (
      typeof dados?.name !== 'string' ||
      typeof dados?.email !== 'string' ||
      !dados.name.trim() ||
      !dados.email.trim()
    ) {
      throw new BadRequestException('Informe name e email como textos não vazios.');
    }

    const usuario: Usuario = {
      id: this.proximoId++,
      name: dados.name.trim(),
      email: dados.email.trim(),
    };

    this.usuarios.push(usuario);
    return usuario;
  }
}
