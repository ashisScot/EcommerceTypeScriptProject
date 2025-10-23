//import { createConnection, Connection } from "mysql2";
import mysql from "mysql2/promise";

export const sqldbPoolConfig =mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'ecommerce_products',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    maxIdle: 10,
    idleTimeout: 10000,

})

