import express from 'express';

const app = express()
app.get('/',(req,res) =>
    res.send('Hello world')
)

app.listen(5001,() => {
    console.log('server lisening on port 5001')
})