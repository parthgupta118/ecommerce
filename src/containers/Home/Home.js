import React, { Component } from "react";
import { productData } from "../../productData";

import classes from "./Home.module.css";
import Card from "../../Components/Product Card/Card";
import Pagination from '../../Components/Pagination/Pagination';
import { paginate } from "../../Components/Pagination/Paginate";

// import Aux from "../../hoc/Aux";

class Home extends Component {
    state = { allCards : productData, cardsPPage: 10, currentPage: 1 }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };


    render() {

        const { allCards, cardsPPage, currentPage } = this.state

        const cards = paginate(allCards, currentPage, cardsPPage);

        return (
            <React.Fragment>
                <div className={classes.Container}>
                    {cards.map(card => (
                        <Card
                            key = { card.productId }
                            info = { card.productInfo }
                            name = { card.productName }
                            image = { card.productImage }
                            price = { card.productPrice }
                        />
                    ))}
                </div>

                <Pagination 
                    itemsCount={this.state.allCards.length}
                    cardsPPage={cardsPPage}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                    />
            </React.Fragment>
                
        );
    }
};

export default Home;