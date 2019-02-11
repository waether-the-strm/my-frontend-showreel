const fs = require('fs');

const isMethod = (name) => process.argv.find(arg => arg == name);
if (isMethod('--rename'))
  fs.rename('./example.json', './sample.json', (err) => !!err ? console.error(err) : console.log('The file was renamed!'))

else if (isMethod('--create'))
  fs.writeFile('./example.json', '{"hello": "world"}', (err) => !!err ? console.error(err) : console.log('The file was saved!'))
