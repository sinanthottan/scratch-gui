
ARG NODE_VERSION=16.6.0

# First build is just the base image that helps work around no layer caching in CircleCi
# is pulled from the Heroku Container Registry so it's layers
FROM node:${NODE_VERSION}-buster AS base
WORKDIR /scratch

COPY . /scratch/scratch-gui
WORKDIR ../scratch-vm
COPY . /scratch/scratch-vm



WORKDIR /scratch/scratch-gui

RUN npm set progress=false && \
   npm config set depth 0 && \
   npm install --legacy-peer-deps && \
   npm cache clean --force

WORKDIR /scratch/scratch-vm

RUN npm set progress=false && \
   npm config set depth 0 && \
   npm install --legacy-peer-deps && \
   npm install web3@0.20.3 && \
   npm cache clean --force

RUN npm link

WORKDIR /scratch/scratch-gui

RUN npm link scratch-vm

# Build the react app into the /scratch/gui/build folder
RUN npm run build

# Build the production image
FROM nginx:alpine AS web
COPY --from=base /scratch/scratch-gui/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
