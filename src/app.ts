import express from 'express';
import userRoutes from './Routers/RoutersUsers';
import authRoutes from './Routers/RoutersUsers'; 
import dotenv from 'dotenv';


dotenv.config();
const app = express ();

const PORT = 3000;

app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})