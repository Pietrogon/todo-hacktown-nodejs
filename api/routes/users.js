module.exports = app => {
  const controller = app.controllers.users;

  app.route('/api/users')
    .get(controller.getListaUsers)
    .push(controller.createUser);
  
  app.route('/api/users/:userId')
    .get(controller.getUser)
    .delete(controller.deleteUser)
    .put(controller.updateUser)
}