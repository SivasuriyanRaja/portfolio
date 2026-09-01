import express from 'express';
import { z } from 'zod';
import Message from '../models/Message';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for contact form: max 5 requests per 15 minutes
const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5,
  message: { error: 'Too many requests, please try again later.' }
});

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0).optional() // Should be empty
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
    const newMessage = new Message({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    });

    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const msg = error.issues[0]?.message ?? 'Validation error';
      return res.status(400).json({ error: msg });
    }
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;
