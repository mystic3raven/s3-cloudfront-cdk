#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3Stack } from '../lib/s3-stack';
import { CloudFrontStack } from '../lib/cloudfront-stack';
import { IamStack } from '../lib/iam-stack';
import { VpcStack } from '../lib/vpc-stack';

const app = new cdk.App();
const s3Stack = new S3Stack(app, 'S3Stack');
const cloudFrontStack = new CloudFrontStack(app, 'CloudFrontStack', { bucket: s3Stack.bucket });
const iamStack = new IamStack(app, 'IAMStack');
const vpcStack = new VpcStack(app, 'VpcStack');
