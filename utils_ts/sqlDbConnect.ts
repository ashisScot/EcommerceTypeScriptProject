import { sqldbPoolConfig } from "../config/dbconfig";
import { DBPersistence } from "./DBPersistence";

export class sqlDBConnect implements DBPersistence{
     async getDataFromDB(query:string,whereParams:any[]){
        try{
        const[rows]=await sqldbPoolConfig.query(query,whereParams);
        return rows; 
    }catch(err){
        console.error('Error connecting to the database:', err);
    }
    finally{
        await sqldbPoolConfig.end();
    }
    
}
}
//async function createDbConnection(){
  //  try{
//         const[rows] = await sqldbPoolConfig.query('select * from films;');
//         console.log('Query results:', rows);

//         for (let films of rows as any){
//             console.log(`Film Name:${films.name}`)

//         }
//         await sqldbPoolConfig.end();
//     }
//     catch(err){
//         console.error('Error connecting to the database:', err);
//     }
// }
// createDbConnection();
