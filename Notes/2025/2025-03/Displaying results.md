---
title: "Displaying results"
source: "https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/displayformats"
author:
published:
created: 2025-03-28
description: "Discover and participate in AWS workshops and GameDays"
tags:
  - "clippings"
---
We have several options on how we can display our log query results.

Some times it would be useful to present the output as a data table, other times it would be helpful to provide visual display as a time chart, pie chart, bar graph, or a stacked area chart.

We're going to use a simple query to walk through each of these display options and add them to a dashboard to create the dashboard shown here.

![[Pasted image 20250328194105.png]]

[

## Select the log group

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#select-the-log-group)

The first step is to choose the log group(s) which contain the log events we want to query.

1. In the AWS Management Console on the Services menu, click **CloudWatch**.
2. In the left navigation menu under **Logs**, click on **Logs Insights**.
3. From the **Select log group(s)** drop down, select the `/ecs/PetListAdoptions` log group.
[

## Create a table display

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#create-a-table-display)
1. Use the following query and **Run query** to see the results.

You should see a table of results.

![[Pasted image 20250328194117.png]]

1. Choose to **Add to dashboard**

If you have an existing dashboard, the widget can be added to the existing dashboard. Here we will create a new dashboard.

1. Choose to **Create new**.
2. Give the new dashboard a name of `display-options` and **Create**.
3. Set title under **Customize widget title** to `table display`. You can modify the title here or on the dashboard itself.

![[Pasted image 20250328194142.png]]

1. Choose **Add to dashboard**.
2. Resize your widget as desired, and **Save**.

Your dashboard will look like this.
![[Pasted image 20250328194202.png]]

[

## Create a pie chart display

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#create-a-pie-chart-display)

We will reuse the same underlying query and change the display options.

1. From your CloudWatch dashboard click on the 3 vertical dots on the top right of the time chart widget previously created, and choose to **Duplicate**. (You can duplicate any widget in this way).
   ![[Pasted image 20250328194220.png]]
2. On your new widget, click on the 3 vertical dots again, and choose to **Edit**. You will be returned to the Log Insights view to edit your query.
3. Choose to **Run query**.
Blank display on editing

When you edit a widget, the **Visualization** tab will be empty. You must first **Run query** to get some results to display.

The query we have here has results in a format that can be displayed in multiple ways.

1. Choose the **Visualization** tab and choose a **Pie** chart display.
2. Choose **Save changes**.
3. Hover over the title and click on the edit (pencil) icon. Change the title to `pie chart display`. Click **Apply**.

![[Pasted image 20250328194232.png]]

1. Resize, reposition and rename your widget as desired. Remember to click **Save** to save the dashboard.

Your dashboard will look like this.
![[Pasted image 20250328194517.png]]

[

## Create a bar chart display

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#create-a-bar-chart-display)
1. Duplicate one of your widgets as before, then choose to **Edit** and **Run query**.
2. Choose the **Visualization** tab and choose a **Bar** chart display.
3. Choose **Save changes**.
4. Hover over the title and click on the edit (pencil) icon. Change the title to `bar chart display`. Click **Apply**.
5. Resize, reposition and rename your widget as desired. Remember to click **Save** to save the dashboard.

Your dashboard will look like this.
![[Pasted image 20250328194526.png]]

[

## Create a time chart display

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#create-a-time-chart-display)

Time chart and stacked area display require data which has been aggregated by time.

In CloudWatch we refer to time charts as a **Line** chart visualization.

For simplicity we will only look at adding a single series to these charts.

1. Duplicate one of your widgets as before, then choose to **Edit**.
2. Modify the stats command in your query to include a time aggregation as shown below, and **Run query**.
1. Choose the **Visualization** tab and choose a **Line** chart display.
2. Choose **Save changes**.
3. Hover over the title and click on the edit (pencil) icon. Change the title to `time chart display`. Click **Apply**.
4. Resize, reposition and rename your widget as desired. Remember to click **Save** to save the dashboard.

Your dashboard will look like this.
![[Pasted image 20250328194538.png]]

[

## Create a stacked area display

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/#create-a-stacked-area-display)
1. Duplicate one of your widgets as before, then choose to **Edit** and **Run query**.

If you see an error indicating the data is not suitable for a line chart, you will need to edit the query to include a time aggregation as was done for the time chart display.

1. Choose the **Visualization** tab and choose a **Stacked area** chart display.
2. Choose **Save changes**.
3. Hover over the title and click on the edit (pencil) icon. Change the title to `stacked area display`. Click **Apply**
4. Resize, reposition and rename your widget as desired. Remember to click **Save** to save the dashboard.

Your dashboard will look like this.
![[Pasted image 20250328194548.png]]

Time charts with multiple series
![[Pasted image 20250328194557.png]]

The above example is created as a line chart in the section of the workshop on [Querying - using fields](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/fields).

If you wish to explore how to graph multiple series on a time chart you can see an example in [Querying - using fields](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/aws-native/logs/logsinsights/fields).