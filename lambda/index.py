import os
import boto3

s3 = boto3.client('s3')

def handler(event, context):
    bucket_name = 'lamdabuckettest1220'
    key = 'test-file.txt'

    s3.upload_file(key, bucket_name, key)
    return 'File uploaded to S3'
