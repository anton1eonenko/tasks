import { DataSource } from 'typeorm';
import {AppDataSource} from './data-source';

const dropDatabase = async (db: DataSource) => {
  try {
    await db.initialize();
    await db.dropDatabase();
    await db.destroy();
  } catch (err) {
    console.error(err);
  }
};

const dropAllDatabases = async () => {
  await dropDatabase(AppDataSource);};

dropAllDatabases();