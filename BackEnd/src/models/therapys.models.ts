import { Schema, model } from "mongoose";

export interface Therapy {
    title: string;
    description: string;
    benefits: string[];
    application: string;
}

const TherapySchema = new Schema<Therapy>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        benefits: { type: [String], required: true },
        application: { type: String, required: true }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);

export const TherapyModel = model<Therapy>('Therapy', TherapySchema);
