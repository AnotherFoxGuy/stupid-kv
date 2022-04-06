stupid kv
-------------------

The simplest key-value store with HTTP API

## Build Instructions

Just run `xmake`

## HTTP API

PUT `http://127.0.0.1:7020/set/[key name]` with the content as raw body to add data

GET `http://127.0.0.1:7020/get/[key name]` to get the data back
