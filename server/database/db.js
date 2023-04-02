import mongoose from "mongoose"




const Connection = async (username, password)=>{
  const URL = `mongodb://${username}:${password}@ac-48cl9pz-shard-00-00.1jrtrhi.mongodb.net:27017,ac-48cl9pz-shard-00-01.1jrtrhi.mongodb.net:27017,ac-48cl9pz-shard-00-02.1jrtrhi.mongodb.net:27017/CRUD-APP?ssl=true&replicaSet=atlas-oeston-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
     mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true,useMongoClient:true});
    console.log('Database connected successfully');
  }catch(error){
    console.log('Error while connecting with the database', error);

  }
}

export default Connection;