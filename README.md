📌 Overview

The Quiz App is an interactive platform where users can attempt multiple-choice and numeric-answer questions within a time limit. It tracks user's attempts and scores. Users can also view their quiz history and revisit their past performances.

📌 Features

✍️ Multiple Question Types : Supports multiple-choice (MCQ) and numeric-answer questions.

📝 Multiple Quiz Attempts: Users can reattempt the quiz as many times as they want.

⏳ Timer-Based Questions: Each question has a countdown timer (30s) before moving to the next.

📊 Score Calculation: Automatic scoring based on correct answers.

🏆 Quiz Completion Page: Displays final score and allows reattempts.

📜 Quiz History with IndexedDB: Past attempts are saved locally and can be reviewed later.

🚀 Responsive UI: Fully optimized for mobile and desktop.

## IndexedDB for Storing Quiz History

The app uses IndexedDB to store user's quiz attempts persistently in the browser.

The data stored includes:

Score: Number of correct answers.

Total Questions: Total questions in the quiz.

Time Taken: Time spent in completing the quiz.

Date: Timestamp of the attempt.

IndexedDB ensures that even if the page is refreshed, users can still access their previous attempts.

## 🚀 Live Demo

🔗 https://quiz-app-gamma-liart.vercel.app/

## Installation & Setup

Follow these steps to run the app locally:

# 1. Clone the Repository
https://github.com/AkankshaSinghK/quiz_app

# 2. Install Dependencies
npm install

# 3. Start the development Server
npm start

## 📌 Technologies Used

React.js 

Bootstrap 

IndexedDB (for storing quiz history) 

React Router (for navigation) 
