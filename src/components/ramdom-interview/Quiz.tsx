interface quizProps {
  question: string;
  answer: string;
  category: string;
}
export const Quiz = ({ question, answer, category }: quizProps) => {
  console.log(question, answer, category);
  return (
    <div>
      <p>{category}</p>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};
