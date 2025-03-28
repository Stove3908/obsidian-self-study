---
title: "Navigating the Interface"
source: "https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/navigating"
author:
published:
created: 2025-03-28
description: "Discover and participate in AWS workshops and GameDays"
tags:
  - "clippings"
---
Before learning the query language, let's take a few moments to understand the Logs Insights console and the features available to us, like automatic field discovery, sample queries, saved queries, and query history.

[

## Automatic field discovery

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#automatic-field-discovery)

CloudWatch can automatically discover fields from your log data.

1. In the AWS Management Console on the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs Insights**.
3. Select the log group called `/ecs/PetListAdoptions` from the **Select log group(s)** drop down.

A sample query is automatically placed in the query field.

![[Pasted image 20250328180504.png]]

CloudWatch Logs Insights offers two powerful alternative query options: [OpenSearch PPL](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_PPL.html) and [OpenSearch SQL](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData_SQL.html) tabs. These features extend Amazon OpenSearch's query capabilities to your log analysis workflow. The Pipe Processing Language (PPL) enables you to construct queries using familiar Unix-style pipe syntax, while the SQL option lets you query your logs using standard SQL commands—similar to how you would query a traditional database. Note that at present, these query capabilities are exclusively available for Standard class logs. These tools provide flexible ways to analyze and extract insights from your log data, making it easier to work with familiar query languages.

Navigate to the tab OpenSearch PPL and you will see that a query example automatically placed in the query field.

![[Pasted image 20250328180540.png]]

Navigate to the OpenSearch SQL tab and click on **Browse log groups**. From the list, filter for `/ecs/PetListAdoptions` and then click **Insert in editor at cursor**. A sample query will automatically appear in the query field.

![[Pasted image 20250328180548.png]]

4. Click **Run query**.
5. In the right menu, click **Discovered fields**.

You will see a list of fields that were discovered by CloudWatch automatically as shown below.

![[Pasted image 20250328180623.png]]
Fields that start with @

Fields that begin with an "@" are fields that [CloudWatch automatically generates](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html). The `@message` field contains the raw unparsed log event.

This allows you to pick and include the fields that you want to use in the query using auto-completion.

![Logs Insights autocompletion](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/discovery-fields-auto-complete-01.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

These fields are automatically discovered because the logs are in JSON format.

JSON format

JSON format is a great choice for Log data as CloudWatch supports auto discover of JSON fields, which you can then easily use in your queries on log data. You can read more at [Fields in JSON logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html).

[

## Field Indexes in CloudWatch Logs

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#field-indexes-in-cloudwatch-logs)

[Field indexes and index policies](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html) in CloudWatch Logs optimize search performance across large volumes of log data by pre-indexing specific fields, allowing queries to skip irrelevant log events. To maximize their effectiveness, you should index frequently queried fields and those with high cardinality. When writing queries, use filterIndex instead of filter for better performance, and remember that indexes are case-sensitive when matching field names.

In the Discovery Fields section of the right menu, you'll find petid and pettype listed as indexed fields with a value of 1. These discovered fields are automatically indexed by CloudWatch Logs, enabling faster and more efficient queries when filtering or searching through your log data.

![Logs Insights indexes](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/log-indexes.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

Note

For OpenSearch PPL and SQL when querying CloudWatch Logs, there is no direct equivalent to the filterIndex command. The field indexing feature is specific to CloudWatch Logs Query Language and is not available when using OpenSearch PPL or SQL syntax.

[

## Sample queries

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#sample-queries)

Logs Insights also provides sample queries for you to easily get started with.

1. In the right menu, click **Saved and sample queries**.

You will see a list of sample queries sorted into categories such as service or frequency of use.

Select a query and click **Apply** on the query you are interested in. The query will be loaded for you, and you can choose to **Run query**.

> Note: This query might not return any results for the log group(s) you have currently selected as it assumes the underlying data format.

![Logs Insights sample queries](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/queries-01.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

[

## Saved queries

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#saved-queries)

You can save queries in Logs Insights for later access. Simply click the **Save** button on the interface and provide a name. You can also optionally provide a custom name for the folder.

1. Copy and paste the following query into the query editor.
1. Click on **Run query** to see that it returns results.
2. Click the **Save** button underneath the query editor.
3. Enter `Sample1` for **Query name**.
4. Select **Save**.

![Logs Insights saved queries](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/save-new-query-01.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

> Note: You can also organise the queries similar to a directory structure using the option "Folder" from above.

1. In the right navigation menu, click **Saved and sample queries**.

You should now have a query called `Sample1` listed under **Saved queries**.

![Logs Insights save query successfully](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/saved-query-01.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

[

## Saved queries Actions

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#saved-queries-actions)
1. For better managing the queries, there are several actions that can be performed from the interface. As can be found from below GIF, options such as `Save as`, `Edit`, `Delete`, `Reset` can be found by clicking on `Actions`.

![Logs Insights saved query actions](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/query-actions-01.gif?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

For example, from Edit option, query can be modified further or added to a relevant folder.

[

## Query History

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#query-history)
1. Click the **History** button underneath the query editor.

Here you can view the history of all executed queries. You will be able to see queries executed by the logged in user whether they are saved queries or not. As can be seen from GIF below, there are two ways to run query from history.

The first method is to select the query and click `Apply` from the `Actions`. You can then click on \`Run query' to run. This way, you will get an option to make any changes to the query before running the query.

Another way to run from queries from history is to select the query and then click `Run` to run the query directly without having the click the `Run query` button.

![Logs Insights query history](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/query-history.gif?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

[

## Query Help

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#query-help)
1. See the GIF below for details on how additional information or commands can be found for building the queries for getting logs insights.

![Logs Insights query help](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/logsinsights/query-commands.gif?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)