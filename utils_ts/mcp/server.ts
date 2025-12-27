//create object of MCP server class
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { DBVerificationDetails } from "..//DBVerificationDetails";
import {StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";



//create the name of MCP server and its version
const server = new McpServer(
   {
    name: "ECommerceMCPServer",
    version: "1.0.0"
   } 
);

let dBVerificationDetails= new DBVerificationDetails();
//Zod in typescript is a schema declaration and validation library
//Tools concept,
server.registerTool(
    "getProductTool",{
        description:"Get the product details based on order id",
        inputSchema:{
            orderId:z.string().min(1)
        },
        outputSchema: z.object(),

    },
    async({orderId})=>{
       const orderData= await dBVerificationDetails.getOrderDetailsFromDB(orderId);
       if(!orderData){
        return {
            content:[{type:"text",text:`No order found for the given order id ${orderId}`}],
            isError:true
        };
       }
       return {
        content:[{type:"text",text:JSON.stringify(orderData)}], //as auser I want to see like text so LLM send this as a text
        structuredContent: orderData as any //this is a structured content if the LLM wants to use it for further tooling processing 
       }
    }
);
//we have instantiated the server and registered the tool
//now we need to connect the server with the transport protocol
//StdioServerTransport is a transport protocol that uses standard input and output to communicate with the MCP client
//MCP client is the LLM model that we are using to interact with the server
//we will use async function to connect the server with the transport protocol  
//start communication with the client
(async() =>{
   const transport= new StdioServerTransport(); //we are sending the data through this transport protocol connecting the server object
   //with mcp client, this mcp client is the LLM model
   await server.connect(transport);
   //we are using server with this communication channel and it will take care about informing the client
})(); // In javaScript/typescript, an immediately invoked function expression (IIFE) is a function that runs as soon as it is defined.
//this is useful when we want to run some code that needs to be executed immediately without polluting the global scope.