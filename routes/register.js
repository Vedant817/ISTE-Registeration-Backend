import {Router} from 'express';
import ReckonRegistration from '../controllers/reckon.controller.js'

const router = Router();

router.route('/reckon').post(ReckonRegistration);

export default router;