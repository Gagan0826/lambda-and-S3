import * as cdk from 'aws-cdk-lib'
export interface Envconfigs{
    accountConfig : cdk.StackProps;
    resourceConfigs : ResourceConfigs;
}
interface ResourceConfigs{
    envName:string;
    S3bucketId:string;
    S3BucketName:string;
    LambdaId:string
    LambdaName:string;
}