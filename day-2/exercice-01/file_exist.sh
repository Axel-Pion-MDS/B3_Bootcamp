#!/bin/bash
FILE=$1
if [ ! -f "$FILE" ]; then
	echo "$FILE does not exist."
else
	echo "$FILE exists."
fi
