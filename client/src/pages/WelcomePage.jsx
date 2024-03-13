import React from "react";
import{Container,Row,Col}from "react-bootstrap"
// import{WelcomeHeader}from"../components";

const WelcomePage=(props)=>{
    return(
        <div style={{overflow: "auto", height: "100vh"}}>
            < login/>
            <Container className="mb=4">
                <Row> 
                <Col className="px-5">
                    <Row className="py-3">
                        <Col xs={12}lg={6}>
                            <p className="welcome=text">
{/* Virtual Community Book exchange */}
                            </p>
                        </Col>
                        <Col xs={12}lg={6} className="text-xs-center text-lg-left">
                            <img
                            width={484}
                            height={276}
                            style={{margin:"auto"}}
                            className="ml-3 welcome-img-wrapper"
                            src="welcome1.jpg"
                            alt="Media One"
                            />
                        </Col>
                    </Row>
                </Col>
                </Row>
            </Container>
        </div>
    )
};
export default WelcomePage;
