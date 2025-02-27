#!/bin/bash

REPO_DIR="/home/thanos/theta-ai-site"

# Go to project dir, master branch
cd $REPO_DIR
git checkout master

# Check current commit
LOCAL_COMMIT=$(git rev-parse HEAD)

# Fetch latest changes
git pull origin master

# Check latest commit
REMOTE_COMMIT=$(git rev-parse origin/master)

# Compare local and remote commits
if [ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]; then
  echo "Changes detected. Pulling latest changes..."
  git pull origin master

  # Redeploy webserver and proxy
  docker compose down
  docker compose up -d
else
  echo "No changes detected."
fi

