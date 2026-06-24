import { Router } from 'express';
import {
    addCandidate,
    getCandidate,
    getAllCandidates,
    updateCandidate,
    deleteCandidate,
} from '../controllers/candidateController.js';
const router = Router();

router.post('/candidates/', addCandidate);
router.get('/candidates/:id', getCandidate);
router.get('/candidates/', getAllCandidates);
router.patch('/candidates/:id', updateCandidate);
router.delete('/candidates/:id', deleteCandidate);

export default router;
