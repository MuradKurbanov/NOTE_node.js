const HelloWorld = get('/', function (req, res) {
  console.log('Hello World!');
  res.send('Hello World!');
});

modules.export = HelloWorld;
