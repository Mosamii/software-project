import {Router} from 'express';

import department from '../models/department.js';
import subject from '../models/subject.js';
import { creat, create, index, show, store } from './controller/subject.js';
import { type } from 'os';

const router = new Router();

router.get('/' , index);
router.get('/create' , create);

router.post('/' , store);

router.get('/:id,',show);


export default router;





