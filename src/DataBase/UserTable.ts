import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, VersionColumn } from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string
    @Column()
    mobile: string
    @Column()
    wallet: string

    @VersionColumn()
    version: number;
}