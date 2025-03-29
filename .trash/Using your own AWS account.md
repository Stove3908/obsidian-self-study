

You will need elevated privileges to run deploy the workshop in your account. If you are using an AWS provided account, you can skip this page.

We recommend using [CloudShell](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/getting-started/prerequisites) to trigger the deployment of the workshop. If you wish to use your own terminal environment, make sure to have necessary permissions.

Simply run these commands to run an AWS CodePipeline deployment and wait a few minutes ☕️

```bash
1
2
3
4
5
6
curl -O https://raw.githubusercontent.com/aws-samples/one-observability-demo/main/codepipeline-stack.yaml

aws cloudformation create-stack --stack-name Observability-Workshop \
  --template-body file://codepipeline-stack.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameters ParameterKey=UserRoleArn,ParameterValue=$(aws iam get-role --role-name $(aws sts get-caller-identity --query Arn --output text | awk -F/ '{print $(NF-1)}') --query Role.Arn --output text) 
```

You can check the deployment's progress in the CodePipeline console at any time. After the deployment is complete, move to the next section to finish the setup.

[

### Troubleshooting

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/getting-started/own-account#troubleshooting)

In case you encounter the following failure during the stack deployment `Quota blocked deployment with "Resource handler returned message: "The maximum number of addresses has been reached. (Service: Ec2, Status Code: 400)"` go to the [EC2 Elastic IPs Service Quotas Page](https://console.aws.amazon.com/servicequotas/home/services/ec2/quotas/L-0263D0A3)  and request an increase to the Elastic IP quota for the account.