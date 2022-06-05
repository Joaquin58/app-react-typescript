import { Model, Table, Column, CreatedAt, UpdatedAt, HasMany, DataType } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { User } from "./User";

@Table
export class Role extends Model {
    @Column({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    })
    id!: string
    @Column
    name!: string

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @HasMany(() => User)
    users!: User[];
}