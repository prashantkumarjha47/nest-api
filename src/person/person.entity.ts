import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('personDetails')
export class PersonEntity {

    @PrimaryGeneratedColumn('increment') id: Number;
    @Column('text') name: string;
    @Column('text') age: Number;
    @Column('datetime') dateOfBirth: Date;
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;
}