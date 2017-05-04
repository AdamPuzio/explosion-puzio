#!/bin/bash

MY_PATH=`dirname "$0"`
MY_PATH=`dirname $MY_PATH`

# Run LESS
lessc $MY_PATH/public/assets/less/site.less $MY_PATH/public/assets/css/site.css