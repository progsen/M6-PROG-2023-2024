## Certificates


The certificates created with this command are `only` ment for:
- developer local testing with a webserver in docker

They are `not` ment to be used in `any` real life scenarios



## generation:

> - use a docker container with openssl installed or another machine with openssl installed

how to generate:
 
use the following openssl command in a docker container:

```
openssl req -x509 \
            -sha256 -days 356 \
            -nodes \
            -newkey rsa:2048 \
            -subj "/CN=127.0.0.1/C=US/L=New York" \
            -keyout cert.key -out cert.crt 
```