# Node Apps
## web-http-client - a web based http client

Ships with a visual browser based http client + node.js server-side proxy. This allows you to easily make cross-domain HTTP requests from a browser session, which is great for testing and debugging web-services.

## ONLINE DEMO

  [http://web-http-client.nodejitsu.com/](http://web-http-client.nodejitsu.com/)

![](https://github.com/nodeapps/web-http-client/raw/master/screenshots/web-http-client.png)

# Installation

    mkdir myapp/
    cd myapp/
    jitsu install web-http-client

*If you do not have `jitsu` installed you can install it via `npm install jitsu -g`*

# Usage

### Starting web-http-client locally

    node bin/server

*Now you can visit http://localhost:8080 to view your application*

### Deploy web-http-client to nodejitsu

    jitsu deploy

*You will now be prompted for a `subdomain` to deploy your application on*


# License

(The MIT License)

Copyright (c) 2011 Nodejitsu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
