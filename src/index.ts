import { Photo } from "./entity/photo"
import { AppDataSource } from "./data-source"
import { DataSource } from "typeorm"

const initDB = async (db: DataSource) => {
    try {
      await db.initialize();
  
      const photos = [];
  
        const photo = new Photo();
        photo.name = "parents"
        photo.description = " my parents"
        photo.filename = "parents.jpg"
        photo.views = 10000000
        photo.isPublished = true
        photos.push(photo)
  
        await db.manager.save(photos);
        console.log("Photo has been saved. Photo id is", photo.id)

        console.log(`Data saved in ${db.options.type}`);
      } catch (err) {
        console.error(err);
      }
      
      
}

const initialize = async () => {
    await initDB(AppDataSource);

  };
  
initialize();



export { AppDataSource };

