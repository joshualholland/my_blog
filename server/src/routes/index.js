import { Router } from 'express';
import blogsRouter from './blogs';
import queriesRouter from './queries';

let router = Router();

router.use('/blogs', blogsRouter);
router.use('/queries', queriesRouter);

export default router;