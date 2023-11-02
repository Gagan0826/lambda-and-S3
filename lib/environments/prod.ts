import { Envconfigs } from "./env-interfaces";

export const prodconfigs:Envconfigs={
    accountConfig:{
        env:{
            account:'663839140840',
            region:'ap-south-1'
        },
        stackName:"production-stack-for-lambda-S3"
    },
    resourceConfigs:{
        envName:"prod-env",
        S3bucketId:"s3-for-prod",
        S3BucketName:"s3-for-data-transfer-from-lambda",
        LambdaId:"lambda-for-prod",
        LambdaName:"lambda-for-s3-data-transfer"
    }
}