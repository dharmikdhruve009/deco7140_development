
/*import { fetchGetData } from '.js/modules/getData.js';
                    
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('community-list');

    fetchGetData('https://yourdomain/api/community/', {
        'student_number': 's4854993',
        'uqcloud_zone_id': '33ba08a0'
    }).then(data => {
        if (!data) {
        container.innerHTML = '<p class="text-danger">Unable to load community members.</p>';
        return;
        }

        data.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.message || 'No message provided.'}</p>
            </div>
        `;
        container.appendChild(card);
        });
    });
});*/

import { initAccordion } from './modules/accordion.js';

document.addEventListener('DOMContentLoaded', () => {
    initAccordion('.accordion');
});