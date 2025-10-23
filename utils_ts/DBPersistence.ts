export interface DBPersistence{
    getDataFromDB(query?:any, params?:any[]):any;
}