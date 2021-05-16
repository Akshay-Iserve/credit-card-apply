import React from 'react';
import { useLocation } from "react-router-dom";

const SelectedOfferDiv = () => {
    let location = useLocation();

    let cardDetails = location.state;

    const styles = {
        background: {
            position: 'fixed',
            top: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,.75)',
            zIndex: '999999',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        selectedOffer: {
            border: '1px solid #ececec',
            background: '#ececec',
            justifyContent: 'space-between',
            cardImage: {
                height: 50,
                borderRadius: 6
            },
            name: {
                padding: 10,
                textAlign: 'left',
                bank: {
                    color: "#0888c3",
                    fontWeight: "bold"
                }
            },
            item: {
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                padding: '0px 10px',
                minWidth: '10%',
                heading: {
                    color: '#369abd',
                    width: '100%',
                    fontSize: 10,
                    textAlign: 'center',
                    position: 'absolute',
                    left: 0
                },
                body: {
                    flex: 1,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }
            }
        },
    }

    return (
        <div>
            <div className="col-md-12 col-sm-12 col-xs-12 row pt-2 pb-1 bg-white m-0">
                <h2 style={{ fontSize: 18 }}>Congratulations!!!</h2>
                <p style={{ textAlign: 'justify', fontSize: 14, margin: 0 }}>You are eligible for {location.state && 'below'} Credit Card offer. Request you to complete the online personal loan application by providing your details below, it will help us to get your loan application approved faster.</p>
                {location.state && <div className="col-md-12 col-sm-12 col-xs-12 row pt-0 pb-0 pr-0 m-0" style={styles.selectedOffer}>
                    <div className="offer-item">
                        <div className="d-flex align-items-center">
                            <img style={styles.selectedOffer.cardImage} src={`https://www.iservefinancial.com/public/images/credit-card/new-card-images/${cardDetails.card_image}`} />
                            <div style={styles.selectedOffer.name}>
                                <span style={styles.selectedOffer.name.bank}>{cardDetails.bank_name}</span><br />
                                <span>{cardDetails.cc_name}</span>
                            </div>
                        </div>
                    </div>
                    <div style={styles.selectedOffer.item}>
                        <div style={styles.selectedOffer.item.heading}>REWARDS</div>
                        <div style={styles.selectedOffer.item.body}>
                            {cardDetails.reward_type}
                        </div>
                    </div>
                    <div style={styles.selectedOffer.item}>
                        <div style={styles.selectedOffer.item.heading}>JOINING FEES</div>
                        <div style={styles.selectedOffer.item.body}>
                            ₹ {cardDetails.joining_fees}
                        </div>
                    </div>
                    <div style={styles.selectedOffer.item}>
                        <div style={styles.selectedOffer.item.heading}>JOINING PERKS</div>
                        <div style={styles.selectedOffer.item.body}>
                            <ul className="m-0 p-0" style={{ fontSize: 12 }}>
                                {cardDetails.joining_perks.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div style={{ ...styles.selectedOffer.item, background: 'lightgray' }}>
                        <div style={{ ...styles.selectedOffer.item.heading, color: 'red' }}>ISERVE OFFER</div>
                        <div style={styles.selectedOffer.item.body}>
                            Coming Soon
                                </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default SelectedOfferDiv;