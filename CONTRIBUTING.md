# Contributing to NestQuest

Thank you for your interest in contributing to NestQuest! We value your help in making this project better. This document outlines the guidelines to ensure a smooth and productive collaboration.

---

## **Table of Contents**
1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Code Standards](#code-standards)
4. [Creating a Pull Request](#creating-a-pull-request)
5. [Reporting Issues](#reporting-issues)
6. [Contact Us](#contact-us)

---

## **Getting Started**

### **Fork the Repository**
1. Navigate to the [NestQuest GitHub Repository](https://github.com/Suvadip-sana/Nest-quest).
2. Click the "Fork" button in the top-right corner to create your own copy of the repository.

### **Clone the Repository**
```bash
$ git clone https://github.com/Suvadip-sana/Nest-quest.git
```

### **Set Up the Environment**
Ensure you have the following installed:
- Node.js (v16 or later)
- MongoDB Atlas Account

Install dependencies:
```bash
$ npm install
```

Set up the environment variables by creating a `.env` file in the root directory with the following:
```env
CLOUD_NAME=YourCloudName
CLOUD_API_KEY=YourCloudAPIKey
CLOUD_API_SECRET=YourCloudAPISecret
MAP_TOKEN=YourMapboxToken
ATLASDB_URL=YourMongoAtlasURL
MONGO_PASSWORD=YourMongoPassword
SECRET=YourSessionSecret
PORT=YourPortNumber
```

Run the development server:
```bash
$ npm start
```

---

## **Development Workflow**

### **1. Create a Branch**
Always create a new branch for your work to keep changes isolated.
```bash
$ git checkout -b feature/your-feature-name
```

### **2. Write and Test Code**
Make sure your changes don’t break the project. Test thoroughly before committing.

### **3. Commit Changes**
Write clear, concise, and meaningful commit messages.
```bash
$ git add .
$ git commit -m "Add feature/bug fix description"
```

### **4. Keep Your Branch Updated**
Fetch changes from the `main` branch periodically to avoid merge conflicts.
```bash
$ git fetch origin
$ git merge origin/main
```

---

## **Code Standards**

- Use clear and descriptive variable names.
- Follow JavaScript/Node.js best practices.
- Write comments for complex logic.
- Format your code using a linter (e.g., ESLint). Run the linter before committing:
```bash
$ npm run lint
```

---

## **Creating a Pull Request**

1. Push your branch to GitHub:
```bash
$ git push origin feature/your-feature-name
```

2. Navigate to the repository on GitHub and create a pull request:
   - Provide a clear title and description of your changes.
   - Mention the issue number it addresses (if applicable) using `Closes #issue-number`.

3. Wait for reviews and address feedback promptly.

---

## **Reporting Issues**

If you encounter a bug or have a feature request, create a new issue by following these steps:
1. Go to the [Issues Tab](https://github.com/Suvadip-sana/Nest-quest/issues).
2. Click "New Issue".
3. Provide a descriptive title and detailed description of the problem or suggestion.

---

## **Contact Us**

For further queries or help, reach out to us at:
- Email: suvadipsana602@gmail.com
- Slack: [NestQuest Community](https://join.slack.com/t/nestquest/shared_invite)

We’re excited to have you onboard! 🚀
