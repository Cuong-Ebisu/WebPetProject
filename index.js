import app from './app.js'
import { ConnectDB } from './mongoose.js';
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running on port ${PORT}`);
});
