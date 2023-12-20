export const Total = ({exercises}) => {
    const totalSum = exercises.reduce((s, p) => {
        return s + p.exercises
    }, 0)
    console.log(totalSum);
    return (
        <>
            <span>Total of {totalSum} exercises</span>
        </>
    )
}