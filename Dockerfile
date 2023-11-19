# Use the official Node.js 14 LTS image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire current directory to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
