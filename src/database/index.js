import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://pathwayJobs:ezbH9Trc4deLiV4p@cluster0.euq4zn2.mongodb.net/";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Database Is Connected"))
    .catch((error) => console.log(error));
};

export default connectToDB;
