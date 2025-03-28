Using log transformation and enrichment, you can normalize all your logs into a consistent and context-rich format during ingestion into CloudWatch Logs. You can add structure to your logs by using pre-configured templates for common AWS services such as AWS WAF and Amazon Route 53, or build custom transformers with native parsers such as Grok. You can also rename existing attributes and add additional metadata to your logs such as account ID, and Region.

Log transformation simplifies and shortens your log queries across applications and makes it easier to create alerts based on your logs. This feature provides transformation for common log types with out-of-the-box transformation templates for major AWS log sources like VPC Flow logs, Route 53, and Amazon RDS for PostgreSQL. You can use pre-configured transformation templates or create custom transformers to suit your needs.

Log transformation helps you manage logs emitted from various sources that vary widely in format and attribute names.

What data will we use?

This module uses logs generated by the PetSite application. While you can use your own log data, the format and query logic will differ. If you are using an AWS account provided to you as part of an organized event, this will already be set up for you. Otherwise, see [getting started with your own AWS account](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/getting-started/own-account) for instructions to deploy the PetSite application.

---

A `log transformer` consists of one or more processors arranged in a logical pipeline. Processors are applied to log events sequentially in the order specified in the transformer configuration

[

## Review the unstructured logs

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/#review-the-unstructured-logs)

Before you create a new `log transformer` to transform the unstructured logs to JSON, let's review sample logs for the `/ecs/PetListAdoptions` log group. Navigate to the AWS Management Console and follow these steps:

1. In the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs groups**.
3. In the **Filter log groups** bar, enter `/ecs/PetListAdoptions` and select the log group.
4. Select the latest log stream named similarly to `logs/container/2d98a67e80334d6883e84634c2fb9bfe`.
5. In the **Log events**, expand a sample log event to see the unstructured format.
	![Example unstructured log|561x184](![[image-15.png]]
[

## Create a new log transformer for the Petlist Adoptions log group

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/#create-a-new-log-transformer-for-the-petlist-adoptions-log-group)
1. In the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs groups**.
3. In the **Filter log groups** bar, enter `/ecs/PetListAdoptions` and select the log group.
4. Choose the **Transformer** tab.
5. Choose **Create transformer**.
6. On the **Manage transformer** page, perform the following steps:
	1. For **Choose a parser**, leave the default value **Grok** selected.
	2. For **Source**, leave the default value `@message`.
	3. For **Match**, enter `%{WORD:http_method} %{NOTSPACE:request} HTTP/%{NUMBER:http_version} %{HOSTPORT:ip} %{NUMBER:response_status}`.
	For more information about all supported processors and their syntax, see [Processors that you can use](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html).
7. Optionally, for **Transformation preview - optional**, enter in the following sample log:`GET /health/status HTTP/1.1 11.0.30.179:58782 200`.
8. Choose **Test transformer** to see the transformed log.
	```json
	{
	  "http_method": "GET",
	  "request": "/health/status",
	  "http_version": "1.1",
	  "ip": "11.0.30.179:58782",
	  "PORT": "58782",
	  "response_status": "200"
	}
	```
9. Choose **Save**.

![[image-17.png]]

Optionally, continue to the next section to create a `log transformer` for a log group for the [AWS X-Ray daemon](https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html).

[

## Create a log transformer for the AWS X-Ray daemon

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/setup/#create-a-log-transformer-for-the-aws-x-ray-daemon)

Below are example log events for the AWS X-Ray daemon in the log group `/ecs/PayForAdoption`.

```
2025-01-21T16:26:59Z [Info] Initializing AWS X-Ray daemon 3.3.4
2025-01-21T16:26:59Z [Info] Using buffer memory limit of 38 MB
2025-01-21T16:26:59Z [Info] Starting proxy http server on 0.0.0.0:2000
2025-01-21T16:27:00Z [Info] Successfully sent batch of 1 segments (0.049 seconds)
```

1. In the AWS Management Console on the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs groups**.
3. In the **Filter log groups** bar, enter `/ecs/PayForAdoption` and select the log group.
4. Choose the **Transformer** tab.
5. Choose **Create transformer**.
6. On the **Manage transformer** page, perform the following steps:
	1. For **Choose a parser**, leave the default value **Grok** selected.
	2. For **Source**, leave the default value `@message`.
	3. For **Match**, enter `%{TIMESTAMP_ISO8601:timestamp} [%{LOGLEVEL:logLevel}] %{GREEDYDATA:msg}`.
	For more information about all supported processors and their syntax, see [Processors that you can use](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html).
7. Optionally, for **Transformation preview - optional**, enter in the following sample log:`2025-01-21T16:27:00Z [Info] Successfully sent batch of 1 segments (0.049 seconds)`.
8. Choose **Test transformer** to see the transformed log.
	```json
	{
	  "timestamp": "2025-01-21T16:27:00Z",
	  "logLevel": "Info",
	  "msg": "Successfully sent batch of 1 segments (0.049 seconds)"
	}
	```
9. Choose **Save**.

![[image-18.png]]![Second example of creating a grok transformer|596x422](

[Learn more about this logs transformation...](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html)