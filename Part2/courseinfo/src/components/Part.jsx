export const Part = ({name, exercises}) => {
    console.log(name);
    console.log(exercises);
    return(
        <>
            <span>{name} {exercises}</span>
        </>
    )
}