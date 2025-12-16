# ChatGPT-Clone

https://chatgpt-clone-navy-seven.vercel.app/

Live Link for the Project


# ChatGPT Clone

A full-stack web application that replicates the functionality of ChatGPT, allowing users to interact with an AI-powered chatbot. The app features user authentication, a responsive chat interface, and integrates with Google's Gemini AI for generating intelligent responses.

## Features

- **User Authentication**: Secure signup, login, and logout functionality using JWT tokens.
- **AI-Powered Chat**: Real-time conversation with AI responses powered by Google Gemini API.
- **Responsive Design**: Mobile-friendly interface with a collapsible sidebar for navigation.
- **Persistent Sessions**: User sessions are maintained via cookies and JWT.
- **Modern UI**: Built with React and styled using Tailwind CSS for a sleek, dark-themed interface.
- **Deployment Ready**: Backend deployed on Render, frontend on Vercel for seamless hosting.

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data and chat history.
- **Mongoose**: ODM for MongoDB interactions.
- **JWT (jsonwebtoken)**: For secure token-based authentication.
- **bcryptjs**: For password hashing.
- **Google GenAI**: Integration with Google's Gemini API for AI responses.
- **CORS**: Handling cross-origin requests.
- **Cookie Parser**: Managing HTTP cookies.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: For client-side routing.
- **Axios**: HTTP client for API requests.
- **Lucide React**: Icon library for UI elements.
- **React Markdown**: For rendering markdown in chat responses.
- **React Syntax Highlighter**: For code highlighting in responses.
- **Remark GFM**: GitHub Flavored Markdown support.


### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- Google Gemini API Key (from Google AI Studio)



## Usage

1. **Signup/Login**: Create an account or log in with existing credentials.
2. **Chat Interface**: Enter prompts in the chat box to interact with the AI.
3. **Sidebar**: Access chat history or navigate between sections (expandable on mobile).
4. **Logout**: Securely log out to end the session.


## Project Structure

```
chat-gpt-clone/
├── backend/
│   ├── config.js
│   ├── index.js
│   ├── controller/
│   │   ├── user.controller.js
│   │   └── promt.controller.js
│   ├── middleware/
│   │   └── promt.middleware.js
│   ├── model/
│   │   ├── user.model.js
│   │   └── promt.model.js
│   ├── routes/
│   │   ├── user.route.js
│   │   └── promt.route.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Promt.jsx
│   │   ├── context/
│   │   │   └── AuthProvider.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── vite.config.js
├── README.md
└── TODO.md
```


## Deployment

- **Backend**: Deployed on Render at `https://chatgpt-clone-k2an.onrender.com`.
- **Frontend**: Deployed on Vercel.


