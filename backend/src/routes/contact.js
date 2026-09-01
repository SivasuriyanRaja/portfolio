"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const Message_1 = __importDefault(require("../models/Message"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = express_1.default.Router();
// Rate limiting for contact form: max 5 requests per 15 minutes
const contactRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: 'Too many requests, please try again later.' }
});
const contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name is required'),
    email: zod_1.z.string().email('Invalid email address'),
    subject: zod_1.z.string().min(2, 'Subject is required'),
    message: zod_1.z.string().min(10, 'Message must be at least 10 characters'),
    honeypot: zod_1.z.string().max(0).optional() // Should be empty
});
router.post('/', contactRateLimiter, async (req, res) => {
    try {
        // Validate request body
        const data = contactSchema.parse(req.body);
        // Check honeypot
        if (data.honeypot && data.honeypot.length > 0) {
            // Silently reject spam bots
            return res.status(200).json({ message: 'Message sent successfully' });
        }
        // Save message
        const newMessage = new Message_1.default({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ error: error.errors[0].message });
        }
        res.status(500).json({ error: 'Failed to send message' });
    }
});
exports.default = router;
//# sourceMappingURL=contact.js.map