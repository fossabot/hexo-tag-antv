var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var filePath = path.join(__dirname, 'antv-template.html');

function createAntV(args, content_data, content_options) {
    var template = fs.readFileSync(filePath).toString(),
        data = [],
        options = {};

    if (content_data.length) {
        var data = content_data;
    }
    if (content_options.length) {
        var options = content_options;
    }

    return _.template(template)({
        id: 'antv' + ((Math.random() * 9999) | 0),
        height: args[0] || 400,
        width: args[1] || '85%',
        data: data,
        option: options,
    });
}

hexo.extend.tag.register('antv', createAntV, {
    async: true,
    ends: true
});