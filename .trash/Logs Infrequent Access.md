Amazon CloudWatch Logs Infrequent Access (Logs IA) is a log class for cost-effectively consolidating all your logs natively on AWS, helping to improve visibility into your overall application health. CloudWatch Logs IA offers a subset of CloudWatch Logs capabilities including managed ingestion, storage, cross-account log analytics, and encryption with a lower per GB ingestion price, making Logs IA ideal for ad-hoc querying and after-the-fact forensic analysis on infrequently accessed logs. Logs IA supports log querying and analysis using CloudWatch Logs Insights. By consolidating your logs natively in CloudWatch, you can eliminate the operational overhead of managing multiple solutions and reduce your Mean Time to Resolution (MTTR) by analyzing all your logs in one place.

Check the [list of features](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html#Log_Class_Features)  CloudWatch Logs Standard class & Infrequent Access class log group supports.

[

## Creating Logs IA Log Group

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/logsinfrequentaccess#creating-logs-ia-log-group)

To explore Logs IA, in the AWS Management Console, we will create a CloudWatch Log Group with Infrequent Access as the log class.

1. In the AWS Management Console on the Services menu, navigate to `CloudWatch`.
2. Under `Logs`, select `Log Groups` on the left hand side menu and click on **Create Log Group**
3. Provide a name for the new `Log group name`, leave the default value for `Retention setting` as Never expire, select Infrequent Access as `Log class` and hit **Create** at the bottom of the screen.

![[image-9.png]]

Once a log group is created in CloudWatch, its log class cannot be modified.

[

## Ingesting logs into Logs IA log group

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/logsinfrequentaccess#ingesting-logs-into-logs-ia-log-group)

To ingest logs into the Logs IA log group, we will enable `vpc flow logs` for the `Services/Microservices` VPC, however, any logs can be ingested to the CloudWatch Logs IA log group.

As a pre-requisite to [publish vpc flow logs to CloudWatch Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-cwl.html) , you must create an IAM role with a policy that has the required permissions. This policy must include at least the following permissions.


```json
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:DescribeLogGroups",
        "logs:DescribeLogStreams"
      ],
      "Resource": "*"
    }
  ]
}
```

Ensure that the role has the following trust policy, which allows VPC flow logs service to assume the role.

```json
1
2
3
4
5
6
7
8
9
10
11
12
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "vpc-flow-logs.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

1. In the AWS Management Console on the Services menu, navigate to `VPC`
2. Under `Virtual private cloud`, select `Your VPCs` on the left hand side menu.
3. Choose the VPC that is labelled `Services/Microservices` to navigate into the VPC configuration settings and **Create flow log** under the `Actions` drop down on the right top corner.
4. In the next screen, provide a `name` (optional) for the flow log settings, provide the Logs IA log group that was created earlier as the `Destination Log Group`, select the IAM role that was created earlier (as a pre-requisite above). Rest of the settings can be left to the default and hit **Create flow log** button at the bottom.
![[image-10.png]]


Ensure that the role has the following trust policy, which allows VPC flow logs service to assume the role.

```json
1
2
3
4
5
6
7
8
9
10
11
12
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "vpc-flow-logs.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

1. In the AWS Management Console on the Services menu, navigate to `VPC`
2. Under `Virtual private cloud`, select `Your VPCs` on the left hand side menu.
3. Choose the VPC that is labelled `Services/Microservices` to navigate into the VPC configuration settings and **Create flow log** under the `Actions` drop down on the right top corner.
4. In the next screen, provide a `name` (optional) for the flow log settings, provide the Logs IA log group that was created earlier as the `Destination Log Group`, select the IAM role that was created earlier (as a pre-requisite above). Rest of the settings can be left to the default and hit **Create flow log** button at the bottom.

![[image-12.png]])

[

## Querying Logs IA logs through CloudWatch Logs Insights

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/logsinfrequentaccess#querying-logs-ia-logs-through-cloudwatch-logs-insights)

We navigate back to the newly created Logs IA log group where we ingested the VPC flow logs in the previous step.

1. In the AWS Management Console on the Services menu, navigate to `CloudWatch`.
2. Under `Logs`, select `Log Groups` on the left hand side menu and click on newly created Logs IA log group.
3. On the top select View in Log Insights to go to the CloudWatch Logs Insights to query the logs.

![[image-11.png]]

4. Alternatively, in the log group page scroll down to the list of Log streams that are available down below, choose the one that is required for querying by clicking to open the CloudWatch Logs Insights window.

![[image-13.png]]

Once the log stream opens in [CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html) , queries can be run to explore the logs.

Note, logs stored in CloudWatch Logs IA log class log group support all [CloudWatch Logs Insights query commands](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html#CWL_AnalyzeLogData_Classes)  except `pattern`, `diff`, and `unmask`.

![[image-14.png]]


[

## Logs IA Use Cases

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/logsinfrequentaccess#logs-ia-use-cases)

- The Logs IA class is a recommended choice when you have any new workload that doesn’t require advanced features provided by the Standard log class.
- Financial institutions aggregate log data that are critical for compliance purposes or regulatory obligations, however may not be needed for frequent access. CloudWatch Logs IA is ideal for such conditions where log data are mainly needed to be preserved for compliance audits, regulatory checks, or legal investigations.
- Organizations developing software or IT applications generate considerable amounts of logs which are needed for debugging, troubleshooting or code optimization purposes in non-production environments. However, these logs are not accessed frequently and may be required occasionally. CloudWatch Logs IA are cost effective solution suitable for environments like these.
- A variety of devices and systems nowadays produce various patterns of log data, examples like Intrusion Detection System (IDS) logs, Firewall appliance alerts, VPC flow logs, access logs (S3, ELB, Cloudfront, APIGateway, web servers, RDS), debug logs from applications, Internet of Things (IoT) fleet sending detailed logs, these logs are only needed for post-event investigations or after the fact forensic analysis. CloudWatch Logs IA would be a suitable solution to ingest and store these logs and preserve them as long it is required.

[

## Additional References

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/logsinfrequentaccess#additional-references)

1. AWS Blog: [New Amazon CloudWatch log class for infrequent access logs at a reduced price](https://aws.amazon.com/blogs/aws/new-amazon-cloudwatch-log-class-for-infrequent-access-logs-at-a-reduced-price/) 
2. YouTube Video on AWS Official YT Channel: [Leverage Amazon CloudWatch Logs Infrequent Access](https://www.youtube.com/watch?v=eQRKcLifJ-s) 
3. [Amazon CloudWatch Logs User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)