import * as cdk from 'aws-cdk-lib';
import { S3Stack } from "../lib/s3_stack";

export class MainStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the S3 stack
    const s3Stack = new S3Stack(this, 'S3Stack');

    // Create the Lambda function stack
    //const functionStack = new FunctionStack(this, 'FunctionStack');
  }
}
