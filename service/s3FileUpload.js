import AWS from 'aws-sdk'
const s3 = new AWS.S3();

import {globals as G} from '../infra/lib/globals';

export async function handler(event) {
  const params = {
    Bucket: G.s3_bucketName,
    Key: "example-file.txt",
    Body: "Hello, world!",
  };

  try {
    await s3.upload(params).promise();
    return {
      statusCode: 200,
      body: "File uploaded successfully!",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "Error uploading file",
    };
  }
}
