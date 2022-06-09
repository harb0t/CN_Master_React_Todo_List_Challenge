const Form = ({handleSubmit,toDoItemInput,setToDoItemInput,ageInput,setAgeInput,}) => {
    return (
    <form onSubmit={handleSubmit}>
    <label>
    I need to...
    <input
    type="text"
    value={toDoItemInput}
    onChange={(e) => setToDoItemInput(e.target.value)}
    />
    </label>
    <input type="submit" />
    </form>
    );
    };
    export default Form;