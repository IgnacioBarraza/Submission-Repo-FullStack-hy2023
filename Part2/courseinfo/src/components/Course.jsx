import Content from "./Content";
import { Header } from "./header";

export default function Course({ courses }) {
  return (
    <>
      <Header course={courses} />
      <Content course={courses} />
    </>
  );
};
