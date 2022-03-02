import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get('usuario/:username')
    findOne(@Param() parametro) {
      return this.userService.findOne(parametro.username)
    }
}

