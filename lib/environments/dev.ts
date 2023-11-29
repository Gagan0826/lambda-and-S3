import { Envconfigs } from "./env-interfaces";

export const devconfigs: Envconfigs = {
    accountConfig: {
      env: {
        account: "663839140840",
        region: "ap-south-1",
        
        
      },
      stackName: "development-stack-for-lambda-S3",
    },
    resourceConfigs: {
      envName: "dev-env",
      S3bucketId:"s3-for-dev",
      S3BucketName: "s3-for-data-transfer-from-lambda",
      LambdaId:"lambda-for-dev",
      LambdaName: "lambda-for-s3-data-transfer",
    },
  };