module.exports = app => {
  const controller = app.controllers.users;

  app.route('/api/users')
    .get(controller.getListaUsers);
}