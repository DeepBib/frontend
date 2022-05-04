import React from "react";


function ResultArticle(props){
    // On récupére l'élément donner en argument de result article
    const reponse = props.result;
    //console.log(reponse)


    const printResult=(article)=>{

        return(
            
            <div className="row">
            <div className="bg-article">
                <div className="row">
                    <div className="col-sm-10">
                        <div className="article-info">
                            <div className="article-title">{article.title._text}</div>
                            {/* <div className="article-author">{article.author.map(nameAuthor => (nameAuthor.name[0]))}</div> */}

                            <div className="article-date">{article.published._text}</div>
                            <div className="article-abstract">{article.summary._text}</div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="article-ref">
                            {/* <div className="article-relevance">{article.relevance}%</div>
                            <div className="article-site">{article.site}</div>
                            <div className="article-type">{article.type}</div>
                            <div className="article-link">{article.link}</div>
        
                            <div className="article-availability">{article.availability}</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
           
    }



    return(
        <div className="col-sm-10">
            {reponse.map(article=>(printResult(article)))}
        </div>  
        
    )} 

export default ResultArticle;      