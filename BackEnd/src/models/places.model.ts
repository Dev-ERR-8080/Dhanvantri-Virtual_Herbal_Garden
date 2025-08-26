import { Schema, model } from "mongoose";

export interface Places {
    scientificName: string;
    commonNames: string[];
    family: string;
    usdaHardiness: string;
    knownHazards: string;
    habitats: string;
    range: string[];
    edibilityRating: string;
    medicinalRating: string;
    care: string;
    physicalCharacteristics: string;
    synonyms: string[];
    plantHabitats: string;
    edibleUses: string;
    medicinalUses: string;
    otherUses: string;
    plantPropagation: string;
    nativeRange: string;
    weedPotential: string;
    ImgUrl:string;
}

export const PlacesSchema = new Schema<Places>(
    {
        scientificName: { type: String, required: true },
        commonNames: { type: [String], required: true },
        family: { type: String, required: true },
        usdaHardiness: { type: String, required: true },
        knownHazards: { type: String, required: true },
        habitats: { type: String, required: true },
        range: { type: [String], required: true },
        edibilityRating: { type: String, required: true },
        medicinalRating: { type: String, required: true },
        care: { type: String, required: true },
        physicalCharacteristics: { type: String, required: true },
        synonyms: { type: [String], required: true },
        plantHabitats: { type: String, required: true },
        edibleUses: { type: String, required: true },
        medicinalUses: { type: String, required: true },
        otherUses: { type: String, required: true },
        plantPropagation: { type: String, required: true },
        nativeRange: { type: String, required: true },
        weedPotential: { type: String, required: true },
        ImgUrl :{type:String}
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

export const PlacesModel = model<Places>('places', PlacesSchema);
