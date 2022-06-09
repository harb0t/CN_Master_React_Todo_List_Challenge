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
                <input type="Submit" value='GET THAT DOWN ON THE LIST!'></input>
                {/* <input type="submit" /> */}
            </form>

            );
    };
export default Form;