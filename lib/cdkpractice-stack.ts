import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs';
import { Envconfigs } from './environments/env-interfaces';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkpracticeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: Envconfigs) {
    super(scope, id, props?.accountConfig);


    const bucket = new s3.Bucket(this,'mys3',{
      bucketName:"lamdabuckettest1220",
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY});

      const LambdaFunction= new lambda.Function(this,'lambdas3test',{
        runtime:lambda.Runtime.PYTHON_3_10,
        code:lambda.Code.fromAsset('lambda'),
        handler:"index.handler"
      })
      bucket.grantReadWrite(LambdaFunction)
      
  }
}
