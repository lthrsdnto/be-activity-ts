import { Table, Column, DataType, Model, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript'
import User from './User'


@Table({ tableName: 'Info' })
export default class Info extends Model<Info> {

    @PrimaryKey
    @Column(DataType.INTEGER) id?: Number;
    @Column(DataType.STRING) location?: String;
    @Column(DataType.STRING) email?: String;
    @Column(DataType.STRING) hobbies?: String;
  

    @BelongsTo(() => User)
    user?: User;
    @ForeignKey(() => User)
    @Column(DataType.INTEGER) user_id?: Number;

    
}   

  
