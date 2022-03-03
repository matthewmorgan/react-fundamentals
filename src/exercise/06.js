// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
function UsernameForm({onSubmitUsername}) {
    // 🐨 add a submit event handler here (`handleSubmit`).
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    //
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // 🐨 Call `onSubmitUsername` with the value of the input

    // 🐨 add the onSubmit handler to the <form> below

    // 🐨 make sure to associate the label to the input.
    // to do so, set the value of 'htmlFor' prop of the label to the id of input

    const [name, setName] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitUsername(name)
    }


    function updateName(event) {
        const currentValue = event.target.value;
        setName(currentValue.toLowerCase())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name-input">Username:</label>
                <input id="name-input" type="text" value={name} onChange={updateName}/>
            </div>
            <button type="submit" disabled={!name}>Submit</button>
        </form>
    );
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`);
    return <UsernameForm onSubmitUsername={onSubmitUsername}/>;
}

export default App;
