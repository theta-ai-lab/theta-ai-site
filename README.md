


## Deployment

### Standalone React App

Deploy the react webserver as a standalone app. This should be done for development/testing purposes **not** for production.

To deploy follow the following steps:

1. Build the image:

```
docker build -t theta-ai-site:latest react-app
```

2. Run the container:

```
docker run -p 3000:3000 --name theta-ai-site-container theta-ai-site-latest
```

*Note: You can expose different ports if you want. E.g. for HTTP/HTTPS ports you can use:*

```
docker run -p 80:3000 -p 443:3000 --name theta-ai-site-container theta-ai-site-latest
```

### App with reverse proxy

This deploys the react webserver along with an nginx reverse proxy server for increased security. This deployment **can** be used in production.

To deploy follow the following steps:

1. Configure SSL
  a. Create a directory in the project root called `ssl`.
  b. Copy SSL certificate (`fullchain.pem`) and private key (`privkey.key`) to `ssl` directory.

2. Run docker compose

```
docker compose up -d
```

