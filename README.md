# AWS CDK Templates

A collection of starter templates for AWS CDK App projects, using [Projen](https://github.com/projen/projen/) for project generation and management. 

## Usage

Use this package together with [Projen](https://github.com/projen/projen/) to instantiate a project setup for AWS CDK, using Typescript.

For example:

```bash
npx projen new --from evuori/aws-cdk-templates awscdk-lambda-rest-api
```

## Project types

* [lambda-rest-api](API.md#AwsCdkTsLambdaRestApiApp) - Same as projen bundled **awscdk-app-ts** project type, but includes sample code to deploy a REST Api endpoint using API Gateway + AWS Lambda. Sample code include versions with and without deployment pipeline.
