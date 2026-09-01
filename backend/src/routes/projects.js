"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Project_1 = __importDefault(require("../models/Project"));
const router = express_1.default.Router();
// GET all public projects (usually featured or ordered)
router.get('/', async (req, res) => {
    try {
        const projects = await Project_1.default.find().sort({ order: 1 });
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});
// GET a single project by slug
router.get('/:slug', async (req, res) => {
    try {
        const project = await Project_1.default.findOne({ slug: req.params.slug });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch project' });
    }
});
exports.default = router;
//# sourceMappingURL=projects.js.map