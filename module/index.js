'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
    this.log('You called the Hottowel subgenerator with the argument ' + this.name + '.');
    this.capitalModuleName = _.capitalize(this.name);
    this.camelModuleName = _.camelCase(this.name);
  },
  writing: function () {
      this.template('_module.controller.js', 'src/client/app/'  + this.camelModuleName + '/' + this.camelModuleName + '.controller.js');
      this.template('_module.controller.spec.js', 'src/client/app/'  + this.camelModuleName + '/' + this.camelModuleName + '.controller.spec.js');
      this.template('_module.module.js', 'src/client/app/'  + this.camelModuleName + '/' + this.camelModuleName + '.module.js');
      this.template('_module.route.js', 'src/client/app/'  + this.camelModuleName + '/' + this.camelModuleName + '.route.js');
      this.template('_module.route.spec.js', 'src/client/app/'  + this.camelModuleName + '/' + this.camelModuleName + '.route.spec.js');
      this.template('_module.html', 'src/client/app/'  + this.camelModuleName + '/' + this.camelModuleName + '.html');
  },
  addModuleToAppJs: function () {
        var hook = ']);',
            path = 'src/client/app/app.module.js',
            insert = ",'" + 'app' + "." + this.camelModuleName + "'\n";
        var file = this.readFileAsString(path);
        if (file.indexOf(insert) === -1) {
            this.write(path, file.replace(hook, insert + hook));
        }
    }
});
