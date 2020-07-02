const mongoose = require('mongoose');

const URI = 'mongodb+srv://user:password@cluster0-tjcrc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI, {useUnifiedTopology: true,  useNewUrlParser: true})
    .then(db=> console.log('DB is connected'))
    .catch(err => console.log(error));

module.exports = mongoose;
