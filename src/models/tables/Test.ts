import {
  Table,
  Column,
  DataType,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
} from "sequelize-typescript";

@Table({ tableName: "Test" })
export default class Test extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id?: Number;
  @Column(DataType.STRING) name?: String;
  @Column(DataType.STRING) test_data?: String;
  @CreatedAt createdAt?: Date;
  @UpdatedAt updatedAt?: Date;
}
