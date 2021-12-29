const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Erno Vuori',
  authorAddress: 'erno.vuori@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-templates',
  repositoryUrl: 'https://github.com/evuori/aws-cdk-templates.git',
});
project.synth();