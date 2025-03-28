

### Option 1: using CloudShell (or the AWS CLI)

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/architecture/explore-app#option-1:-using-cloudshell-\(or-the-aws-cli\))

This version requires that you have completed the CloudShell setup steps, otherwise skip ahead to Option Two further ahead.

Execute the following command in the terminal:

```bash
1
aws ssm get-parameter --name '/petstore/petsiteurl'  | jq -r .Parameter.Value
```

[

### Option 2: using the CloudFormation console

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/architecture/explore-app#option-2:-using-the-cloudformation-console)

In the **CloudFormation** console do the following:

1. Select **Stacks** on the left-side navigation.
2. Find the stack named **Services** and click to open it.
3. Select the **Outputs** tab. Your individual pet adoption website URL will be the `PetSiteUrl`, as seen in this image:



![[image-6.png]]![CloudFormation console view showing the location of the pet site URL|525x386](

[

### Next steps

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/architecture/explore-app#next-steps)

Navigate to the URL that was returned as a result. You should see the application home screen as shown below.

![[image-7.png]]![App Home|603x308](

You can navigate through the application as shown below.

![[play-1.gif]]

### Troubleshooting

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/architecture/explore-app#troubleshooting)

In very rare cases, you might encounter a behavior where the site does not show any pet images. Click on `Perform Housekeeping` in the PetSite home page upper right corner.