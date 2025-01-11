import { Schema, model } from 'mongoose';

//schema
const urlSchema = new Schema(
    {
        shortUrlId:{
            type:String,
            required:true,
            unique:true,
        },
        redirecturl:{
            type:String,
            required:true,
        },
        visitedHist:[{
            Timestamp:{type:Number,
            default:Date.now()

            },
        }]

    },{timestamps:true}
)

const URL = new model("url",urlSchema);

export default URL;
