// TODO WHEN NO TASKS ARE ADDED, THERE SHOULD BE SOME TEXT IN CENTER, SHOULDNT LOOK EMPTY
// TODO ADD MINIMUM $ MAXIMUM HEIGHT TO TASKS CARD
// TODO OPTION TO SELECT COLOR OF TASKS CARD
// TODO DELETE TASKS OPTION
// TODO EDIT TASKS OPTION
// TODO UNDO TASK CREATION WITH TOAST
// TODO TIMEPICKER FOR DEADLINE OF TASK
// TODO ADD FLOATING BUTTON FOR ADDING TASKS
// TODO SORTING OPTIONS
// TODO RESPONSIVE PAGE
// TODO LOCAL STORAGE
// TODO TEST APP WITH COOKIE DELETER
// TODO ANIMATIONS
// TODO USE THAT AUTOMATIC TYPER PLUGIN
// TODO PUNISHING FOR NOT COMPLETING BEFORE DEADLINE
// TODO IMPLEMENT MODULE PATTERN
// TODO MAKE IT A PROGRESSIVE WEB APP (PWA)

//----------------------  JQUERY INIT FOR MATERIALIZE --------------------------cd cd CW

$(document).ready(function () {
    $('.modal').modal({
        dismissible: true,
    });

    $('select').material_select();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false, // Close upon selecting a date,
        format: 'mm/dd/yyyy'
    });

    // $('.timepicker').pickatime({
    //     default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    //     fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    //     twelvehour: false, // Use AM/PM or 24-hour format
    //     donetext: 'OK', // text for done-button
    //     cleartext: 'Clear', // text for clear-button
    //     canceltext: 'Cancel', // Text for cancel-button
    //     autoclose: false, // automatic close timepicker
    //     ampmclickable: true, // make AM PM clickable
    // });
});

//----------------------------------------------------------------------------

const taskName = document.getElementById('task_name');
const deadlineDay = document.getElementById('date_pick');
const description = document.getElementById('description');
const priority = document.querySelector('select');
const submitBtn = document.querySelector('.submit_btn');
const task_card = document.querySelector('.tasks_card');

let card, card_div, card_sub_div, card_title, card_des, card_date, card_priority;

// ----------------------------- Creating DIV Structure For Adding Tasks ---------------------------------------

function createDivStructure() {
    card = document.createElement('div');
    card_div = document.createElement('div');
    card_sub_div = document.createElement('div');

    card.className = 'col s12 m3';
    card_div.className = 'card orange lighten-2 hoverable';
    card_sub_div.className = 'card-content white-text card_content';

    card_div.appendChild(card_sub_div);
    card.appendChild(card_div);
}

//------------------------------------- Adding of Tasks to Card ------------------------------------

function addTask() {
    card_title = document.createElement('span');
    card_title.className = 'card-title center-align';
    card_title.appendChild(document.createTextNode(taskName.value));

    card_des = document.createElement('p');
    card_des.appendChild(document.createTextNode(description.value));

    card_date = document.createElement('p');
    card_date.appendChild(document.createTextNode('Task Ends On: ' + deadlineDay.value));

    card_priority = document.createElement('p');
    card_priority.appendChild(document.createTextNode(priority.value));

    card_sub_div.appendChild(card_title);
    card_sub_div.appendChild(card_des);
    card_sub_div.appendChild(card_date);
    card_sub_div.appendChild(card_priority);
    task_card.appendChild(card)
}

// --------------------------------  Clears Values After Task Creation -------------------------------------

function clear_values() {
    taskName.value = '';
    deadlineDay.value = '';
    description.value = '';
    priority.value = '';
}

// -------------------------------- Validates Inputs in Form ------------------------------------

function form_validator() {

    if (taskName.value === '') {
        Materialize.toast('Please Name Your Task', 2000, 'rounded');
        submitBtn.classList.remove('modal-close')

    } else if (deadlineDay.value === '') {
        Materialize.toast('Please Add Deadline Day', 2000, 'rounded');
        submitBtn.classList.remove('modal-close')

    } else if ((new Date(deadlineDay.value)) < new Date()) {
        Materialize.toast('Date Cannot Be In Past', 2000, 'rounded')
        submitBtn.classList.remove('modal-close')

    } else if (description.value.length > 70) {
        Materialize.toast('Description Character Length Exceeded', 2000, 'rounded');
        submitBtn.classList.remove('modal-close')

    } else if (priority.value === '') {
        Materialize.toast('Please Add Priority', 2000, 'rounded');
        submitBtn.classList.remove('modal-close')

    } else {
        submitBtn.classList.add('modal-close');
        createDivStructure();
        addTask();
        clear_values();
        Materialize.toast('New Task Created', 2000, 'rounded')
    }
}

submitBtn.addEventListener('click', form_validator);





























