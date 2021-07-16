const jokesEl = document.getElementById('jokes');
const btnEl = document.getElementById('generate');

btnEl.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
   const config = {
    headers: {
      Accept: 'application/json',
    },
  } 

  const api = await fetch('https://icanhazdadjoke.com', config)

  const content = await api.json()

  jokesEl.innerHTML = content.joke
}