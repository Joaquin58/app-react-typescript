import { Model, Column, Table, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from "sequelize";
// import { ForeignKey as foreignKey } from 'sequelize';
import { Role } from './Role';
@Table
export class User extends Model<User>{
    @Column
    name!: string;

    @Column
    lastName!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @ForeignKey(() => Role)
    @Column({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    })
    roleId!: string;

    @BelongsTo(() => Role)
    role!: Role;
}