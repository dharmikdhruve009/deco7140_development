/**
* IMPORTS
* Keep track of external modules being used

* */

/**
 * CONSTANTS
 * Define values that don't change e.g. page titles, URLs, etc.
 * */

/**
 * VARIABLES
 * Define values that will change e.g. user inputs, counters, etc.
 * */

/**
 * FUNCTIONS
 * Group code into functions to make it reusable
 * */

/**
 * EVENT LISTENERS
 * The code that runs when a user interacts with the page
 * */

// In your js/PAGE_NAME.js file
import postFormData from '.js/modules/postFormData.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('community-form');
    const feedback = document.getElementById('form-feedback');

    if (!form || !feedback) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = 'Submitting...';

        const { success, data } = await postFormData(
            form,
            'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community/',
            {
                student_number: 's4854993',
                uqcloud_zone_id: '33ba08a0'
            }
        );

        if (success) {
            feedback.textContent = data.message;
            form.reset();
        } else {
            feedback.textContent = data.message || 'Something went wrong.';
        }
    });
});
// when the page fully loads/*

