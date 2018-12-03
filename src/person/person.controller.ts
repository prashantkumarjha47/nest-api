import { Get, Controller, Post, Put, Delete, Body, Param, Logger } from '@nestjs/common';
import { PersonService } from './person/person.service';
import { PersonDTO } from './person.dto';

@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) { }

    @Get()
    getAllPerson() {
        return this.personService.getAll();
    }

    @Post()
    addNewPerson(@Body() data: PersonDTO) {
        return this.personService.create(data);
    }

    @Get(':id')
    getPersonById(@Param('id') id: Number) {
        return this.personService.getById(id);
    }

    @Put(':id')
    updatePerson(@Param('id') id: Number, @Body() data: Partial<PersonDTO>) {
        return this.personService.update(id, data);
    }

    @Delete(':id')
    destroyPerson(@Param('id') id: Number) {
        return this.personService.remove(id);
    }
}
