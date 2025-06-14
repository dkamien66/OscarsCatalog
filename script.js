const content = document.getElementById('content')

const award_data = {
    "2025": {
        main_link: "https://www.oscars.org/oscars/ceremonies/2025",
        best_actor_link: "https://youtube.com/embed/u8-8PYURHdY",
        best_actor_details: "Adrien Brody in 'The Brutalist'",
        best_actress_link: "https://youtube.com/embed/Ni44FwTgvzo",
        best_actress_details: "Mikey Madison in 'Anora'",
        best_supporting_actor_link: "https://youtube.com/embed/QnnY4j-zASk",
        best_supporting_actor_details: "Kieran Culkin in 'A Real Pain'",
        best_supporting_actress_link: "https://youtube.com/embed/HLaXEgzFucM",
        best_supporting_actress_details: "Zoe Saldaña in 'Emilia Pérez'",

    },
    "2024": {
        best_actor_link: "https://youtube.com/embed/nUg-dZMrEjA",
        best_actor_details: "Cillian Murphy in 'Oppenheimer'"
    }
}

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

                <section>
                    <iframe width="420" height="315" src="${data.best_actor_link}"></iframe>
                    <h2>Best Actor: ${data.best_actor_details}</h2>
                </section>
                <br>

                <section>
                    <iframe width="420" height="315" src="${data.best_supporting_actor_link}"></iframe>
                    <h2>Best Supporting Actor: ${data.best_supporting_actor_details}</h2>
                </section>
                <br>

                <section>
                    <iframe width="420" height="315" src="${data.best_actress_link}"></iframe>
                    <h2>Best Actress: ${data.best_actress_details}</h2>
                </section>
                <br>

                <section>
                    <iframe width="420" height="315" src="${data.best_supporting_actress_link}"></iframe>
                    <h2>Best Supporting Actress: ${data.best_supporting_actress_details}</h2>
                </section>
                <br>
            `;
        } else {
            content.innerHTML = `<h1>No data for ${year}</h1>`;
        }
    });
});

function goLeft() {
    const container = document.getElementsByClassName("year-scroll-container")[0];
    console.log("left")
    container.scrollLeft -= 100;
}
  
function goRight() {
    const container = document.getElementsByClassName("year-scroll-container")[0];
    console.log("right")
    container.scrollLeft += 100;
}

window.addEventListener("load", function () {
    const container = document.getElementsByClassName("year-scroll-container")[0];
    container.scrollLeft = container.scrollWidth;
  });