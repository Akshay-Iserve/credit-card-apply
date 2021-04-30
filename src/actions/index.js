import { crm, site } from "../apis";

export const addCreditCardLead = () => {

    return async function (dispatch, getState) {

        let currState = await getState();

        let realFormVal = currState.form.form.values;
        let loanFormVal = { ...realFormVal }

        var form_data = new FormData();

        for (let key in loanFormVal) {

            form_data.append(key, loanFormVal[key]);
        }

        form_data.append('lead_source', 1);


        const response = await crm.post(
            `LeadsApi/ccApi`, form_data, {}
        );
        const { data } = response;

        console.log('data', data);
    }
}

export const fetchBanks = () => {

}