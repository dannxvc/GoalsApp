import styles from "./Details.module.css";
function Details() {
    const frequencyOptions=["day", "week", "month", "year"];
    const iconOptions=["a","b","c","d","e"];
    return (
        <div className="card">
            <form className="p-4">
                <label className="label">
                    Describe your goal
                    <input class="input" placeholder="ej. 52 caminatas" type="text"/>
                </label>
                <label className="label">
                    How often you want to meet your goal? <span>(ej. once a week)</span>
                    <div className="flex mb-6">
                        <input class="input" type="number" placeholder="ej. 52 caminatas"/>
                        <select class="input ml-6">
                            {frequencyOptions.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many times do you want to complete this goal?
                    <input class="input" type="number"/>
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input class="input" type="date"/>
                </label>
                <label className="label">
                    How many times have you already completed this goal?
                    <input class="input" type="number"/>
                </label>
                <label className="label">
                    Choose an icon for this goal.
                    <select class="input">
                       {iconOptions.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.btns}>
                <button className="btn btn--black">Create</button>
                <button className="btn btn--gray">Cancel</button>
            </div>
        </div>
    );
}

export default Details;