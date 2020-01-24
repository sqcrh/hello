FROM ubuntu

# install tools
RUN apt-get update -qq && apt-get install -y \
	sudo \
	nano \
	postgresql-client \
	curl \
	git

# install node
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN apt-get update -qq && apt-get install -y \
	nodejs

# copy enter script
COPY stack/dev/enter.sh enter.sh

# make app directory working dir
RUN mkdir hello
WORKDIR hello

EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]
