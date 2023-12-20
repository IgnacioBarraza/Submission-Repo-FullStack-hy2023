import { Part } from "./Part";
import { Total } from "./Total";

export default function Content({course}) {
    console.log(course);
    return (
        <>
            <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
            <br />
            <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
            <br />
            <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
            <br />
            <Total parts={course.parts} />
        </>
    )
}