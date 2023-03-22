import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from "aws-cdk-lib/aws-s3"
import * as lambda from "aws-cdk-lib/aws-lambda"
import path = require('path');

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new s3.Bucket(this, 'FirstEdgeBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      bucketName:"FirstEdgeBucket"
    });

    new lambda.Function(this,"FirstEdgeFunction",{
      runtime:lambda.Runtime.FROM_IMAGE,
      code:lambda.Code.fromAssetImage(path.join(__dirname,"../../front")),
      handler:lambda.Handler.FROM_IMAGE,
      timeout: cdk.Duration.seconds(30)
    })
  
  }
}
