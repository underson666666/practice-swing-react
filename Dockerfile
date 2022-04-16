FROM node:latest

ENV TZ=Asia/Tokyo \
    LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP:ja \
    LC_ALL=ja_JP.UTF-8

RUN apt -y update && apt -y upgrade && \
    apt -y install git curl vim locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.utf8 && \
    git clone https://github.com/underson666666/dotfiles.git && \
    cd dotfiles/vim && ./init.sh && \
    npm install -g create-react-app &&\
    \
    apt-get -y autoremove && \
    apt-get -y clean && \
    rm -fr /var/lib/apt/list*

WORKDIR /root/practice-swing-react/
