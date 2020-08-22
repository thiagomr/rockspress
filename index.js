
const rockspress = require('./rockspress');

rockspress.get('/', (req, res) => {
    return res.status(200).send('main');
});

rockspress.get('/ping', (req, res) => {
    return res.status(200).send('pong');
});

rockspress.post('/send', (req, res) => {
    console.log('request body', req.body);

    return res.status(200).send('sent');
});

rockspress.get('/error', (req, res) => {
    return res.status(500).send('error');
});

rockspress.listen(8000, () => console.log('listen at 8000'));
