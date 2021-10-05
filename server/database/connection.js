import mongoose from "mongoose";

export default async () => {
  return mongoose.connect(process.env.MONGO_URL,{
    
  });
};
