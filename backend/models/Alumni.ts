import mongoose, { Schema, Document } from 'mongoose';

export interface IAlumni extends Document {
    name: string;
    email: string;
    specialization: string;
    careerPath: string;
    currentStatus: string;
}

const AlumniSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
    careerPath: { type: String, required: true },
    currentStatus: { type: String, required: true },
});

export const Alumni = mongoose.model<IAlumni>('Alumni', AlumniSchema);
