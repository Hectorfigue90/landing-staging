# Use an official Node.js runtime as the base image
FROM node:16-alpine as builder
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port your React app is running on
# Replace 3000 with the actual port if necessary
EXPOSE 3000

# Define the command to start your React app (adjust as needed)
CMD ["npm", "start"]