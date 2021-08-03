#Build the production image
FROM nginx:alpine
#COPY --from=base /scratch/scratch-gui/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY --chown=node:node . .
