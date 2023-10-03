import * as cdk from "aws-cdk-lib/core";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export class FunctionStack extends cdk.Stack {
  public readonly lambdaFunction: lambda.Function;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const lambdaRoleArn = `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:user/main_user`;
    // const existingRole = iam.Role.fromRoleArn(
    //   this,
    //   "ExistingRole",
    //   lambdaRoleArn
    // );

    //Create an IAM role for the Lambda function
    const lambdaRole = new iam.Role(this, "LambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });

    //policy added
    lambdaRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess")
    );

    // Attach necessary permissions to the Lambda role (e.g., S3 access)
    // You can customize this based on your function's requirements

    // Create the Lambda function
    this.lambdaFunction = new lambda.Function(this, "MyLambdaFunction", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "s3FileUpload.handler", // Update with your Lambda handler
      code: lambda.Code.fromAsset("../../service"), // Assuming your Lambda code is in a 'service' directory
      role: lambdaRole,
    });
  }
}
