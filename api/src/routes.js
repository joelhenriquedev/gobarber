import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Joel Henrique',
    email: 'joelhenrique2000@gmail.com',
    password_hash: '209rjsdhas298',
    provider: false,
  });

  return res.json(user);
});

export default routes;
