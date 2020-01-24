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

# copy project
COPY hello hello

# make app directory working dir
WORKDIR hello

# install node requirements
RUN npm install

# run server
EXPOSE 3000
CMD ["npm", "run", "serve"]
