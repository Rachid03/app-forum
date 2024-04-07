import { Question } from "../models/Question";

export const questions: Question[] = [
  {
    question: "What is the capital of France?",
    descriptionQuestion: "This question is about the capital city of France.",
    user: {
      fullName: "Rachid El jouhri",
      profilePicture: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    descriptionQuestion: "This question is about the author of the famous novel 'To Kill a Mockingbird'.",
    user: {
      fullName: "Redouane Mrabet",
      profilePicture: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  },
  {
    question: "What is the boiling point of water in Celsius?",
    descriptionQuestion: "This question is about the temperature at which water boils in the Celsius scale.",
    user: {
      fullName: "Ismail lamro",
      profilePicture: "http://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    },
    answers: [{
      id: 12,
      content: "i don't know :)",
      user: {
        fullName: "Redouane Mrabet",
        profilePicture: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      }
    },
    {
      id: 12,
      content: "i don't know :)",
      user: {
        fullName: "Redouane Mrabet",
        profilePicture: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      },
    }]
  },
  {
    question: "What year did the first moon landing occur?",
    descriptionQuestion: "This question is about the historical event of the first human landing on the moon.",
    user: {
      fullName: "John Doe",
      profilePicture: "http://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    }
  },
  {
    question: "What is the chemical symbol for gold?",
    descriptionQuestion: "This question is about the atomic symbol for the element gold.",
    user: {
      fullName: "John Doe",
      profilePicture: "http://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    }
  },
  {
    question: "Who painted the Mona Lisa?",
    descriptionQuestion: "This question is about the artist behind the famous painting 'Mona Lisa'.",
    user: {
      fullName: "John Doe",
      profilePicture: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  }
];
