import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  order: number;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  projectUrl: { type: String, required: false },
  sourceUrl: { type: String, required: false },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, {
  timestamps: true
});

export default mongoose.model<IProject>('Project', ProjectSchema);
