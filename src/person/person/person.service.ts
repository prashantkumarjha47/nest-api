import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PersonEntity } from '../person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonDTO } from '../person.dto';

@Injectable()
export class PersonService {
    constructor(@InjectRepository(PersonEntity) private personRepository: Repository<PersonEntity>) { }

    async getAll() {
        return await this.personRepository.find();
    }

    async create(data: PersonDTO) {
        const person = await this.personRepository.create(data);
        await this.personRepository.save(person);
        return person
    }

    async getById(id: Number) {
        return await this.personRepository.findOne({ where: { id } })
    }

    async update(id: Number, data: Partial<PersonDTO>) {
        await this.personRepository.update({ id }, data);
        return await this.personRepository.findOne({ where: { id } })
    }

    async remove(id: Number) {
        await this.personRepository.delete({ id })
        return { deleted: true }
    }
}
