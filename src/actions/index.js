import { crm, site } from "../apis";

export const addCCDetails1 = () => {

    return async function (dispatch, getState) {

        let currState = await getState();
        let realFormVal = currState.form.creditCardForm1.values;
        let loanFormVal = { ...realFormVal, lead_source: 1 }

        var date = new Date(loanFormVal.dob);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        loanFormVal.dob = `${dd}/${mm}/${yyyy}`;

        const response = await crm.post(
            `LeadsApi/addCCDetails1`, loanFormVal, {
            headers: {
                Authorization: `Bearer ${currState.auth.token}`
            }
        }
        );
        const { data } = response;
        if (data.status == 'success') {

            let profile = {
                leadId: data.id,
                email: loanFormVal.email,
                gender: loanFormVal.gender,
                name: loanFormVal.name,
                dob: loanFormVal.dob,
                city: loanFormVal.city,
                company: loanFormVal.company,
                pincode: loanFormVal.pincode
            };
            await dispatch({ type: 'SET_AUTH', payload: { ...currState.auth, profile: profile, token: data.token } });
        }
        return data;
    }
}

export const addCCDetails2 = () => {

    return async function (dispatch, getState) {

        let currState = await getState();
        let loanFormVal = currState.form.creditCardForm2.values;

        console.log('loanFormVal2', loanFormVal);
        const response = await crm.post(
            `LeadsApi/addCCDetails2`, loanFormVal, {
            headers: {
                Authorization: `Bearer ${currState.auth.token}`
            }
        }
        );
        const { data } = response;
        if (data.status == 'success') {
            await dispatch({ type: 'SET_AUTH', payload: { ...currState.auth, token: data.token } });
        }
        return data;
    }
}

export const addCCDetailsFinal = (form) => {

    return async function (dispatch, getState) {

        let currState = await getState();

        let loanFormVal = currState.form[`creditCardForm${form}`].values;

        console.log(currState);

        const response = await crm.post(
            `LeadsApi/addCCDetails`, loanFormVal, {
            headers: {
                Authorization: `Bearer ${currState.auth.token}`
            }
        }
        );
        const { data } = response;
        return data;
    }
}

export const checkCCEligibility = () => {

    return async function (dispatch, getState) {
        let currState = await getState();
        if (currState.auth.token !== null) {

            const response = await crm.get(
                `LeadsApi/checkEligibility`, {
                headers: {
                    Authorization: `Bearer ${currState.auth.token}`
                }
            }
            );
            let { status, eligibility, leadData } = response.data;
            if (status == 'success') {
                await dispatch({ type: 'CC_ELIGIBLE_OFFERS', payload: eligibility });
                await dispatch({ type: 'SET_AUTH', payload: { ...currState.auth, profile: leadData } });
            }
        }
    }
}

export const applyForCard = (cardid) => {
    return async function (dispatch, getState) {
        let currState = await getState();

        const response = await crm.post(
            `LeadsApi/addCCName`, { cardid: cardid }, {
            headers: {
                Authorization: `Bearer ${currState.auth.token}`
            }
        }
        );
        const { data } = response;
        return data;
    }
}

export const uploadDocumentLaterEmail = () => {

    return async function (dispatch, getState) {
        let currState = await getState();
        let formval = currState.auth.profile

        let docurl = `https://www.iservefinancial.com/credit-card/thank-you/upload-documents?name=${formval.name}&mobile=${formval.mobile}&product=credit-card`;

        var formData = new FormData();

        formData.append('email', formval.email);
        formData.append('currentURL', docurl);
        formData.append('custName', formval.name);
        formData.append('mobile', formval.mobile);
        formData.append('product', 'credit-card');


        const response = await site.post(
            `mails/uploadLaterMails`, formData, {}
        );

        const { data } = response;

        return data;
    }
}

export const sendOTP = () => {
    return async function (dispatch, getState) {
        let currState = await getState();
        let formval = currState.form.creditCardForm1.values;

        const response = await crm.get(
            `LeadsApi/sendOTP/${formval.mobile}`, {}
        );
        const { data } = response;

        if (data.status == 'success') {

            await dispatch({ type: 'SET_AUTH', payload: { ...currState.auth, token: data.token } });
        }
    }
}

export const verifyOTP = (otp) => {
    return async function (dispatch, getState) {
        let currState = await getState();
        let formval = currState.form.creditCardForm1.values;

        let verification_data = {
            mobile: formval.mobile,
            otp: otp
        }

        const response = await crm.post(
            `LeadsApi/verifyOTP`, verification_data, {
            headers: {
                Authorization: `Bearer ${currState.auth.token}`
            }
        }
        );
        const { data } = response;
        console.log('data.status', data);
        if (data.status == 'success') {
            await dispatch({ type: 'SET_AUTH', payload: { ...currState.auth, mobile_verified: true, token: data.token } });
        }

        return data;
    }
}

export const fetchBanks = () => {
    return async function (dispatch, getState) {
        const response = await site.get(`utils/fetchAllBanks`);
        dispatch({ type: 'FETCH_BANKS', payload: response.data });
    }
}