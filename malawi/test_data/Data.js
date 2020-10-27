class Data{
    constructor() {
        const patient_country = Math.random().toFixed(3)*1000;
        this.patient_info =
            {
                //Edit the Patient Name.
                username: 'superman',
                password: 'Admin123',
                login_location: 'OPD',
                patient_first_name: 'Automation',
                patient_middle_name: 'taiko',
                patient_last_name: 'gauge',
                patient_gender: 'Male',
                patient_age_year: '21',
                patient_age_months: '6',
                patient_age_days: '10',
                patient_full_name: 'Automation taiko gauge',
                patient_name: 'Automation gauge',
            };
            this.address_info = {

                house_number: '190',
                village_name: 'Shadnagar',
                village_headman_name: 'kc',
                addess_description: 'Home',
                health_facility:'Care Hospital',
                traditional_authority: 'Sadzi',
                district_name: 'Zomba Urban',
                region_name: 'south',
                country_name: patient_country
                };
             this.patient_contact_details = {

                 national_identifier: '123456',
                 patient_comments: 'contact details',
                 phone_number: '9888888888',
                 relationship_name: 'Patient',
             };
             this.emergency_contact_info = {

                contact_name: 'taiko',
                phone_number2: '9999999999',
                 emergency_contact_relationship_name: 'Child',
            };
            this.program_info = {
                program_name: 'Oncogynae',
                program_state: 'Follow Up Phase',
                program_state_text: 'Program State: Follow Up Phase',
                program_start_date_value: '01/04/2020',
            };
            this.operation_theatre_info = {
                surgeon_name: 'George Chilinda',
                ot_location: 'OT1',
                surgery_date: '09/06/2021',
                surgery_time: '09:30',
                procedure: 'Follow',
                est_hours: '1',
                est_minutes: '3',
                notes: 'automation surgery',
            }

    }
}
module.exports = new Data();
