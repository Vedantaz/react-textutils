import React, { useState } from 'react'
export default function TextForm(props) {
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        })
        setTimeout(() => {
            setAlert(null);
        }, 3000)
    }
    const handleUpClick = () => {
        console.log("Uppercase was clicked ." + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to the uppercase.", "primary")

    }
    const handleDownClick = () => {
        console.log("Lowercase was clicked ." + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to the lowercase", "primary")
    }
    const clearText = () => {
        console.log("Cleared the entered Text." + text)
        let newText = '';
        setText(newText);
        props.showAlert("Successfully cleared text written ", "primary")

    }
    const copyText = () => {
        console.log("copy text is ." + text)
        navigator.clipboard.writeText(text);
        props.showAlert("Successfully copied text written", "primary")

    }
    const removeExtraSpace = () => {
        console.log("Removed Extra spaces ,text is : " + text)
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Successfully removed extra spaces", "primary")

    }
    const handleOnChange = (event) => {
        console.log("On change .")
        setText(event.target.value)

    }

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change or edit state 
    // setText("new Text"); // correct way to change the state #042743
    return (
        <>
            <div className="container" style={{ backgroundcolour: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="container my-2">
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundcolour: props.mode === 'dark' ? 'Grey' : 'white' }} rows="6"></textarea>
                        {/* // There are two curly braces because 1st is about javacsript and another is for writing an object */}
                        <button className={`btn btn-${props.mode === 'Green' ? 'primary' : 'info' && props.mode === 'Red' ? 'warning' : 'info' && props.mode === 'dark' ? 'secondary' : 'info'} my-2 mx-2`} onClick={handleUpClick}> Convert in uppercase
                        </button>                                         {/*     // if Green mode is there then , apply green color instead oof white color */}
                        <button className={`btn btn-${props.mode === 'Green' ? 'primary' : 'info' && props.mode === 'Red' ? 'warning' : 'info' && props.mode === 'dark' ? 'secondary' : 'info'} my-2 mx-2`} onClick={handleDownClick}> Convert in lowercase
                        </button>
                        <button className={`btn btn-${props.mode === 'Green' ? 'primary' : 'info' && props.mode === 'Red' ? 'warning' : 'info' && props.mode === 'dark' ? 'secondary' : 'info'} my-2 mx-2`} onClick={clearText}> Clear Text
                        </button>
                        <button className={`btn btn-${props.mode === 'Green' ? 'primary' : 'info' && props.mode === 'Red' ? 'warning' : 'info' && props.mode === 'dark' ? 'secondary' : 'info'} my-2 mx-2`} onClick={copyText}> Copy Text
                        </button>
                        <button className={`btn btn-${props.mode === 'Green' ? 'primary' : 'info' && props.mode === 'Red' ? 'warning' : 'info' && props.mode === 'dark' ? 'secondary' : 'info'} my-2 mx-2`} onClick={removeExtraSpace}> Remove extra spaces
                        </button>
                    </div>
                    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                        <h1> Your text summary </h1>
                        <p>{text.split(" ").length} words and {text.length} charcters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read </p>
                        <h2>Preview</h2>
                        <p>{text.length > 0 ? text : 'Enter something in the textbox to Preview it here .'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
