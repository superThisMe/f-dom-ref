import React, { useState } from 'react';

const IterationDemo = (props) => {

    const [names, setNames] = useState([
            { id: 1, text: "송강호" }, 
            { id: 2, text: "장동건" }, 
            { id: 3, text: "김윤석" },
            { id: 4, text: "한석규" }
        ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const removeName = (id) => {
        const modefiedNames = names.filter( name => name.id !== id );
        setNames(modefiedNames);
    };

    //const namesLi = names.map( name => <li>{ name }</li> );
    const namesLi = names.map( (name) => <li key={name.id}
                                             onDoubleClick={ () => removeName(name.id) }>{ name.text }</li> );

    return(
        <>
            <input value={ inputText } 
                   onChange={ 
                       (e) => {
                           setInputText(e.target.value);
                       }
                   } />
            <button onClick={
                (e) => {
                    const newNames = names.concat({
                        id: nextId,
                        text: inputText
                    });
                    setNames(newNames);
                    setNextId(nextId + 1);
                    setInputText("");
                }
            }>추가</button>
            <ul>
                { namesLi }
            </ul>
        </>
    );

}

export default IterationDemo;