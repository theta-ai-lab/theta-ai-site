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

  # Build and run Docker image
  docker build -t theta-ai-site:latest .
  docker stop theta-ai-site-container || true
  docker rm theta-ai-site-container || true
  docker run -p 80:3000 -p 443:3000 -d --name theta-ai-site-container theta-ai-site:latest
else
  echo "No changes detected."
fi

