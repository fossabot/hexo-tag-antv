var fs = require('fs'),
path = require('path'),
_ = require('underscore');

var filePath = path.join(__dirname, 'antv-template.html');

function createantv(args, content) {
var template = fs.readFileSync(filePath).toString(),
    options = {};

if (content.length) {
    var options = content;
}

return _.template(template)({
    id: 'antv' + ((Math.random() * 9999) | 0),
    height: args[0] || 300,
    options: options,
});
}

hexo.extend.tag.register('antv', createantv, {
async: true,
ends: true
});