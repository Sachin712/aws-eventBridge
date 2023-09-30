import * as cdk from "aws-cdk-lib";

import { S3Stack } from "../lib/s3_stack";
import { FunctionStack } from "../lib/function_stack";

const app = new cdk.App();

export var s3Stack: any;
export var functionStack: any;

// Create the S3 stack
s3Stack = new S3Stack(app, "S3Stack");

// Create the Lambda function stack
functionStack = new FunctionStack(app, "FunctionStack");
