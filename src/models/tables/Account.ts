import { Table, Column, DataType, Model, PrimaryKey } from 'sequelize-typescript'

@Table({tableName: 'Account'})
export default class Account extends Model<Account>{
    @PrimaryKey
    @Column(DataType.INTEGER) id?: Number;
    @Column(DataType.STRING) username?: String;
    @Column(DataType.STRING) password?: String;
    @Column(DataType.BOOLEAN) is_active?: Boolean; 
}