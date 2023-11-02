#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkpracticeStack } from '../lib/cdkpractice-stack';
import { devconfigs } from '../lib/environments/dev';
import { prodconfigs } from '../lib/environments/prod';

const app = new cdk.App();
new CdkpracticeStack(app, 'CdkpracticeStack-dev',devconfigs.accountConfig);
//new CdkpracticeStack(app, 'CdkpracticeStack-prod',prodconfigs.accountConfig);