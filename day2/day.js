const express = require('express')
const {URLSearchParams} = require('url');

const qs = new URLSearchParams({
  name: "Tomii?"
});

// const qs = new URLSearchParams();
// qs.set('name', 'Tomii?');

const app = express();

// const allowedIps = ['localhost', '127.0.0.1', '::1', '::ffff:127.0.0.1'];

const generateQueryString = (params) => {
  const qs = new URLSearchParams(params);
  `${qs}`.replace(/\+/g, '%20')
}

app.get('/', (req, ) => {
  // if(allowedIps.includes(req.ip)) {
  //   console.log('witam pana kierownika');
  // } else {
  //   console.log('sio');
  // }
  const { url, originalUrl, path} = req
  console.log(req.ips)
  console.log(req.method)
  console.log({url, originalUrl, path})
  console.log('rozkodowany url', req.query)
  console.log(req.get('cookie'))
  console.log('siema')
})
app.listen(3000)


//-[[[[[[[[[[[[[[[
// console.log(`http://localhost:3000/${qs.toString()}`)

