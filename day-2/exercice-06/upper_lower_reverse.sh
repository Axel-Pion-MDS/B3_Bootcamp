#!/bin/bash

str=$1
concact=""

for (( i=0; i<${#str}; i++ )); do
	if  [[ ${str:$i:1} =~ [[:upper:]] ]]; then
		toLower=$(tr [:upper:] [:lower:] <<< ${str:$i:1})
		concat="${concat}$toLower"
	elif [[ ${str:$i:1} =~ [[:lower:]] ]]; then
		toUpper=$(tr [:lower:] [:upper:] <<< ${str:$i:1})
		concat="${concat}$toUpper"
	else
		concat="${concat}${str:$i:1}"
	fi
done

echo "$concat"
