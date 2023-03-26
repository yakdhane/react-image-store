Sure, here's the Dockerfile code:

```
# Base image
FROM node:14.16.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
``` 

Note: Replace `3000` with the port number your app is running on. Also, make sure to copy the Dockerfile to the root directory of your project.