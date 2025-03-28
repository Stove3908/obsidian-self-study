[[Logs Infrequent Access]]

Many AWS services, such as Lambda, VPC flow logs can directly ingest logs into CloudWatch which you can query using [Logs Insights](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights). However, for your applications running on AWS (EC2, EKS or ECS) or from outside of AWS, your logs need to be collected and ingested into CloudWatch.

The best way to ingest logs into CloudWatch is using the CloudWatch Agent. There are many other tools that are also effective such as FluentBit and OpenTelemetry.

In this section, we will explore preparation steps you take do to make ingestion, logs debugging, and later querying, more effective, such as:

- Infrequent Access
- Transformation and Enrichment
- Live tail