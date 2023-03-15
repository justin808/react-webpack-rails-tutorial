# Deploying tutorial app on Control Plane

## Prerequisites

1. Should have [Control Plane](https://controlplane.com) account set up.

2. Set up `organization` for testing in that account and modify org `.controlplane/controlplane.yml` .

3. Install Control Plane CLI (and configure access) [docs here](https://docs.controlplane.com/quickstart/quick-start-3-cli#getting-started-with-the-cli).

4. Install Heroku to Control Plane playbook from https://github.com/shakacode/heroku-to-control-plane.

5. This project has a `Dockerfile` for Control Plane in this directory. You can use it as an example for your project.

## Setup and run

Check if the organization and location are correct in `.controlplane/controlplane.yml`.

```sh
# Note, below commands use `cpl` which is the Heroku to Control Plane playbook script.

# Provision all infrastructure on Control Plane. It will use templates from .controlplane/templates folder.
cpl setup gvc postgres redis rails -a ror-tutorial

# Build and push docker image to Control Plane repository
# Note, may take many minutes. Be patient.
cpl build-image -a ror-tutorial

# Promote image to app after running `cpl build command`.
# Promotion may take several minutes before the app is "live" the first time.
# TODO
cpl promote-image -a ror-tutorial

# Put the release phase command after building and then promote the image. 
# Note, uses the latest image, not the currently running image
alias release_phase "cpl runner 'LOG_LEVEL=warn rails db:migrate' -a ror-tutorial --image latest"
cpl build -a ror-tutorial && release_phase && cpl promote -a ror-tutorial

# See how app is starting up.
# Monitor the logs to determine when app has finished started up.
cpl logs -a ror-tutorial

# Open app in browser (once it has started up)
cpl open -a ror-tutorial
```

## Staging Deployment - Deploying Code Updates

```sh
# Build and push new image with sequential image tagging, e.g. 'ror-tutorial_123'
# TODO renamed build to build-image
cpl build-image -a ror-tutorial-staging

# OR
# Build and push with sequential image tagging and commit SHA, e.g. 'ror-tutorial-staging_123_ABCD'
cpl build-image -a ror-tutorial-staging --commit ABCD

# cpl run:detached allows disconnection. Does not allow input.
# Run database migrations (or other release tasks) with latest image,
# while app is still running on previous image.
# This is analogous to the release phase.
# TODO - renamed runner to run:detached
cpl run-detached rails db:migrate -a ror-tutorial-staging --image latest


# Alternatively, can run command interactively. Network disconnect or Ctrl-c stop the task.
cpl run rails console -a ror-tutorial-staging --image latest

# Promote latest image to app
cpl promote-image -a ror-tutorial-staging
```
     

### Production Deployment
Just like a [Heroku Pipeline](https://devcenter.heroku.com/articles/pipelines#promoting-from-the-heroku-cli).

```sh
# promote-app uses the `upstream` definition, in this case ror-tutorial-staging
cpl promote-app -a ror-tutorial-production

# or specify upstream app 
cpl promote-app ror-tutorial-staging -a ror-tutorial-production
```

Manually, this roughly runs:
```sh
# TODO - create this script
copy-staging-image-to-production
cpl run:detached some-release-script.sh -a ror-tutorial-production --image latest
cpl promote-image -a ror-tutorial-production
```

## Other notes

### `entrypoint.sh`
- Docker concept, runs before the Dockerfile's CMD
- waits for Postgres and Redis to be available
- runs `rails db:prepare` to create/seed or migrate the database
