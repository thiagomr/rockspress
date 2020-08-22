/**
 * ------------------------------------------------------------------------------
 *  Server with express framwork
 */

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('main');
});

app.get('/ping', (req, res) => {
    return res.status(200).send('pong');
});

app.post('/send', (req, res) => {
    console.log('request body', req.body);

    return res.status(200).send('sent');
});

app.get('/error', (req, res) => {
    return res.status(500).send('error');
});

app.listen(8000, () => console.log('listen at 8000'));


/**
 * ------------------------------------------------------------------------------
 *  Server with custom framework
 */

const rockspress = require('./rockspress');

rockspress.get('/', (req, res) => {
    return res.status(200).send('main');
});

rockspress.get('/ping', (req, res) => {
    return res.status(500).send('pong');
});

rockspress.post('/send', (req, res) => {
    console.log('request body', req.body);

    return res.status(500).send('sent');
});

rockspress.get('/error', (req, res) => {
    return res.status(500).send('error');
});

rockspress.listen(8001, () => console.log('listen at 8001'));
