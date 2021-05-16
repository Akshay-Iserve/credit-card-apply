import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./DesktopApplyForm.css";


const styles = {
    formSection: {
        background: '#005387',
        color: '#fff',
        fontSize: 15,
        h1: {
            fontSize: 24,
            textAlign: 'center',
            color: '#fff',
            fontWeight: 400
        }
    },
    breadcrumb: {
        backgroundColor: 'transparent',
        item: {
            color: '#fff',
            fontSize: 13,
            a: {
                color: '#fff',
                fontSize: 13
            }
        },
    },
}

const renderBreadCrumb = (breadcrumb) => {
    return (
        <nav className="navbar-dark">
            <ol className="breadcrumb mb-0" style={styles.breadcrumb}>
                {
                    breadcrumb.map((e, i) => {
                        return (
                            <li key={i} className="breadcrumb-item" style={styles.breadcrumb.item}>
                                {e.href && <a style={styles.breadcrumb.item.a} href={e.href}>{e.label}</a>}
                                {e.link && <Link style={styles.breadcrumb.item.a} to={e.href}>{e.label}</Link>}
                                {!e.href && !e.link && e.label}
                            </li>
                        )
                    })
                }
            </ol>
        </nav>
    );
}

const DesktopForm = (props) => {
    return (
        <section className={`form-section pb-${props.narrowForm ? 2 : 5}`} style={styles.formSection}>
            {props.breadcrumb ? renderBreadCrumb(props.breadcrumb) : null}
            {props.h1 && <h1 style={styles.formSection.h1}>{props.h1}</h1>}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center pt-3">
                <div className={`col-lg-${props.narrowForm ? 12 : 10} col-sm-12 col-md-10 col-xs-12 row justify-content-center p-mobile-0`}>
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default DesktopForm;