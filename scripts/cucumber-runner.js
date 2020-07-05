#!/usr/bin/env node
var child_process = require("child_process");
var config_file =  "../conf/" + (process.env.CONFIG_FILE || "single") + ".conf.js";
var config = require(config_file).config;

process.argv[0] = "node";
process.argv[1] = "./node_modules/.bin/cucumber-js";

const getValidJson = function(jenkinsInput) {
  let json = jenkinsInput;
  json = json.replace(/\\n/g, "");
  json = json.replace('\\/g', '');
  return json;
};

let lt_browsers = null;
if(process.env.LT_BROWSERS) {
  let jsonInput = getValidJson(process.env.LT_BROWSERS);
  lt_browsers = JSON.parse(jsonInput);
}

for (var i in lt_browsers || config.capabilities) {
  var env = Object.create(process.env);
  env.TASK_ID = i.toString();
  var p = child_process.spawn("/usr/bin/env", process.argv, { env: env });
  p.stdout.pipe(process.stdout);
}
