import * as cdk from "aws-cdk-lib";
import {Construct} from 'constructs';
import * as s3 from "@aws-cdk/aws-s3";

export class S3Stack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket
    this.bucket = new s3.Bucket(this, "MyBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Change this in production
    });
  }
}
