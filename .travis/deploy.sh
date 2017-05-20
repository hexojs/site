#!/bin/bash
# Decrypt the private key
openssl aes-256-cbc -K $encrypted_06b8e90ac19b_key -iv $encrypted_06b8e90ac19b_iv -in .travis/ssh_key.enc -out ~/.ssh/id_rsa -d
# Set the permission of the key
chmod 600 ~/.ssh/id_rsa
# Start SSH agent
eval $(ssh-agent)
# Add the private key to the system
ssh-add ~/.ssh/id_rsa
# Copy SSH config
cp .travis/ssh_config ~/.ssh/config
# Set Git config
git config --global user.name "Hexo Bot"
git config --global user.email bot@hexo.io
# Clone the repository
git clone git@github.com:hexojs/hexojs.github.io.git .deploy_git
# Deploy to GitHub
npm run deploy