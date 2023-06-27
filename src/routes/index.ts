import { Router } from 'express';

import users from './users.route';

const router = Router();

router.use('/users', users);

export default router;
