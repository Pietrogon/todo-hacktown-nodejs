module.exports = app => {
  const db = require('../../config/sqlite.js')

  const exemplo = {};

  exemplo.getListaUsers = (req, res) => {
    res.status(200).json(db.run('select all'));
  }

  exemplo.getUser = (req, res) => {
    var user = req.body;
    res.status(200).json(db.run('select ' + id));
  }

  exemplo.deleteUser = (req, res) => {
    var user = req.body;
    res.status(200).json(db.run('delete ' + user.id));
  }

  exemplo.updateUser = (req, res) => {
    var user = req.body;
    res.status(200).json(db.run('update ' + user.id + user));
  }

  return exemplo;
}