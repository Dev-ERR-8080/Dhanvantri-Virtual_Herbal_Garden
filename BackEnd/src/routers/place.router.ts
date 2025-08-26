import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { PlacesModel } from '../models/places.model';
import { Sample_Plces } from "../data";

const router = Router();

// Seed route to populate the database with initial data
router.get("/seed", expressAsyncHandler(
  async (req, res) => {
    const placesCount = await PlacesModel.countDocuments();
    if (placesCount > 0) {
      res.send("Seed is already done");
      return;
    }

    await PlacesModel.create(Sample_Plces); // Create the initial places data
    res.send("Seed is done");
  }
));

// Get all places
router.get("/", expressAsyncHandler(
  async (req, res) => {
    const places = await PlacesModel.find();
    res.send(places);
  }
));

// Search places by search term
router.get("/search/:searchTerm", expressAsyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const filteredPlaces = await PlacesModel.find({
      $or: [
        { scientificName: { $regex: searchRegex } }, // Search in scientificName
        { commonNames: { $regex: searchRegex } },    // Search in commonNames
        { family: { $regex: searchRegex } }          // Search in family
      ]
    });
    res.send(filteredPlaces);
  }
));

// Get place by scientificName
router.get("/:scientificName", expressAsyncHandler(async (req, res) => {
  
  const place = await PlacesModel.findOne({ scientificName: req.params.scientificName });
  if (!place) {
    res.status(404).send({ message: 'Place not found' });
  } else {
    res.send(place);
  }
}));






export default router;
