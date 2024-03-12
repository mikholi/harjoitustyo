
const apiKey = "TÄHÄN API AVAIN"
    const form = document.getElementById('searchForm')
    const gameList = document.getElementById('gameList')

    form.addEventListener('submit', function(event) {
      event.preventDefault()

      const searchQuery = document.getElementById('searchQuery').value

      fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          gameList.innerHTML = ''
          data.results.forEach(game => {
            const li = document.createElement('li')
            li.textContent = game.name
            gameList.appendChild(li)
          })
        })
        .catch(error => console.error(error))
    })


