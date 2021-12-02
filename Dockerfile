# Build server and move Angular to /dist
FROM node:16
WORKDIR /app
COPY . .
RUN npm install

# Set environment variables
ENV PORT=8080

# Listen on port 8080
EXPOSE 8080

# Start server
CMD ["node", "index.js"]
