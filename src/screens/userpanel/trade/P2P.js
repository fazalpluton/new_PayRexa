import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom"


function P2P(props){


    return(

        <>
        {props.header}

        <Container >

            <div className=" big-bg">

                <div className="heading-border p-5 text-center">
                    <h1 className="dual-heading">P2P: Buy/Sell Your Crypto Locally</h1>
                    <h4>Peer-to-peer exchange (or P2P exchange) is a marketplace where
                     people <br/> can trade crypto directly with each other on their own terms, in virtually any country.</h4>
                </div>

            </div>

        </Container>
        <div className="black-header">
            <div>
                <a href="">Express</a>
                <a href="">P2P Trade</a>
            </div>
            <div>
                <a href="">Orders</a>
                <a href="">P2P User Center</a>
                <a href="">P2P User Center</a>
            </div>
        </div>
        <div className="white-header">
            <div>
                <a href="">Express</a>
                <a href="">P2P Trade</a>
                <a href="">Orders</a>
                <a href="">P2P User Center</a>
                <a href="">P2P User Center</a>
            </div>
           
        </div>




        {props.footer}

        </>

    )

}

export default P2P;