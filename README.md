# Hackathon Management System

A web application to manage hackathons, allowing users to discover, create, and participate in hackathon events.

## 🌟 Features

### Core Features
1. **User Authentication**
   - Registration and Login
   - Social Login (GitHub OAuth)
2. **Hackathon Management**
   - Create Hackathon Events
   - View Upcoming and Past Hackathons
   - Detailed Event Information
   - Registration Functionality
3. **User Dashboard**
   - Track Ongoing and Past Hackathons
    - View Created and Participated Events


## 🛠️ Technologies Used

- **Frontend**: [Next.js 14.2](https://nextjs.org/)
- **State Management**: React Hooks
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started
 

 installation - 

 git clone <https://github.com/yashyp12/Hackathon-Management-System.git>
cd hackathon-management-system

npm install

npm run dev

## 🔑 GitHub OAuth Setup

To enable GitHub OAuth, follow these steps:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Click on "New OAuth App".
3. Fill in the required fields:
   - **Application name**: Hackathon Management System
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Click "Register application".
5. Copy the **Client ID** and **Client Secret**.
6. Create a `.env.local` file in the root of your project and add the following:

```
GITHUB_ID=your-client-id
GITHUB_SECRET=your-client-secret
```

7. Restart your development server.

--Yash Patil
