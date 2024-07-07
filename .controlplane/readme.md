# Deploying tutorial app on Control Plane

---

_If you need a free demo account for Control Plane (no CC required), you can contact [Justin Gordon, CEO of ShakaCode](mailto:justin@shakacode.com)._

---

Check [how the `cpflow` gem (this project) is used in the Github actions](https://github.com/shakacode/react-webpack-rails-tutorial/blob/master/.github/actions/deploy-to-control-plane/action.yml).
Here is a brief [video overview](https://www.youtube.com/watch?v=llaQoAV_6Iw).

---

## Overview
This simple example shows how to deploy a simple app on Control Plane using the `cpflow` gem.

To maximize simplicity, this example creates Postgres and Redis as workloads in the same GVC as the app.
In a real app, you would likely use persistent, external resources, such as AWS RDS and AWS ElastiCache.

You can see the definition of Postgres and Redis in the `.controlplane/templates` directory.

## Prerequisites

1. Ensure your [Control Plane](https://shakacode.controlplane.com) account is set up.
You should have an `organization` `<your-org>` for testing in that account.
Set ENV variable `CPLN_ORG` to `<your-org>`. Alternatively, you may modify the 
value for `aliases.common.cpln_org` in `.controlplane/controlplane.yml`.
If you need an organization, please [contact Shakacode](mailto:controlplane@shakacode.com).

2. Install Control Plane CLI (and configure access) using `npm install -g @controlplane/cli`.
You can update the `cpln` command line with `npm update -g @controlplane/cli`.
Then run `cpln login` to ensure access.
For more informatation check out the
[docs here](https://shakadocs.controlplane.com/quickstart/quick-start-3-cli#getting-started-with-the-cli).

3. Run `cpln image docker-login --org <your-org>` to ensure that you have access to the Control Plane Docker registry.

4. Install the latest version of
[`cpflow` gem](https://rubygems.org/gems/cpflow)
on your project's Gemfile or globally.
For more information check out
[Heroku to Control Plane](https://github.com/shakacode/heroku-to-control-plane).

5. This project has a `Dockerfile` for Control Plane in `.controlplane` directory.
You can use it as an example for your project.
Ensure that you have Docker running.

### Tips
Do not confuse the `cpflow` CLI with the `cpln` CLI.
The `cpflow` CLI is the Heroku to Control Plane playbook CLI.
The `cpln` CLI is the Control Plane CLI.

## Project Configuration
See the filese in the `./controlplane` directory.

1. `/templates`: defines the objects created with the `cpflow setup` command.
These YAML files are the same as used by the `cpln apply` command.
2. `/controlplane.yml`: defines your application, including the organization, location, and app name.
3. `Dockerfile`: defines the Docker image used to run the app on Control Plane.
4. `entrypoint.sh`: defines the entrypoint script used to run the app on Control Plane.

## Setup and run

Check if the Control Plane organization and location are correct in `.controlplane/controlplane.yml`.
Alternatively, you can use `CPLN_ORG` environment variable to set the organization name.
You should be able to see this information in the Control Plane UI.

**Note:** The below commands use `cpflow` which is the Heroku to Control Plane playbook gem,
and not `cpln` which is the Control Plane CLI.

```sh
# Use environment variable to prevent repetition
export APP_NAME=react-webpack-rails-tutorial

# Provision all infrastructure on Control Plane.
# app react-webpack-rails-tutorial will be created per definition in .controlplane/controlplane.yml
cpflow apply-template gvc postgres redis rails daily-task -a $APP_NAME

# Build and push docker image to Control Plane repository
# Note, may take many minutes. Be patient.
# Check for error messages, such as forgetting to run `cpln image docker-login --org <your-org>`
cpflow build-image -a $APP_NAME

# Promote image to app after running `cpflow build-image command`
# Note, the UX of images may not show the image for up to 5 minutes.
# However, it's ready.
cpflow deploy-image -a $APP_NAME

# See how app is starting up
cpflow logs -a $APP_NAME

# Open app in browser (once it has started up)
cpflow open -a $APP_NAME
```

### Promoting code updates

After committing code, you will update your deployment of `react-webpack-rails-tutorial` with the following commands:

```sh
# Assuming you have already set APP_NAME env variable to react-webpack-rails-tutorial
# Build and push new image with sequential image tagging, e.g. 'react-webpack-rails-tutorial:1', then 'react-webpack-rails-tutorial:2', etc.
cpflow build-image -a $APP_NAME

# Run database migrations (or other release tasks) with latest image,
# while app is still running on previous image.
# This is analogous to the release phase.
cpflow run -a $APP_NAME --image latest -- rails db:migrate

# Pomote latest image to app after migrations run
cpflow deploy-image -a $APP_NAME
```

If you needed to push a new image with a specific commit SHA, you can run the following command:

```sh
# Build and push with sequential image tagging and commit SHA, e.g. 'react-webpack-rails-tutorial:123_ABCD'
cpflow build-image -a $APP_NAME --commit ABCD
```

## Other notes

### `entrypoint.sh`
- waits for Postgres and Redis to be available
- runs `rails db:prepare` to create/seed or migrate the database
