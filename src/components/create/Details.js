function Details() {
    const frequencyOptions=["day", "week", "month", "year"];
    const iconOptions=["a","b","c","d","e"];
    return (
        <div>
            <form>
                <label>
                    Describe your goal
                    <input placeholder="ej. 52 caminatas" type="text"/>
                </label>
                <label>
                    How often you want to meet your goal? <span>(ej. once a week)</span>
                    <div>
                        <input  type="number" placeholder="ej. 52 caminatas"/>
                        <select>
                            {frequencyOptions.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    How many times do you want to complete this goal?
                    <input type="number"/>
                </label>
                <label>
                    Do you have a deadline?
                    <input type="date"/>
                </label>
                <label>
                    How many times have you already completed this goal?
                    <input type="number"/>
                </label>
                <label>
                    Choose an icon for this goal.
                    <select>
                       {iconOptions.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Create</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}

export default Details;