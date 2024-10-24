// spa.js
import mongoose from 'mongoose';
import {spaSchema} from "../schema/spa.js"

const Spa = mongoose.model('Spa', spaSchema);  // Sử dụng schema để tạo model

export {Spa}
