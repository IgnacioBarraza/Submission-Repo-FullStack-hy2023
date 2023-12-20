export const Total = ({parts}) => {
    const total = parts[0].exercises +  parts[1].exercises + parts[2].exercises;
    return (
        <>
            <span>Total of {total} exercises</span>
        </>
    )
}