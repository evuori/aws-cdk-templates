const { cdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new cdk.JsiiProject({
  author: 'Erno Vuori',
  authorAddress: 'erno.vuori@gmail.com',
  defaultReleaseBranch: 'main',
  name: '@rocktemplates/aws-cdk-templates',
  repositoryUrl: 'https://github.com/evuori/aws-cdk-templates.git',
  description: 'Collection of awesome project types for setting up AWS CDK-based apps with Typescript',
  npmAccess: NpmAccess.PUBLIC,
  peerDeps: [
    'projen',
  ],
  keywords: [
    'aws',
    'cdk',
    'projen',
    'typescript',
  ],
});
project.synth();