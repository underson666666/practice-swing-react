FROM node:latest

ENV TZ=Asia/Tokyo

RUN apt -y update && apt -y upgrade && \
    apt -y install git curl vim && \
    git clone https://github.com/underson666666/dotfiles.git && \
    cd dotfiles/vim && ./init.sh && \
    npm install -g create-react-app && \
    npm init react-app my-app

WORKDIR /app/my-app/
