import * as cdk from 'aws-cdk-lib'
export interface Envconfigs{
    accountConfig : cdk.StackProps;
    resourceConfigs : ResourceConfigs;
}
interface ResourceConfigs{
    envName:string;
    S3BucketName:string;
    LambdaName:string;
}