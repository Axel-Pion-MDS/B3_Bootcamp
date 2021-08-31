#!/bin/bash

for i in {1..100}
do
	wget -nd -nc -P ./kitty-love -A "*.jpg, *.jpeg" --follow-tags=img -i https://www.gettyimages.fr/photos/cute-kitten?page=${i}&phrase=cute%20kitten&sort=mostpopular
done
