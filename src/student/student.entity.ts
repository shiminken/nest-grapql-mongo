import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {

  @ObjectIdColumn()
  _id: string;

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

}
