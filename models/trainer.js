// trainer.js
import mongoose from 'mongoose';
import {trainerSchema} from "../schema/trainer.js"

const Trainer = mongoose.model('Trainer', trainerSchema);  // Sử dụng schema để tạo model

export {Trainer}
