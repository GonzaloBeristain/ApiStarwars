let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let g = generador();
let g2 = generador2();
let g3 = generador3();

function* generador () {
    let id = 1;
    while(id < 6){
        yield id++;
    };
};

const getUser = () => {
    let id = g.next().value;
    return new Promise(async (resolve, reject) => {
        if (id < 6){
            try {
            let url = "https://swapi.dev/api/people/" + id;
            let response = await fetch(url);
            let data = await response.json();
            resolve(data);
            mostrar1(data)
        } catch (error) {
            reject(error);
            }
        }
    });
};

const mostrar1 = (data) => {
    let pintar = document.getElementById("pintar")
    pintar.innerHTML += `
    <div  class="col-12 col-md-6 col-lg-4 ">
        <div  class="single-timeline-content d-flex d-inline wow fadeInLeft 2021" data-wow-delay="0.3s"
                    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon" style="background-color: salmon;"><i class="fa fa-address-card" aria-hidden="true"></i>
            </div>
            <div class="timeline-text">
                <h6 ><b>${data.name}</b></h6>
                <p><b>Estatura:</b> ${data.height} cm. <b>Peso:</b> ${data.mass} kg.</p>
            </div>
        </div>
    </div>
    `
};

function* generador2 () {
    let id2 = 6;
    while(id2 < 12){
        yield id2++;
    };
};

const getUser2 = () => {
    let id2 = g2.next().value;
    return new Promise(async (resolve, reject) => {
        if (id2 > 5 && id2 < 11){
            try {
            let url = "https://swapi.dev/api/people/" + id2;
            let response = await fetch(url);
            let data2 = await response.json();
            resolve(data2);
            mostrar2(data2)
        } catch (error) {
            reject(error);
            }
        }
    });
};

const mostrar2 = (data2) => {
    let pintar2 = document.getElementById("pintar2");
    pintar2.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s"
        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon" style="background-color: lightgreen;"><i class="fa fa-briefcase" aria-hidden="true"></i>
            </div>
            <div class="timeline-text" >
                <h6><b>${data2.name}</b></h6>
                <p><b>Estatura:</b> ${data2.height} cm. <b>Peso:</b> ${data2.mass} kg.</p>
            </div>
        </div>
    </div>
    `
};

function* generador3 () {
    let id3 = 12;
    while(id3 < 18){
        yield id3++;
    };
};

const getUser3 = () => {
    let id3 = g3.next().value;
    return new Promise(async (resolve, reject) => {
        if (id3 > 11 && id3 < 17){
            try {
            let url = "https://swapi.dev/api/people/" + id3;
            let response = await fetch(url);
            let data3 = await response.json();
            resolve(data3);
            mostrar3(data3)
        } catch (error) {
            reject(error);
            }
        }
    });
};

const mostrar3 = (data3) => {
    let pintar3 = document.getElementById("pintar3");
    pintar3.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s"
        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon" style="background-color: lightskyblue;"><i class="fa fa-id-card" aria-hidden="true"></i>
        </div>
            <div class="timeline-text">
                <h6><b>${data3.name}</b></h6>
                <p><b>Estatura:</b> ${data3.height} cm. <b>Peso:</b> ${data3.mass} kg.</p>
            </div>
        </div>
    </div>
    `
};

item1.addEventListener("mouseenter", getUser);
item2.addEventListener("mouseenter", getUser2);
item3.addEventListener("mouseenter", getUser3);