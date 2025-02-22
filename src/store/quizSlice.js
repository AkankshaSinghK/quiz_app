import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  current: 0,
  score: 0,
  history: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    nextQuestion: (state) => {
      state.current += 1;
    },
    updateScore: (state, action) => {
      state.score += action.payload;
    },
    resetQuiz: (state) => {
      state.current = 0;
      state.score = 0;
    },
  },
});

export const { setQuestions, nextQuestion, updateScore, resetQuiz } =
  quizSlice.actions;
export default quizSlice.reducer;
