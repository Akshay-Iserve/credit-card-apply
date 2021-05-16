const validate = values => {

    const errors = {};

    if (!values.income_pm_net) {
        errors.income_pm_net = 'Please enter a valid Monthly Income';
    } else if (!/^[0-9]+$/.test(values.income_pm_net)) {
        errors.income_pm_net = 'Please enter only Digits';
    } else if (values.income_pm_net < 1000) {
        errors.income_pm_net = 'Please enter a valid monthly income';
    }

    if (!values.income_pm_gross) {
        errors.income_pm_gross = 'Please enter a valid Monthly Income';
    } else if (!/^[0-9]+$/.test(values.income_pm_gross)) {
        errors.income_pm_gross = 'Please enter only Digits';
    } else if (values.income_pm_gross < 1000) {
        errors.income_pm_gross = 'Please enter a valid monthly income';
    }

    if (!values.company) {
        errors.company = 'Name is required';
    }

    if (!values.email) {
        errors.email = 'Email ID is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.dob) {
        errors.dob = 'Date Of Birth is Required';
    }

    if (!values.mobile) {
        errors.mobile = 'Mobile No. is Required';
    } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
        errors.mobile = 'Invalid contact number';
    }

    if (!values.name) {
        errors.name = 'Name is required';
    } else if (!/^[^-\s][a-zA-Z \s]+$/i.test(values.name)) {
        errors.name = 'Invalid name';
    }

    if (!values.city) {
        errors.city = 'City name is Required';
    }

    if (!values.pincode) {
        errors.pincode = 'Pincode is Required';
    } else if (!/^([1-9]{1}[0-9]{5})$/.test(values.pincode)) {
        errors.pincode = 'Invalid Pincode';
    }

    if (!values.pan) {
        errors.pan = 'PAN number Required';
    } else if (!/^([A-Za-z ]){5}([0-9]){4}([A-Za-z ]){1}?$/.test(values.pan)) {
        errors.pan = 'Please Enter a valid pan card number';
    }

    if (!values.salary_account_bank) {
        errors.salary_account_bank = 'select mode of salary';
    }


    const membersArrayErrors = [];

    if (values.active_cc == 'yes') {
        if (!values.existing_credit_cards || !values.existing_credit_cards.length) {
            errors.existing_credit_cards = { _error: 'please enter at least one credit card details' }
        } else {
            values.existing_credit_cards.forEach((member, memberIndex) => {
                const memberErrors = {}
                if (!member || !member.bank_id) {
                    memberErrors.bank_id = 'please select a credit card bank';
                    membersArrayErrors[memberIndex] = memberErrors;
                }
                if (!member || !member.credit_limit) {
                    memberErrors.credit_limit = 'please enter card limit';
                    membersArrayErrors[memberIndex] = memberErrors;
                } else if (!/^[0-9]+$/.test(member.credit_limit)) {
                    memberErrors.credit_limit = 'please digits only';
                    membersArrayErrors[memberIndex] = memberErrors;
                } else if (member.credit_limit < 10000) {
                    memberErrors.credit_limit = 'card limit cannot be < 10000';
                    membersArrayErrors[memberIndex] = memberErrors;
                }
                if (!member || !member.card_age) {
                    memberErrors.card_age = 'Please select Age of card'
                    membersArrayErrors[memberIndex] = memberErrors
                }
            })
        }
    }

    if (membersArrayErrors.length) {
        errors.existing_credit_cards = membersArrayErrors
    }

    if (!values.qualification) {
        errors.qualification = 'enter your educational qualification';
    }

    if (!values.designation) {
        errors.designation = 'enter your designation';
    }

    if (!values.work_experience) {
        errors.work_experience = 'please select your total work experience';
    }

    if (!values.official_email) {
        errors.official_email = 'email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.official_email)) {
        errors.official_email = 'invalid email address';
    }

    if (!values.office_city) {
        errors.office_city = 'city is required';
    }
    if (!values.office_state) {
        errors.office_state = 'state is required';
    }

    if (!values.office_pincode) {
        errors.office_pincode = 'pincode is required';
    } else if (!/^([1-9]{1}[0-9]{5})$/.test(values.office_pincode)) {
        errors.office_pincode = 'invalid pincode';
    }

    if (!values.residence_type) {
        errors.residence_type = 'please select your Residence Type';
    }

    if (!values.current_address) {
        errors.current_address = 'please enter your current address';
    }

    if (!values.current_area) {
        errors.current_area = 'please enter your residence locality';
    }

    if (!values.current_city) {
        errors.current_city = 'please enter your city';
    }
    if (!values.current_state) {
        errors.current_state = 'enter your state';
    }

    if (!values.company) {
        errors.company = 'please enter your company';
    }

    if (!values.current_pincode) {
        errors.current_pincode = 'Pincode is Required';
    } else if (!/^([1-9]{1}[0-9]{5})$/.test(values.office_pincode)) {
        errors.current_pincode = 'Invalid Pincode';
    }

    return errors;
}

export default validate;