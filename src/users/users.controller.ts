import { Controller, Get, Param } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get('usuario/:username')
    findOne(@Param() parametro) {
      return this.userService.findOne(parametro.username)
    }
}

