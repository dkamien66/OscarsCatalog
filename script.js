import { award_data } from './oscars_data.js'

const content = document.getElementById('content')

document.querySelectorAll('.year-btn').forEach(button => {
    button.addEventListener('click', () => {
        const year = button.getAttribute('data-year')
        const data = award_data[year]

        if (data) {
            content.innerHTML = `
                <h1>
                    Awards for ${year}
                    <br>
                    <a style="font-size: 14px" href="${data.main_link}">
                        Click here for details
                    </a>
                </h1>

                <section class="right-aligned">
                    <iframe width="420" height="315" src="${data.best_actor_link}"></iframe>
                    <h2>
                        Best Actor: 
                        ${data.best_actor_details}
                    </h2>
                </section>
                <br>

                <section class="left-aligned">
                    <h2>
                        Best Supporting Actor: 
                        ${data.best_supporting_actor_details}
                    </h2>
                    <iframe width="420" height="315" src="${data.best_supporting_actor_link}"></iframe>
                </section>
                <br>

                <section class="right-aligned">
                    <iframe width="420" height="315" src="${data.best_actress_link}"></iframe>
                    <h2>
                        Best Actress: 
                        ${data.best_actress_details}
                    </h2>
                </section>
                <br>

                <section class="left-aligned">
                    <h2>
                        Best Supporting Actress: 
                        ${data.best_supporting_actress_details}
                    </h2>
                    <iframe width="420" height="315" src="${data.best_supporting_actress_link}"></iframe>
                </section>
                <br>
            `;
        } else {
            content.innerHTML = `<h1>No data for ${year}</h1>`;
        }
    });
});