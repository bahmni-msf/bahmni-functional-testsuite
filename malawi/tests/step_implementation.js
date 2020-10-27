/* globals gauge*/
let locators;
let data;
let patient_identifier;

const {openBrowser, write, screenshot, click, dropDown, closeBrowser, goto, into, press, below, waitFor, text, $, link, toLeftOf, toRightOf, goBack} = require('taiko');

beforeSuite(async () => {
    await openBrowser({ignoreCertificateErrors: true, headless: true});
    locators = require('../utils/Locators');
    data = require('../test_data/Data');
});


afterSuite(async () => {
    await closeBrowser();
});


step('Goto QA Malawi Home page', async () => {
    await goto('https://qa-malawi.ehealthunit.org/bahmni/home/index.html#/login')
});


step("User Login", async () => {
    await write(data.patient_info.username, into(locators.login_screen.username_field));
    await write(data.patient_info.password, into(locators.login_screen.password_field));
    await dropDown(locators.login_screen.location_field).select(data.patient_info.login_location);
    await click(locators.login_screen.confirm_button)
});


step("Select option", async () => {
    await waitFor(5000)
    try {
        await click(locators.dashboard_options.registration);
    } catch (error) {
        console.error(error);
    }
});

step("Select Create New Patient option", async () => {
    await waitFor(5000);
    await click(locators.registration_Screen.create_patient_option)
});

step("Add New Patient Details", async () => {
    await write(data.patient_info.patient_first_name, into(locators.create_patient_screen.patient_first_name_field));
    await write(data.patient_info.patient_middle_name, into(locators.create_patient_screen.patient_middle_name_field));
    await write(data.patient_info.patient_last_name, into(locators.create_patient_screen.patient_last_name_field));
    await dropDown(locators.create_patient_screen.patient_gender_field).select(data.patient_info.patient_gender);
    await click(locators.create_patient_screen.patient_age_years);
    await write(data.patient_info.patient_age_year);
    await click(locators.create_patient_screen.patient_age_months);
    await write(data.patient_info.patient_age_months);
    await click(locators.create_patient_screen.patient_age_days);
    await write(data.patient_info.patient_age_days);
    await click(locators.create_patient_screen.patient_house_number);
    await write(data.address_info.house_number);
    await click(locators.create_patient_screen.patient_village);
    await write(data.address_info.village_name);
    await click(locators.create_patient_screen.patient_village_headman);
    await write(data.address_info.village_headman_name);
    await click(locators.create_patient_screen.patient_address_description);
    await write(data.address_info.addess_description);
    await click(locators.create_patient_screen.patient_nearest_health_facility);
    await write(data.address_info.health_facility);
    await click(locators.create_patient_screen.patient_traditional_authority);
    await write(data.address_info.traditional_authority);
    await click(locators.create_patient_screen.patient_district);
    await write(data.address_info.district_name);
    await click(locators.create_patient_screen.patient_region);
    await write(data.address_info.region_name);
    await click(locators.create_patient_screen.patient_country);
    await write(data.address_info.country_name);
    await click(locators.create_patient_screen.patient_national_id);
    await write(data.patient_contact_details.national_identifier);
    await dropDown(locators.create_patient_screen.patient_contact1_relationship).select(data.patient_contact_details.relationship_name);
    await click(locators.create_patient_screen.patient_contact1_comments);
    await write(data.patient_contact_details.patient_comments);
    await click(locators.create_patient_screen.patient_contact1_phone);
    await write(data.patient_contact_details.phone_number);
    await click(locators.create_patient_screen.patient_emergency_contact_name);
    await write(data.emergency_contact_info.contact_name);
    await dropDown("Relationship", below('Primary  Emergency Contact')).select(data.emergency_contact_info.emergency_contact_relationship_name);
    await click(locators.create_patient_screen.patient_emergency_contact_phone);
    await write(data.emergency_contact_info.phone_number2);
    await click(locators.create_patient_screen.save_patient_button);
    patient_identifier = await (locators.create_patient_screen.patient_identifier).text();
    console.log(patient_identifier);
    await screenshot({fullPage: true});
});

step("Search Patient Details", async () => {
    await waitFor(2000);
    await click(locators.registration_Screen.search_button);
    await write(data.address_info.country_name, into(locators.registration_Screen.search_by_country_name));
    await press("Tab");
    await press("Enter");
    await text(data.patient_info.patient_full_name).exists();
    await text(data.patient_info.patient_age_year).exists();
    await text(data.address_info.country_name).exists();
    await click(link(toLeftOf(data.patient_info.patient_first_name)));
    await waitFor(3000);
    await text(locators.create_patient_screen.print_sticker_button).exists();
    await click(locators.create_patient_screen.start_opd_visit_button);
    await screenshot({fullPage: true})

});

step("Select Patient Medical Doc Upload", async () => {
    await waitFor(5000);
    await click(locators.dashboard_options.document_upload);
    await waitFor(5000);
    await text(locators.document_upload_screen.active_patients_tab).exists();
    await click(locators.document_upload_screen.all_patients_tab);
    await waitFor(5000);
    await write(patient_identifier, into(locators.document_upload_screen.search_patient));
    await click('Search');
    await text(data.patient_info.patient_name).exists();
    await text(patient_identifier).exists();
    gauge.screenshot();
});

step("Navigate to Dashboard", async () => {
    await waitFor(5000);
    await click($('.back-btn'));
    await waitFor(5000);
    await text(locators.dashboard_options.registration).exists();
    gauge.screenshot();
});

step("Navigate to Programs", async () => {
    await waitFor(10000);
    await text(locators.dashboard_options.programs).exists();
    await click(locators.dashboard_options.programs);
    await waitFor(10000);
    await click(locators.programs_screen.active_tab);
    await waitFor(10000);
    await write(patient_identifier, into(locators.programs_screen.search_patient_field));
    await waitFor(10000);
    await text(data.patient_info.patient_name).exists();
    await text(patient_identifier).exists();
    await click(locators.programs_screen.all_tab);
    await waitFor(10000);
    await write(data.patient_info.patient_first_name, into(locators.programs_screen.search_patient_field));
    await waitFor(10000);
    await text(data.patient_info.patient_name).exists();
});

step("create new program", async () => {
    await waitFor(10000);
    await click(locators.programs_screen.active_tab);
    await waitFor(10000);
    await write(patient_identifier, into(locators.programs_screen.search_patient_field));
    await waitFor(10000);
    await text(data.patient_info.patient_name).exists();
    await click(patient_identifier);
    await waitFor(10000);
    await text(data.patient_info.patient_name).exists();
    await text(patient_identifier).exists();
    await click(locators.new_program_enrolment.new_program_button);
    await waitFor(10000);
    await dropDown().select(data.program_info.program_name);
    await waitFor(10000);
    await press("Tab");
    await waitFor(10000);
    await press("Tab");
    await waitFor(10000);
    await press("Tab");
    await waitFor(10000);
    await write(data.program_info.program_start_date_value);
    await click(locators.new_program_enrolment.enroll_button);
    await waitFor(10000);
    await screenshot({fullPage: true})

    /*
     await click('Oncogynae Dashboard');
     await screenshot({fullPage: true})
     await text('Active Programs').exists();

     */
});

step('Navigate back to dashboard', async () =>{
    await waitFor(10000);
    await goBack();
    await waitFor(10000);
    await goBack();
    await waitFor(10000);
    await text(locators.dashboard_options.programs).exists();
    await waitFor(10000);
    await screenshot({fullPage: true})

});

step("Edit Program", async () => {
    await waitFor(10000);
    await click('Edit');
    await waitFor(10000);
    await click(dropDown(toRightOf('Program State')));
    await click('Follow Up Phase');
    //await dropDown().select('Follow Up Phase');
    await waitFor(10000);
    await click('Save');
    await waitFor(10000);
    await text(data.program_info.program_state_text).exists();
    await screenshot({fullPage: true})
});

step("Navigate to OT", async () => {
    await waitFor(10000);
    await text(locators.dashboard_options.operation_theatre).exists();
    await click(locators.dashboard_options.operation_theatre);
    await waitFor(10000);
    await screenshot({fullPage: true})
});

step("Select Surgical Queues", async () => {
    await waitFor(10000);
    await text(locators.operation_theatre_screen.to_be_scheduled_tab).exists();
    await waitFor(10000);
    await click(locators.operation_theatre_screen.scheduled_tab);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.to_be_scheduled_tab);
    await waitFor(10000);
    await screenshot({fullPage: true})
});

step("Create Surgical Block", async () => {
    await waitFor(10000);
    await click(locators.operation_theatre_screen.ot_scheduling_tab);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.create_surgical_block);
    await waitFor(10000);
    await dropDown().select(data.operation_theatre_info.surgeon_name);
    await waitFor(10000);
    await click(data.operation_theatre_info.ot_location);
    await waitFor(10000);
    await press("Tab");
    await waitFor(10000);
    await write(data.operation_theatre_info.surgery_date);
    await waitFor(10000);
    await press("Tab");
    await write(data.operation_theatre_info.surgery_time);
    await waitFor(10000);
    await press('ArrowUp');
    await click(locators.operation_theatre_screen.save_button);
    await screenshot({fullPage: true})

});

step("Add Surgery", async () => {
    await waitFor(10000);
    await click(locators.operation_theatre_screen.add_surgery_button);
    await waitFor(10000);
    await write(patient_identifier, into(locators.operation_theatre_screen.patient_id));
    await waitFor(10000);
    await click(patient_identifier);
    await waitFor(10000);
    await write(data.operation_theatre_info.procedure, into(locators.operation_theatre_screen.procedure_textbox));
    await waitFor(10000);
    await write(data.operation_theatre_info.est_hours, into(locators.operation_theatre_screen.estimated_hours));
    await waitFor(10000);
    await write(data.operation_theatre_info.est_minutes, into(locators.operation_theatre_screen.estimated_minutes));
    //await waitFor(10000);
    //await write('20', into(locators.operation_theatre_screen.cleaning_time));
    await waitFor(10000);
    await write(data.operation_theatre_info.notes, into(locators.operation_theatre_screen.notes_textbox));
    await waitFor(10000);
    await screenshot({fullPage: true});
    await click(locators.operation_theatre_screen.add_button);
    await waitFor(10000);
    await screenshot({fullPage: true});
    await click(locators.operation_theatre_screen.save_button);
    await waitFor(10000);
    await screenshot({fullPage: true});
});

step("OT Scheduling", async () =>{
    await waitFor(10000);
    await click(locators.operation_theatre_screen.ot_scheduling_tab);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.list_view);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.week_view);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.day_view);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.calendar_view);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.week_view);
    await waitFor(10000);
    await click(locators.operation_theatre_screen.day_view);
    await waitFor(10000);
    await screenshot({fullPage: true});
    await click($('.back-btn'))
    await waitFor(10000);
    await screenshot({fullPage: true});
});

step("Navigate to Bed Management", async () =>{
    await waitFor(10000);
    await text(locators.dashboard_options.bed_management).exists();
    await waitFor(10000);
    await click(locators.dashboard_options.bed_management);
    await waitFor(10000);
    await screenshot({fullPage: true});
});


step("Bed Management Queues", async () =>{
    await waitFor(10000);
    await text(locators.bed_management_screen.queue_one).exists();
    await waitFor(10000);
    await click(locators.bed_management_screen.queue_one);
    await waitFor(10000);
    await text(locators.bed_management_screen.queue_two).exists();
    await waitFor(10000);
    await click(locators.bed_management_screen.queue_two);
    await waitFor(10000);
    await text(locators.bed_management_screen.all_patients_queue).exists();
    await waitFor(10000);
    await click(locators.bed_management_screen.all_patients_queue);
    await waitFor(10000);
    await screenshot({fullPage: true});
});

step("Admit a patient to Bed", async () =>{
    await waitFor(10000);
    await click(locators.bed_management_screen.all_patients_queue);
    await waitFor(10000);
    await write(patient_identifier, into(locators.programs_screen.search_patient_field));
    await waitFor(10000);
    await waitFor(10000);
    await click(locators.bed_management_screen.search);
    await text(data.patient_info.patient_name).exists();
    await text(patient_identifier).exists();
    //await click(patient_identifier);
    await waitFor(10000);
    await click($('.bed-type-selection'));
    await waitFor(10000);
    await click(locators.bed_management_screen.ward_one);
    await waitFor(10000);
    await click(locators.bed_management_screen.bed_number);
    await waitFor(10000);
    await click(locators.bed_management_screen.admit);
    await waitFor(10000);
    await click(locators.bed_management_screen.confirm_button);
    await waitFor(10000);
    await screenshot({fullPage: true});
});
step("Discharge a patient", async () =>{
    await waitFor(10000);
    await click(locators.bed_management_screen.discharge);
        await waitFor(10000);
        await click(locators.bed_management_screen.confirm_discharge);
        await waitFor(10000);
        await screenshot({fullPage: true});
});
step("Bed Management Wards", async () =>{
    await waitFor(10000);
    await click(locators.dashboard_options.bed_management);
    await waitFor(10000);
    await click(locators.bed_management_screen.department);
    await waitFor(10000);
    await click(locators.bed_management_screen.ward_one);
    await waitFor(10000);
    await click(locators.bed_management_screen.switch_view);
    await screenshot({fullPage: true});
    await waitFor(10000);
    await click(locators.bed_management_screen.ward_two);
    await waitFor(10000);
    await click(locators.bed_management_screen.switch_view);
    await screenshot({fullPage: true});
    await screenshot({fullPage: true});
});

step("Logout", async () => {
    await waitFor(10000);
    await click($('.back-btn'));
    await waitFor(10000);
    await click(locators.dashboard_options.user_info_button);
    await waitFor(10000);
    await click(locators.dashboard_options.logout_button);
    await text(locators.login_screen.login_header).exists();
    await screenshot({fullPage: true})
});
