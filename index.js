import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app=express();

app.use(cors());
app.use(bodyParser.json({limit:'30mb', extended:true }));
app.use('/posts',postRoutes);
app.use(bodyParser.urlencoded({limit:'30mb', extended:true }));



const CONNECTION_URL='mongodb+srv://Dziko:dziko123@cluster0.nrkkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    .then(()=>app.listen(PORT,()=>console.log(`server runnig on port: ${PORT}`)))
    .catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify',false);
