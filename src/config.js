export default {
  s3: {
    REGION: "us-west-1",
    BUCKET: "notebase-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://6ks1rdasf5.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_aisOhIfbF",
    APP_CLIENT_ID: "3e8m9a3lknu8c4ao75njq9atns",
    IDENTITY_POOL_ID: "us-west-2:6502b445-72d2-41d7-a78f-815a357fa7bb"
  }
};