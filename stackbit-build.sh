#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://af18eebcbc74.ngrok.io/project/5f0c6cbd7bbbb12b0733874b/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://af18eebcbc74.ngrok.io/pull/5f0c6cbd7bbbb12b0733874b
curl -s -X POST https://af18eebcbc74.ngrok.io/project/5f0c6cbd7bbbb12b0733874b/webhook/build/ssgbuild > /dev/null
next build && next export
curl -s -X POST https://af18eebcbc74.ngrok.io/project/5f0c6cbd7bbbb12b0733874b/webhook/build/publish > /dev/null
