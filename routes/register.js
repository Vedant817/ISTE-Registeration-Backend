import {Router} from 'express';
import ReckonRegistration from '../controllers/reckon.controller.js';
import CircuitrixRegistration from '../controllers/circuitrix.controller.js';
import BuzzingaRegistration from '../controllers/buzzinga.controller.js';
import FallacyRegistration from '../controllers/fallacy.controller.js';

const router = Router();

//Register API format : /register/event_name
router.route('/reckon').post(ReckonRegistration);
router.route('/circuitrix').post(CircuitrixRegistration);
router.route('/buzzinga').post(BuzzingaRegistration);
router.route('/fallacy').post(FallacyRegistration);

export default router;