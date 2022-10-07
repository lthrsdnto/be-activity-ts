import { Table, Column, DataType, Model, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript'
import User from './User'

@Table({ tableName: 'Task' })
export default class Task extends Model<Task> {
    @PrimaryKey
    @Column(DataType.INTEGER) id?: Number;
    @Column(DataType.STRING) todo?: String;
    @Column(DataType.STRING) name?: String;
    @Column(DataType.STRING) schedule?: String;
    @Column(DataType.BOOLEAN) is_active?: Boolean;


    @BelongsTo(() => User)
    user?: User;
    @ForeignKey(() => User)
    @Column(DataType.INTEGER) task_id?: Number;

}

  
