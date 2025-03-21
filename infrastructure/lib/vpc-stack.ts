import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class VpcStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'VPC', { maxAzs: 2 });

        new ec2.GatewayVpcEndpoint(this, 'S3VpcEndpoint', {
            vpc,
            service: ec2.GatewayVpcEndpointAwsService.S3
        });

        new cdk.CfnOutput(this, 'VpcID', { value: vpc.vpcId });
    }
}
