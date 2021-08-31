#!/bin/bash
git add $1
git commit -m "$1"
git branch -M main
git push -u origin main
