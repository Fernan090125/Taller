const mongoose = require("mongoose");

const mongose_uri = 'mongodb://localhost/TallerL'
//const mongose_uri ="mongodb+srv://root:1005661451@dialogflowcluster.fsiuc.mongodb.net/Taller?retryWrites=true&w=majority";
mongoose
  .connect(mongose_uri, {
    useNewUrlParser: true,
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
