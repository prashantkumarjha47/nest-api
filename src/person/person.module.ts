import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonService } from './person/person.service';
import { PersonController } from './person.controller';
import { PersonEntity } from './person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule { }
