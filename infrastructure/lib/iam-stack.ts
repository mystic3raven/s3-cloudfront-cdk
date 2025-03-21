import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class IamStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const role = new iam.Role(this, 'CloudFrontS3Role', {
            assumedBy: new iam.ServicePrincipal('cloudfront.amazonaws.com'),
            managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3FullAccess')]
        });

        new cdk.CfnOutput(this, 'IAMRoleARN', { value: role.roleArn });
    }
}
