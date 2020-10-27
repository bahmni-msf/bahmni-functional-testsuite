const { openBrowser,write,click, dropDown, closeBrowser, goto, into, press, screenshot, below, waitFor, textBox, text, $, link, toLeftOf } = require('taiko');

class Locators {


    constructor() {
        this.login_screen ={

            username_field: textBox({placeholder: 'Enter your username'}),
            password_field: textBox({placeholder: "Enter your password"}),
            location_field: {id: 'location'},
            confirm_button: $(".confirm"),
            login_header: 'Login'
        };
        this.dashboard_options ={

            registration: "Registration",
            document_upload: 'Patient Medical Doc Upload',
            programs: 'Programs',
            operation_theatre: 'Operation Theatre',
            bed_management: 'Bed Management',
            logout_button: 'Logout',
            user_info_button: $('.btn-user-info.fr'),
        };
        this.registration_Screen={
            create_patient_option: "Create New",
            search_by_country_name: textBox({placeholder: "Enter Country Name"}),
            search_button: "Search",

        };
        this.create_patient_screen={
            patient_first_name_field: textBox({placeholder: "First Name"}),
            patient_middle_name_field: textBox({placeholder: "Middle Name"}),
            patient_last_name_field: textBox({placeholder: "Surname"}),
            patient_gender_field: {id: 'gender'},
            patient_age_years: $("#ageYears"),
            patient_age_months: $("#ageMonths"),
            patient_age_days:$("#ageDays"),
            patient_house_number: "House number, street",
            patient_village: "Village/Neighborhood",
            patient_village_headman: "Village Headman",
            patient_address_description: "Address description",
            patient_nearest_health_facility: "Nearest health facility to home",
            patient_traditional_authority: "Traditional Authority/Town",
            patient_district: "District/City",
            patient_region: "Region",
            patient_country: "Country",
            patient_national_id: "National ID",
            patient_contact1_relationship: 'Relationship',
            patient_contact1_comments: "Patient Contact, comments",
            patient_contact1_phone: "Phone",
            patient_emergency_contact_name: "Name",
            patient_emergency_contact_phone: "Phone 1",
            save_patient_button: "Save",
            print_sticker_button: 'Print Sticker',
            start_opd_visit_button: 'Start OPD Visit',
            patient_identifier:$("#patientIdentifierValue")
        };
        this.programs_screen = {

            active_tab: 'Active ',
            all_tab: 'All',
            search_patient_field: $("#patientIdentifier")
        };
        this.new_program_enrolment ={

            new_program_button: 'New Program Enrollment',
            choose_program_state: 'Follow Up Phase',
            program_start_date: 'dd/mm/yyyy',
            enroll_button: 'Enroll'

        };
        this.document_upload_screen = {
            active_patients_tab: 'Active Patients',
            all_patients_tab: 'All Patients',
            search_patient: textBox({placeholder: 'Search Name/ID  ...'}),
        };

        this.operation_theatre_screen = {
            to_be_scheduled_tab: 'To Be Scheduled ',
            scheduled_tab: 'Scheduled ',
            ot_scheduling_tab: 'OT Scheduling',
            create_surgical_block: 'New Surgical Block',
            add_surgery_button: 'Add Surgery',
            patient_id: $("#patientID"),
            procedure_textbox: $("#procedureID"),
            estimated_hours: $("#estTimeHoursID"),
            estimated_minutes: $("#estTimeMinutesID"),
            cleaning_time: $("#cleaningTimeID"),
            notes_textbox: $("#notesID"),
            save_button: 'Save',
            add_button: 'Add',
            list_view: 'List View',
            week_view: 'Week',
            day_view: 'Day',
            calendar_view: 'Calendar'
        };
        this.bed_management_screen = {
            queue_one: 'Admitted to Supportive Care Ward ',
            queue_two: 'Admitted to Supportive Care Ward ',
            all_patients_queue: 'All',
            search: 'Search',
            ward_one: 'Supportive Care Ward ( 10 )',
            ward_two: 'Surgical Ward ( 10 )',
            bed_number: '13',
            admit: 'Admit',
            confirm_button: 'Yes',
            discharge: 'Discharge',
            confirm_discharge: $('#modal-revise-button1'),
            department: 'Inpatient Department',
            switch_view: $('.switch-bed-views'),







        }
    }
}
module.exports = new Locators();
