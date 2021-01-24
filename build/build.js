const fs = require('fs');
const path = require('path');

const less = require('less');

run();

function run() {
  const input = fs.readFileSync(
    path.resolve(__dirname, '../src/ui.less'),
    'utf8'
  );
  less.render(input, function(error, res) {
    if (error) {
      throw error;
    }
    fs.writeFileSync(
      path.resolve(__dirname, '../lib/ui.css'),
      res.css
    );
    fs.writeFileSync(
      path.resolve(__dirname, '../lib/reset.css'),
      fs.readFileSync(path.resolve(__dirname, '../src/reset.css'))
    );
  })
}