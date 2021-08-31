#!/bin/bash

my_swap()
{
	A=$1
	B=$2

	TEMP=$A
       	A=$B
	B=$TEMP
	echo "A = $A, B = $B"	
}

if [ -z "$2" ]; then
	echo "No arguments"
else
	my_swap $1 $2
fi
