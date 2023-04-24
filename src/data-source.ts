import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "./entity/photo";

export const AppDataSource = new DataSource({
  type: "sqlite",
  // host: "localhost",
  // port:  3306,
  // username: "root",
  // password: "test",
  database: "..\db.sqlite",
  entities: [Photo],
  synchronize: true,
  logging: false,
});

