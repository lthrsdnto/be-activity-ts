import {
  Table,
  Column,
  DataType,
  Model,
  PrimaryKey,
  HasMany,
  HasOne,
} from "sequelize-typescript";
import Info from "./Info";
import Task from "./Task";

@Table({ tableName: "User" })
export default class User extends Model<User> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id?: Number;
  @Column(DataType.STRING) name?: String;
  @Column(DataType.STRING) work?: String;
  @Column(DataType.BOOLEAN) is_active?: Boolean;

  @HasMany(() => Task)
  task_id: Task[] = [];
  @HasOne(() => Info)
  user_id: Info[] = [];
}
