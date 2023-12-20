import { Part } from "./Part";
import { Total } from "./Total";

export default function Content({ course }) {
  return (
    <>
      {course.parts.map(part => {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
      })}
      <Total exercises={course.parts} />
    </>
  );
}
