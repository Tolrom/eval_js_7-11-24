// Exo 1

const body = document.querySelector('body');

let prenom = 'Maxime',
    age = 27,
    permis = false;

console.log('Exercice 1 :');
console.log(`L'utilisateur s'appelle ${prenom}, il a ${age} ans, et il ${permis ? 'a' : 'n\'a pas'} le permis`);

// Exo 2

function convert(temp) {
    return temp * 9 / 5 + 32;
}
let temp = 24;

console.log('Exercice 2 :');
console.log(`S'il fait ${temp}°C, alors il fait ${convert(temp)}°F`);

// Exo 3

let rand = Math.floor(Math.random() * 100);

console.log('Exercice 3 :');
console.log(`${rand} est un nombre ${rand % 2 == 0 ? 'pair' : 'impair'}`);

// Exo 4

console.log('Exercice 4 :');
for (let i = 1; i < 20; i++){
    if (i < 10) {
        console.log(i);
    }
    else {
        console.log(20 - i);
    };
};

// Exo 5

let randA = Math.floor(Math.random() * 100);
let randB = Math.floor(Math.random() * 100);
function sum(a, b) {
    return a + b;
};
console.log('Exercice 5 :');
console.log(`La somme de ${randA} et ${randB} est égale à ${sum(randA, randB)}`);

// Exo 6

let mot = 'chat',
    phrase = 'J\'ai un chien et un chat et ils sont très mignons';

function check(string, mot) {
    string.includes(mot) ? true : false;
}

console.log('Exercice 6 :');
console.log(`Le mot ${mot} ${check(phrase, mot) ? 'est' : 'n\'est pas'} présent dans la phrase`);

// Exo 7

let prenoms = ['Maxime', 'Romaric', 'Florian', 'Kevin', 'Apolline', 'Lucile', 'Sophie', 'Yassine', 'Vincent', 'Marjorie', 'Quentin', 'Alexandre', 'Jordan', 'Florian'];
console.log('Exercice 7 :');
prenoms.forEach(function (prenom) {
    console.log(prenom);
});

// Exo 8

let id = {
    nom: 'Maxime',
    age: 27,
    ville: 'Toulouse',
};

console.log('Exercice 8 :');
console.log(`L'utilisateur s'appelle ${id.nom}, il a ${id.age} ans et il vit à ${id.ville}`);

// Exo 9

document.querySelector('h3').innerText += ' ' + Math.floor(Math.random() * 100).toString();

// Exo 10
let bouton = document.querySelector('#bouton');

bouton.addEventListener('click',()=> alert('J\'AVAIS DIT DE NE PAS CLIQUER POURTANT'));


// Exo 11

async function norrisFact() {
    const url = "https://api.chucknorris.io/jokes/random";
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        document.querySelector('#norris').innerText = json.value;
    } catch (error) {
        console.error(error.message);
    }
}

norrisFact();

// Exo 12

const darkBouton = document.querySelector('#dark'),
    divList = document.querySelectorAll('div');

let dark = false;

darkBouton.addEventListener('click', () => {
    if (!dark) {
        body.style.backgroundColor = 'chartreuse';
        divList.forEach(function (bouton) {
            bouton.style.color = 'chartreuse';
        });
    }
    else {
        body.style.backgroundColor = 'white';
        divList.forEach(function (bouton) {
            bouton.style.color = 'white';
        });
    }
    dark = !dark;
})


// Random User

const userCard = document.querySelector('#user');

async function randomUser() {
    const image = document.createElement('img'),
        name = document.createElement('h5'),
        mail = document.createElement('p'),
        adress = document.createElement('p'),
        phone = document.createElement('p'),
        refresh = document.createElement('div');
    
    const url = "https://randomuser.me/api/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const user = json.results[0]
        console.log(user)
// IMAGE
        image.setAttribute("src", user.picture.large);
        image.style.width = '200px';
        userCard.appendChild(image);
// NOM
        name.textContent = user.name.title + '. ' + user.name.first + ' ' + user.name.last;
        userCard.appendChild(name);
// MAIL
        mail.textContent = user.email;
        userCard.appendChild(mail); 
// ADRESSE
        const lieu = user.location;

        adress.textContent = 'Adress : ' + lieu.street.number + ' ' + lieu.street.name + ' ( ' + lieu.city + ', ' + lieu.country + ' )';
        userCard.appendChild(adress);
// TELEPHONE
        phone.textContent = 'Phone : ' + user.phone;
        userCard.appendChild(phone);
// BOUTON
        refresh.textContent = 'Random User';
        refresh.addEventListener("click", () => {
            userCard.innerHTML = '';
            randomUser();
        });
        userCard.appendChild(refresh);

    } catch (error) {
        console.error(error.message);
    }
}
randomUser();