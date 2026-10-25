import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criar-usuario.dto.js';
import { UsuariosService } from './usuarios.service.js';
import type { Usuario } from './usuario.interface.js';

@Controller('users')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  listar(): Usuario[] {
    return this.usuariosService.listar();
  }

  @Post()
  criar(@Body() dados: CriarUsuarioDto): Usuario {
    return this.usuariosService.criar(dados);
  }
}
