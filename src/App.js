import React from 'react';
import './App.css';
import Span from './components/Span';

const fields = [
    { name: "field_name", label: "Name", type: "text" },
    { name: "field_username", label: "User", type: "text" },
    { name: "field_date", label: "Date", type: "date" }
];

const span_data = 
    { text: 'hello' };

class App extends React.Component {
    inputRefs = {};

    handleLabelClick = (id) => {
        console.log(this)
        if (this.inputRefs[id]) {
            this.inputRefs[id].focus();
        }
    };

    render(){
        const listItems = fields.map((field) =>
            <div key={'div__'+field.name}>
                <label key={'label__'+field.name} htmlFor={field.name} onClick={() => this.handleLabelClick(field.name)}>{field.label}:</label>
                <input key={'input__'+field.name} type={field.type} ref={(ref) => (this.inputRefs[field.name] = ref)} />
            </div>
        );
        return (
            <div>
                <h1>Webtrends Optimize Software Engineer exam</h1>
                <form>
                    {listItems}
                </form>
                <br/>
                <Span text={span_data.text} />
            </div>
        );
    }
}

export default App;