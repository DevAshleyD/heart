const knex = require('../config/knex_config.js');

module.exports = (app) => {
  app.put('/citations/:id', (req, res) => {
    knex('citations')
      .where('id', req.params.id)
      .update(req.body.data, Object.keys(req.body.data))
      .then(citations => res.status(200).send({ citations }))
      .catch(err => res.status(500).send(err));
  });

  app.delete('/citations/:id', (req, res) => {
    knex('citations')
      .where('id', req.params.id)
      .del()
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.get('/citations/:id', (req, res) => {
    knex('citations')
      .where('id', req.params.id)
      .then(citations => res.status(200).send(citations))
      .catch(err => res.status(500).send(err));
  });

  app.get('/citations', (req, res) => {
    knex.select().table('citations')
      .then(citations => res.status(200).send(citations))
      .catch(err => res.status(500).send(err));
  });
};
