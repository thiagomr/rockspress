const http = require('http');

http.createServer((req, res) => {
    res.write('done!');
    res.write('\n');
    res.end();
}).listen(8000, () => console.log('server listen at 8000'));
