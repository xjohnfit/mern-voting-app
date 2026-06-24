import { Router } from 'express';
import {
    addElection,
    getAllElections,
    getElectionById,
    deleteElection,
    updateElection,
    getCandidatesByElectionId,
    getVotersByElectionId,
} from '../controllers/electionControllers.js';

const router = Router();

router.post('/elections', addElection);
router.get('/all-elections', getAllElections);
router.get('/elections/:id', getElectionById);
router.delete('/elections/:id', deleteElection);
router.patch('/elections/:id', updateElection);
router.get('/elections/:id/candidates', getCandidatesByElectionId);
router.get('/elections/:id/voters', getVotersByElectionId);

export default router;
