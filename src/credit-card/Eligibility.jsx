import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { checkCCEligibility, applyForCard } from "../actions";
import { Link, useHistory } from "react-router-dom";
import { useQuery, usePlatformFinder } from "../libs/utilities";

import './offers.css';

const Eligibility = (props) => {

    let [selected, setSelected] = useState(null);
    const query = useQuery();
    let token = query.get("token");
    const projState = useSelector(state => state, shallowEqual);

    useEffect(async () => {
        if (token) {
            await dispatch({ type: 'SET_AUTH', payload: { ...projState.auth, token: token } });
            await dispatch(checkCCEligibility(token));
        } else {
            history.push('/credit-card');
        }
    }, []);

    let [visibleDetails, setVisibleDetails] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const platform = usePlatformFinder();

    const chooseCreditCard = async (card) => {
        console.log(card);
        await dispatch(applyForCard(card.id));
        setSelected(card);
    }

    useEffect(() => {
        if (selected !== null) {
            history.push({
                pathname: `/credit-card/final-submit`,
                search: `?token=${token}`,
                state: selected
            });
        }
    }, [selected]);

    const styles = {
        headingSectionCalculated: {
            background: '#1770a3',
            h1: {
                textAlign: "center",
                fontSize: "20px",
                color: "#ff8d00",
                fontWeight: "bold",
                lineHeight: "1.3em"
            },
            subHeading: {
                textAlign: "center",
                marginTop: "0px",
                fontSize: "13px",
                color: "#f7f7f7"
            }
        }
    }

    const renderOffers = (props) => {
        return (
            projState.ccOffers.eligible_offers.map((e, i) => {
                if (platform == 'mobile') {
                    return (
                        <div style={{ background: '#fff', margin: '10px', border: '1px solid #e9ecf1', boxShadow: '0px 1px 6px 4px #e9ecf1', borderRadius: '4px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', flex: 1, padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img style={{ borderRadius: 5, width: 80 }} src="https://www.iservefinancial.com/public/images/credit-card/new-card-images/LIC-Signature.jpg" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div className="ml-2" style={{ fontSize: '12px' }}>
                                        <div style={{ color: '#000', fontSize: '14px', fontWeight: 700 }}>{e.cc_name}</div>
                                        <div>Reward : {e.reward_type}</div>
                                        <div>Joining Perks:<br /> {e.joining_perks.toString()}</div>
                                        <div>Network : {e.network} </div>
                                        <div style={{ color: '#ec6313' }}>Joining Fees:  ₹ {e.joining_fees}</div>
                                        <button className="btn btn-primary btn-sm button-offer-cc mt-2" onClick={() => chooseCreditCard(e.id)} type="button">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div key={i} className="offer w-100" onMouseEnter={() => setVisibleDetails(e.id)} onMouseLeave={() => setVisibleDetails('')}>
                        <div className="offers-record" style={{ fontSize: '13px', textAlign: 'center' }}>
                            <div className="offer-item" style={{ position: 'relative' }}>
                                <div className="d-flex align-items-center" style={{ height: '100%', width: '100%' }}>
                                    <img className="credit-card-img" src={`https://www.iservefinancial.com/public/images/credit-card/new-card-images/${e.card_image}`} alt="LIC Signature credit-card" />
                                    <div style={{ padding: '10px', textAlign: "left" }}>
                                        <span className="bank-name">{e.bank_name}</span><br />
                                        <span>{e.cc_name}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="offer-item">
                                <span className="highlightCss propbold_314">{e.reward_type}</span>
                            </div>
                            <div className="offer-item">
                                <span className="highlightCss propbold_314">Joining Fees: ₹ {e.joining_fees} </span>
                            </div>
                            <div className="offer-item">
                                <ul className="list list-marked offers-benefits-list">
                                    {e.joining_perks.map((perks, i) => <li key={i}>{perks}</li>)}
                                </ul>
                            </div>
                            <div className="offer-item only-desktop" style={{ flexDirection: 'column' }}>
                                <div>
                                    <ul className="list list-marked offers-benefits-list">
                                        <li>Free doorstep service</li>
                                        <li>High on cash back</li>
                                    </ul>
                                </div>
                                <div>
                                    <label className="label label-custom label-primary" onClick={() => visibleDetails == e.id ? setVisibleDetails('') : setVisibleDetails(e.id)}> {visibleDetails == e.id ? 'HIDE DETAILS' : 'SHOW DETAILS'} </label>
                                </div>
                            </div>
                            <div className="offer-item flex-column">
                                <button className="btn btn-primary btn-sm button-offer-cc" onClick={() => chooseCreditCard(e)} type="button">APPLY NOW</button>
                            </div>
                        </div>
                        {visibleDetails == e.id && <div className="col-md-12 show-details p-0 text-left" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                            <div className="col-md-12 row p-0 m-0">
                                <div className="col-md-6 showmore-cols">
                                    <div className="heading">Key Features &amp; Rewards</div>
                                    <div className="redmore-cc">
                                        <ul className="list list-marked">
                                            {e.features_rewards.map((item, index) => <li key={index}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="showmore-cols">
                                        <div className="heading">Eligibility Criteria and Prerequisites</div>
                                        <div className="redmore-cc">
                                            <ul className="list list-marked">
                                                {e.eligibility_prerequisites.map((item, index) => <li key={index}>{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" showmore-cols mt-3">
                                        <div className="heading">Documents</div>
                                        <div className="redmore-cc">
                                            {Object.keys(e.documents).map((k, i) => <div key={i}>{k}: {e.documents[k].join()}</div>)}
                                        </div>
                                    </div>
                                    <div className="showmore-cols mt-3">
                                        <div className="heading">Fees Information</div>
                                        <div className="redmore-cc">{e.fees}</div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                )
            })
        )
    }

    if (projState.ccOffers === null) {
        return <div>Please wait while we are fetching offers for you<br />Loading....</div>
    } else if (projState.ccOffers.length == 0) {
        return <div>No Offers to Show</div>
    }

    if (platform == 'mobile') {
        return (
            <div>
                <section style={styles.headingSectionCalculated}>
                    <div style={styles.headingSectionCalculated.subHeading}>As per provided information, below is your</div>
                    <div style={styles.headingSectionCalculated.h1}>Credit Card Eligibility</div>
                    <div style={styles.headingSectionCalculated.subHeading}>Please choose one offer from below to proceed</div>
                </section>
                <div>{renderOffers()}</div>
            </div>
        );
    }

    return (
        <div className="col-md-12 col-sm-12 d-flex p-0 flex-column offers-section text-center mt-5">
            <div className="col-md-11 p-0 d-flex flex-column align-self-center" style={{ flex: "none" }}>
                <h1 className="h1">
                    CREDIT CARD Eligibility
                </h1>
                <div className="text-left mb-1">Based on the provided details, Below is the list of eligible Credit Cards. Please choose one of your choice.</div>
                <section className="offers-section">
                    <div className="offers-head-div d-flex w-100">
                        <div className="offers-heading">Card Name</div>
                        <div className="offers-heading">Rewards</div>
                        <div className="offers-heading">Joining Fees</div>
                        <div className="offers-heading">Joining Perks</div>
                        <div className="offers-heading">Other Benefits</div>
                        <div className="offers-heading">Apply</div>
                    </div>
                    <div>{renderOffers()}</div>
                </section>
            </div>
        </div>
    );
}

export default Eligibility;