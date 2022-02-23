

function Navigation(){
   
    
    return (
        <div className="navigation">
            <div className="logo">
                <img className="image" alt="hacker-news-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/384px-Y_Combinator_logo.svg.png"></img>
                
            </div>
            <div><a  className="title" href=" ">Hacker News </a></div> 
            <ul className="ulList">
                <li>
                   <a href=" "> new |</a>
                </li>
                <li>
                <a href=" "> past |</a>
                </li>
                <li>
                <a href=" "> comment |</a>
                </li>
                <li>
                <a href=" "> ask |</a>
                </li>
                <li>
                <a href=" "> show |</a>
                </li>
                <li>
                <a href=" "> job |</a>
                </li>
                <li>
                <a href=" "> submit |</a>
                </li>
            </ul>
        </div>
    )
}
export default Navigation;