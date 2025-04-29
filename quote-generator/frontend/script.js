function getQuote() {
  fetch('http://localhost:3000/api/quote')
    .then(res => res.json())
    .then(data => {
      document.getElementById('quote').innerText = data.quote;
    })
    .catch(err => {
      console.error('Error fetching quote:', err);
    });
}

