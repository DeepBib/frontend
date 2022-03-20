import React from "react";


function Result_Article(){
    // On récupére l'élément donner en argument de result article
    const article = this.props.article;
    // on initialiser les vvariables pour l'affichage
    // article description section 
    const title = article.title;
    const author = article.author;
    const date = article.date;
    const abstract = article.abstract;
    // article info
    const relevance = article.relevance;
    const site = article.site;
    const type = article.type;
    const link = article.link;
    const availability = article.availability;


    return(
        <div className="col-sm-10">
            <div className="row">
                <div id="article-1" className="bg-article">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="article-info">
                                <div className="article-title">{title}</div>
                                <div className="article-author">{author}</div>
                                <div className="article-date">{date}</div>
                                <div className="article-abstract">{abstract}</div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="article-ref">
                                <div className="article-relevance">{relevance}%</div>
                                <div className="article-site">{site}</div>
                                <div className="article-type">{type}</div>
                                <div className="article-link">{link}</div>
            
                                <div className="article-availability">{availability}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )} 

export default Result_Article;      