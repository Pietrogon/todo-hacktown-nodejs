module.exports = () => {

  const db = require('sqlite-sync');

  db.connect('../../database.db');

  return db;

}