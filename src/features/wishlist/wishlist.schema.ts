import mongoose, { Schema } from 'mongoose';
import { Products } from '../products/products.entity';

export const wishlistSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true,
            ref: 'users'
        },
        products: [
            {
                type: String,
                ref: 'products',
                unique: true,
                required: true
            }
        ]
    },
    {
        timestamps: true
    }
);