#!/bin/bash
rm -rf output || exit 0;
mkdir output; 
npm run build
( cd output
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@david-lewis.com"
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)
