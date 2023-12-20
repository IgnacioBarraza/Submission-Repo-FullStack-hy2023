export const Total = ({exercises}) => {
    const totalSum = exercises.reduce((s, p) => {
        return s + p.exercises
    }, 0)
    return (
        <>
            <h4>Total of {totalSum} exercises</h4>
        </>
    )
}