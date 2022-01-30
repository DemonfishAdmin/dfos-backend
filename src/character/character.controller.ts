import {
	Controller,
	Get,
	Req,
	Post,
	HttpCode,
	Param,
	Body,
} from '@nestjs/common';
import { Request } from 'express';
import { CharacterDTO } from '../dto/CharacterDTO';

@Controller('character')
export class CharacterController {
	@Post()
	create(@Body() characterDto: CharacterDTO) {
		return `This action adds a new character called ${characterDto.name}`;
	}

	@Get()
	findAll(@Req() request: Request): string {
		return 'This action returns all characters';
	}

	@Get(':id')
	findOne(@Param() params): string {
		return `This action returns a character with id: ${params.id}`;
	}
}
