module.exports = app => {
  const controller = app.controllers.exemplo;

  app.route('/api/exemplo')
    .get(controller.getListaUsers());
}