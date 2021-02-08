const request = require('dns');

const arguments = process.argv.slice(2);
const [domain] = arguments;

request.resolve4(domain, function(err, addresses) {
  if(err) throw err;
  console.log(`Hospedagem: ${addresses}`);
})

request.resolveNs(domain,function(err, addresses) {
  if(err) throw err;
  console.log(`Ns: ${addresses}`);
})

request.resolveMx(domain,function(err, addresses) {
  if(err) throw err;
  console.log(`E-mails: ${addresses[0].exchange}`);
})