---
title: "Creating field indexes"
source: "https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/createfieldindex"
author:
published:
created: 2025-03-28
description: "Discover and participate in AWS workshops and GameDays"
tags:
  - "clippings"
---
You can create field indexes of fields in your log events for efficient equality-based searches. When you then use a field index in a CloudWatch Logs Insights query, the query attempts to skip processing log events that are known to not include the indexed field. This reduces the scan volume of your queries that use field indexes, making it possible to return results faster. This can help you quickly search petabytes of total logs across thousands of log groups, and hone in on relevant logs faster. Good fields to index are fields that you often need to query for. Fields that have high cardinality of values are also good candidates for field indexes because a query using these field indexes will complete faster because it limits the log events that are being matched to the target value.

For example, suppose you have created a field index for `requestId`. Then, any CloudWatch Logs Insights query on that log group that includes `requestId = value` or `requestId IN [value, value, ...]` will attempt to process only the log events that are known to contain that indexed field and the queried value, and that CloudWatch Logs has detected a value for that field in the past.

[Learn more about this topic...](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html)

[

## Query the logs without a field index

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#query-the-logs-without-a-field-index)

To see the improvement in performance of a `field index`, we will first use Log Insights to search for logs related to the Kubernetes service name **aws-load-balancer-webhook-service**.

1. In the AWS Management Console on the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs Insights**.
3. For **Select log groups by**, select **All log groups** from the drop-down menu.
4. In the query field, remove the existing default query and copy-paste the following:
	```sql
	1
	2
	3
	4
	fields @timestamp, @message, @logStream, @log
	| filter kubernetes.service_name like "aws-load-balancer-webhook-service"
	| sort @timestamp desc
	| limit 10000
	```
5. Choose **Run query**.

This will run a CloudWatch log query against all log groups and search for logs related to the Kubernetes service name like **aws-load-balancer-webhook-service**. In the **Logs** section, you can see the performance of the query and logs discovered by the query.

![[Pasted image 20250328193552.png]]

In the example screenshot above, **212,522 records (188.5 MB)** were scanned in **3.1s** with **413 records** matched.

Optionally, repeat the same query except change **Select log groups by** to **Log group name** and for **Selection criteria**, enter `/aws/containerinsights/PetSite/performance`.
![[Pasted image 20250328193614.png]]

In the example screenshot above, **70,992 records (63.8 MB)** were scanned in **1.2s** with **410 records** matched. Let's now create a `field index` for the Kubernetes service name for the log group `/aws/containerinsights/PetSite/performance` to see the difference in query performance.

[

## Create a log-group level field index policy

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#create-a-log-group-level-field-index-policy)
1. In the AWS Management Console on the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs groups**.
3. In the **Filter log groups** bar, enter `/aws/containerinsights/PetSite/performance` and select the log group.
4. Choose the **Field indexes** tab.
5. Choose **Create field indexes**.
6. On the **Field Indexes** page, perform the following steps:
	1. For **Field Index Details**, choose **Add field path**.
	2. For **Field path**, enter `kubernetes.service_name`.
	For more information about field index syntax, see [Field index syntax and quotas](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing-Syntax.html).
7. Choose **Save**.

![[Pasted image 20250328193653.png]]

On the **Log group details** page for the log group **/aws/containerinsights/PetSite/performance**, you should now see the new log group field indexes created.

![[Pasted image 20250328193708.png]]

After a brief period, refresh the page to see new events that are now indexed by the log group field indexes.

![[Pasted image 20250328193720.png]]

[

## Query the logs using the field index policy

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#query-the-logs-using-the-field-index-policy)

Now that the log group `/aws/containerinsights/PetSite/performance` is being indexed by `kubernetes.service_name`, let's re-run the Log Insights query to see the difference in query performance.

1. In the AWS Management Console on the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs Insights**.
3. For **Select log groups by**, select **All log groups** from the drop-down menu.
4. In the query field, remove the existing default query and copy-paste the following:
	```sql
	1
	2
	3
	4
	fields @timestamp, @message, @logStream, @log
	| filter kubernetes.service_name = "aws-load-balancer-webhook-service"
	| sort @timestamp desc
	| limit 10000
	```
5. Choose **Run query**.

This will run a CloudWatch log query against all log groups and search for logs related to the Kubernetes service name like **aws-load-balancer-webhook-service**. In the **Logs** section, you can see the performance of the query and logs discovered by the query.

![[Pasted image 20250328193731.png]]

In the example screenshot above, **217,161 records (192.7 MB)** were scanned in **3.2s** with **412 records** matched.

Did you know?

You can select the information option next to ***Powered by field indexes*** to see the estimated records skipped by using field indexes. ![[Pasted image 20250328193751.png]]

Optionally, repeat the same query except change **Select log groups by** to **Log group name** and for **Selection criteria**, enter `/aws/containerinsights/PetSite/performance`.
![[Pasted image 20250328193815.png]]

In the example screenshot above, **71,082 records (63.8 MB)** were scanned in **1.4s** with **413 records** matched.

Finally, repeat the same query except change the query to only search field indexes by changing `filter` to `filterIndex`:

```sql
1

2

3

4

fields @timestamp, @message, @logStream, @log
| filterIndex kubernetes.service_name = "aws-load-balancer-webhook-service"
| sort @timestamp desc
| limit 10000
```

![[Pasted image 20250328193827.png]]

In the example screenshot above, CloudWatch Log Insights queried only records indexed by the field `kubernetes.service_name` resulting in **12,286 records (11.6 MB)** scanned in **1.4s** with **100 records** matched. By using the `field index`, we reduced the records scanned by approximately **181.1 MB** or a reduction of records scanned by **95%**!