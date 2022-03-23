FROM denoland/deno:latest
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080
CMD ["deno", "run", "--allow-net", "index.ts"]