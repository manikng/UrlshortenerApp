import { connect } from 'mongoose';

async function mongoDbConnection(url) {
    try {
        await connect(url);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database", error);
    }
}

export default mongoDbConnection;