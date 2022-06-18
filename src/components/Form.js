const Form = ({handleSubmit,toDoItemInput,setToDoItemInput}) => {
    return (
            <form classname="form" onSubmit={handleSubmit}>
                
                <label classname="need to">
                    I need to...<br />
                        <input
                            type="text"
                            value={toDoItemInput}
                            onChange={(e) => setToDoItemInput(e.target.value)}
                        />
                </label><br />
                <input type="Submit" name='Submit button' value='GET THAT DOWN ON THE LIST!'></input>
            </form>

            );
};

export default Form;