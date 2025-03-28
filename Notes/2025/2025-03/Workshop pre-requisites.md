

We recently moved all code instructions from AWS Cloud9 to AWS CloudShell. Please report to your facilitator or to [aws-bd-observability@amazon.com](mailto:aws-bd-observability@amazon.com) , if you encounter any related error or outdated instructions.

Some sections of the workshop will require you to run shell commands. For this, you will need access to a terminal environemnt. We will generally call out any section that needs the pre-requisites with an alert banner. This section provides instructions to use AWS CloudShell, a browser-based shell where you can quickly run scripts with the AWS Command Line Interface (CLI) and other tools.

[

### Launching a CloudShell terminal

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/getting-started/prerequisites#launching-a-cloudshell-terminal)

In the AWS console, open the ClouShell terminal by clicking on the icon on the bottom left as shown in the next image. It will take a few seconds to initialize and ready to use.

![launching CloudShell](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/cloudshell/launching.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

Your CloudShell terminal can be maximised to a separate tab or minimized at any moment. After a few minutes of inactivity, CloudShell will shutdown but you can resume your activity by opening anew or refreshing your browser.

[

### Installing dependencies

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/getting-started/prerequisites#installing-dependencies)

Some instructions will require a few binaries not installed by default such as `helm`, `awscurl` and more. We will install these dependencies by running the following command:

```bash
1
curl -s https://raw.githubusercontent.com/aws-samples/one-observability-demo/main/setup-cloudshell.sh | sh
```

[

### Updating kubeconfig

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/getting-started/prerequisites#updating-kubeconfig)

These commands update kubeconfig so you can interact with the EKS cluster. Replace `$AWS_REGION` with your current AWS Region.

```bash
1
2
aws eks update-kubeconfig --name PetSite --region $AWS_REGION
kubectl get nodes
```

Your output should look like the following:

![Kubeconfig](https://static.us-east-1.prod.workshops.aws/72c80ac7-9423-4bc3-9bde-25479f8ef882/static/images/eksconfigured.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy83MmM4MGFjNy05NDIzLTRiYzMtOWJkZS0yNTQ3OWY4ZWY4ODIvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Mzc1NjI2OH19fV19&Signature=XRBsAedHYWxOtTFVK2z%7EYS7QJoAjx7Jwgqq9wh-iZOUO3nsFbjIZRdpzKlptpU%7En310o1uNIYMtNIs-n32q%7EYN5XVUwZQ1W-UNbx1N6RXwWEVLR2NgIfnI0s0PnYFddhozSuqVOcv1ZOwdZYJvbKR8xqKX2BA7sjDvjX55Uk0OphGVv%7EkPfy4zJCnh-IS74bTIYmMKgcWbiiQPp8Y8oJormYhcdliD9vCck3VG8ZHHNc-SmM7ys64tkSeC8SjbHwTGh4fIed0XzIwACV4M07vvVb20Kf%7EgqslEFHqvCbV6C2zI5HzrFhfv1Um8hzh8J820GIgnNINGSDc-qeZRKMRg__)

[

### Source code

](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/getting-started/prerequisites#source-code)

Depending on the sections of the workshop, you might be interested in browsing the source code and examples on [Github](https://github.com/aws-samples/one-observability-demo)