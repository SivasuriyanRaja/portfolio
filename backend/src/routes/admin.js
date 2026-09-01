"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Project_1 = __importDefault(require("../models/Project"));
const Message_1 = __importDefault(require("../models/Message"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// Admin Login Route (Simple token check)
router.post('/login', (req, res) => {
    const { secret } = req.body;
    if (secret === process.env.ADMIN_SECRET) {
        res.json({ token: secret });
    }
    else {
        res.status(401).json({ error: 'Invalid admin secret' });
    }
});
// Apply auth middleware to all routes below
router.use(auth_1.adminAuth);
// --- PROJECTS MANAGEMENT ---
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project_1.default.find().sort({ order: 1 });
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});
router.post('/projects', async (req, res) => {
    try {
        const newProject = new Project_1.default(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.put('/projects/:id', async (req, res) => {
    try {
        const project = await Project_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project)
            return res.status(404).json({ error: 'Project not found' });
        res.json(project);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.delete('/projects/:id', async (req, res) => {
    try {
        const project = await Project_1.default.findByIdAndDelete(req.params.id);
        if (!project)
            return res.status(404).json({ error: 'Project not found' });
        res.json({ message: 'Project deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// --- MESSAGES MANAGEMENT ---
router.get('/messages', async (req, res) => {
    try {
        const messages = await Message_1.default.find().sort({ createdAt: -1 });
        res.json(messages);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});
router.put('/messages/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const message = await Message_1.default.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!message)
            return res.status(404).json({ error: 'Message not found' });
        res.json(message);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.delete('/messages/:id', async (req, res) => {
    try {
        const message = await Message_1.default.findByIdAndDelete(req.params.id);
        if (!message)
            return res.status(404).json({ error: 'Message not found' });
        res.json({ message: 'Message deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = router;
//# sourceMappingURL=admin.js.map