const mongoose = require('mongoose');

const mongose_uri = 'mongodb://localhost/TallerL'

mongoose.connect(mongose_uri,{
    useNewUrlParser: true,  
})
  .then(db => console.log('Database is connected'))
  .catch(err => console.log(err));

