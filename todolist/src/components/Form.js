const Form = ({handleSubmit,toDoItemInput,setToDoItemInput}) => {
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
                <input type="Submit" name='Submit button' value='GET THAT DOWN ON THE LIST!'></input>
            </form>

            );
};

export default Form;