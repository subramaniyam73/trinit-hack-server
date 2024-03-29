import express from 'express';
import cors from 'cors';
import authRouter from './routers/authRouter';

const app = express();

app.use(express.json());

app.use(cors());

app.use(authRouter);

app.listen(process.env.PORT || 4000, () =>
  console.log(`Server running at port ${process.env.PORT || 4000}\nOrz`)
);
