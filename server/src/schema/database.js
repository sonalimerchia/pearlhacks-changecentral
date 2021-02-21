let mongoose = require('mongoose');

const server = 'localhost'; // REPLACE WITH YOUR DB SERVER
const database = 'myFirstDatabase';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}?authSource=admin`)
       .then(() => {
         console.log('Database connection successful');
       })
       .catch(err => {
         console.error('Database connection error');
         console.log('error:', err);
       })
  }
}

module.exports = new Database();