import Content from "./Content";
import { Header } from "./header";

export default function Course({ course }) {
  console.log(course);
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};
