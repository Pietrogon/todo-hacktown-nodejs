module.exports = app => {
  const db = require('sqlite-sync');

  db.connect('../database.db');

  const users = {};

  users.getListaUsers = (req, res) => {
    res.status(200).json(db.run('select * from users'));
  }

  users.getUser = (req, res) => {
    var user = req.body;
    res.status(200).json(db.run('select ' + id));
  }

  users.deleteUser = (req, res) => {
    var user = req.body;
    res.status(200).json(db.run('delete ' + user.id));
  }

  users.updateUser = (req, res) => {
    var user = req.body;
    res.status(200).json(db.run('update ' + user.id + user));
  }

  return users;
}