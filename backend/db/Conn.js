import mongoose from "mongoose";

const Connection = async () => {
    try {
        const DB = await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected");
        console.log(`DB Host: ` + DB.connection.host);
    } catch (error) {
        console.log("Error =", error); 
    }
}

export default Connection

