import {Construct} from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as core from 'aws-cdk-lib/core';

import {globals as G} from './globals';

const bucketName = G.s3_bucketName;
export class S3Stack extends core.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: core.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket
    this.bucket = new s3.Bucket(this, bucketName, {
      removalPolicy: core.RemovalPolicy.DESTROY, // Only for demo purposes, use proper policies in production
    });
  }
}
