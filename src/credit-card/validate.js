const validate = values => {

    const errors = {};

    if (!values.income_pm_net) {
        errors.income_pm_net = 'Please enter a valid loan amount'
    }

    if (!values.income_pm_gross) {
        errors.income_pm_gross = 'Please enter a valid loan amount'
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

    if (!values.profession) {
        errors.profession = 'Enter your Current Profession';
    }

    if (!values.qualification) {
        errors.qualification = 'Enter your educational qualification';
    }

    if (!values.loan_type) {
        errors.loan_type = 'Please Select a Product';
    }


    if (!values.gender) {
        errors.gender = 'Select a Gender';
    }
    if (!values.bank_id) {
        errors.bank_id = 'Select a Gender';
    }
    if (!values.salary) {
        errors.salary = 'Please enter a valid Monthly Income';
    } else if (!/^[0-9]+$/.test(values.salary)) {
        errors.salary = 'Please enter only Digits';
    } else if (values.salary < 1000) {
        errors.salary = 'Please enter a valid monthly income';
    }
    if (!values.company) {
        errors.company = 'Company name Required';
    }
    if (!values.emi) {
        errors.emi = 'Enter existing emi if any else enter 0';
    } else if (!/^[0-9]+$/.test(values.emi)) {
        errors.emi = 'Enter a valid EMI';
    } else if (Number(values.emi) >= Number(values.salary)) {
        errors.emi = 'EMI sholud not be grater than salary';
    }
    return errors;
}

export default validate;