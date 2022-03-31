import React from "react";
import SearchBar from "../Components/SearchBar";
// import Filter from "../Components/Filter";
import ResultsAPI from "../Components/ResultsAPI";

import '../Styles/Search.css';




function Results(){

// Result of API request 

    // const resultsList = this.props.result;


//------------------------------------------------
    // SATIC LIST FOR TEST
    const results = [
        { 
            title       : 'TITLE 1',
            author      : 'TOM HATE',
            date        : '12 September 1999',
            abstract    : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nisi iusto perspiciatis quibusdam perferendis odit hic voluptatibus velit beatae aliquid ipsa quae culpa corrupti, iste obcaecati minima nemo numquam aut nostrum ut sequi? Ea cupiditate dolore cum eligendi veniam ex quos odit, id veritatis quisquam voluptates, explicabo mollitia quibusdam labore fugiat magni incidunt vel tenetur rem? Aut fuga qui tempore sint minima culpa, quidem optio rerum adipisci dolor reiciendis consequuntur perspiciatis ipsum architecto dolore! Sapiente ipsa libero consequuntur obcaecati inventore, quia blanditiis velit officiis neque quo commodi, recusandae ullam nemo ab? Maiores quisquam, eius voluptatum nisi dolorum dolor sit.',
            relevance   : '98',
            site        : 'arXiv',
            type        : 'Press',
            link        : 'link',
            availability: 'Free'
        },
        { 
            title       : 'TITLE 2',
            author      : 'TOR TICOLIT',
            date        : '2 October 2005',
            abstract    : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nisi iusto perspiciatis quibusdam perferendis odit hic voluptatibus velit beatae aliquid ipsa quae culpa corrupti, iste obcaecati minima nemo numquam aut nostrum ut sequi? Ea cupiditate dolore cum eligendi veniam ex quos odit, id veritatis quisquam voluptates, explicabo mollitia quibusdam labore fugiat magni incidunt vel tenetur rem? Aut fuga qui tempore sint minima culpa, quidem optio rerum adipisci dolor reiciendis consequuntur perspiciatis ipsum architecto dolore! Sapiente ipsa libero consequuntur obcaecati inventore, quia blanditiis velit officiis neque quo commodi, recusandae ullam nemo ab? Maiores quisquam, eius voluptatum nisi dolorum dolor sit.',
            relevance   : '45',
            site        : 'i3e',
            type        : 'Press',
            link        : 'link',
            availability: 'Free'
        },
        { 
            title       : 'TITLE 3',
            author      : 'JULES DUQ',
            date        : '31 February 2009',
            abstract    : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nisi iusto perspiciatis quibusdam perferendis odit hic voluptatibus velit beatae aliquid ipsa quae culpa corrupti, iste obcaecati minima nemo numquam aut nostrum ut sequi? Ea cupiditate dolore cum eligendi veniam ex quos odit, id veritatis quisquam voluptates, explicabo mollitia quibusdam labore fugiat magni incidunt vel tenetur rem? Aut fuga qui tempore sint minima culpa, quidem optio rerum adipisci dolor reiciendis consequuntur perspiciatis ipsum architecto dolore! Sapiente ipsa libero consequuntur obcaecati inventore, quia blanditiis velit officiis neque quo commodi, recusandae ullam nemo ab? Maiores quisquam, eius voluptatum nisi dolorum dolor sit.',
            relevance   : '45',
            site        : 'arXiv',
            type        : 'Press',
            link        : 'link',
            availability: 'Free'
        }
    ];

//----------------------------------------------------
    return(
        <div>
            <nav className="navbar navbar-light bg-nav">
                <SearchBar/>
            </nav>


            <div className="row">
                <div className="col-sm-2">
                    {/* <Filter/>   */}
                </div>
                <ResultsAPI result={results}/>
            </div>

        </div>
    )}

export default Results;