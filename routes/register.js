import {Router} from 'express';
import ReckonRegistration from '../controllers/reckon.controller.js';
import CircuitrixRegistration from '../controllers/circuitrix.controller.js';
import BuzzingaRegistration from '../controllers/buzzinga.controller.js';

const router = Router();

router.route('/reckon').post(ReckonRegistration);
router.route('/circuitrix').post(CircuitrixRegistration);
router.route('/buzzinga').post(BuzzingaRegistration);

export default router;