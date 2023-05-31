import {app} from "./app.js";
import { connectDB } from "./data/database.js";

// connecting database
connectDB();



app.listen(process.env.PORT,()=>{
    console.log("Server is working");
});