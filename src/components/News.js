

function News({news}){
    return (
        <div className="list">
            <li className='list-item'>
                <span ><a className='titleName'  href={news.url}>{news.title}</a><a className='titleLink' href={news.url}>({news.url})</a></span><br/>
                <span className="subText">|{news.author}|</span><span className="subText">{news.created_at}|</span>
            </li>
        </div>

    )
}
export default News;