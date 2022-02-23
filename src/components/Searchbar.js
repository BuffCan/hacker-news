import { useState} from 'react'

function Searchbar(props){
    const [textInput, setTextInput] = useState(props.input);
    // console.log(textInput)
    function onInputChange(e) {
         setTextInput(e.target.value)
        //  console.log(textInput)
      }
      function onClick(e){
        props.setInput(textInput)
        props.getData(textInput);
        e.preventDefault();
       
          
      }
      
    return(
        <><p className="applications">Applications are open for YC Summer 2022</p>
        <nav className="footer-nav">
            <p>Guidelines</p>
            <p>FAQ</p>
            <p>Lists</p>
            <p>API</p>
            <p>Security</p>
            <p>Legal</p>
            <p>Apply to YC</p>
            <p>Contact</p>
        </nav>
        <form className="searchbar">
            <label htmlFor="header-search">
                <span>Search:</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts" 
                onChange={onInputChange}
                />

            <button type="submit" onClick={onClick}>Search</button>
        </form></>
    )   
}
export default Searchbar; 