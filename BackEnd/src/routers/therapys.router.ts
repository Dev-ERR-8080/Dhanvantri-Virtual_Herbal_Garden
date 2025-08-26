import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { TherapyModel } from '../models/therapys.models'; // Assuming you have this model
import { HTTP_BAD_REQUEST } from '../constant/http_status';

const router = Router();



// Endpoint for retrieving all Therapys information
router.get('/', expressAsyncHandler(async (req, res) => {
    try {
        // Fetch all Therapys from the database
        const therapys = await TherapyModel.find({});
        res.status(200).json(therapys); // Send data as JSON response
    } catch (error) {
        console.error('Error fetching Therapys:', error);
        res.status(500).send('Internal server error');
    }
}));

export default router;
