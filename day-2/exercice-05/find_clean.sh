#!/bin/bash

find . -type f -regex "^#.+#$" -o -regex ".+~$" -exec rm {} \;
