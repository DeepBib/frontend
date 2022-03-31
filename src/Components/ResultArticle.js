import React from "react";


function ResultArticle(props){
    // On récupére l'élément donner en argument de result article
    const article = this.props.article;


    return(
        <div className="row">
            <div id="article-1" className="bg-article">
                <div className="row">
                    <div className="col-sm-10">
                        <div className="article-info">
                            <div className="article-title">{article.title}</div>
                            <div className="article-author">{article.author}</div>
                            <div className="article-date">{article.date}</div>
                            <div className="article-abstract">{article.abstract}</div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="article-ref">
                            <div className="article-relevance">{article.relevance}%</div>
                            <div className="article-site">{article.site}</div>
                            <div className="article-type">{article.type}</div>
                            <div className="article-link">{article.link}</div>
        
                            <div className="article-availability">{article.availability}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )} 

export default ResultArticle;      