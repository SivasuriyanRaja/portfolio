import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<IProject, {}, {}, {}, Document<unknown, {}, IProject, {}, mongoose.DefaultSchemaOptions> & IProject & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProject>;
export default _default;
//# sourceMappingURL=Project.d.ts.map