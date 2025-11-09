const clickMe = document.getElementById("new-quote");
const getDesc = document.getElementById("new-desc");
const quotes = document.getElementById("quote");
const authors = document.getElementById("author");
const desc = document.getElementById("desc-card");
const quoteCard = document.getElementById("quote-card");

clickMe.addEventListener("click", fetchQuote);
getDesc.addEventListener("click", addDesc);
let lastResult = null;

async function fetchQuote() {
  const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "fdb98d1426msh4fa1cb71f409d66p15f838jsn44d768afdfa9",
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    lastResult = result;
    console.log(result);
    getQuote(result);
  } catch (error) {
    console.error(error);
  }
}

function getQuote(results) {
  desc.hidden = true;
  desc.style.maxWidth = "420px";
  desc.style.transition = "height 0.3s";

  quoteCard.style.maxWidth = "420px";
  quoteCard.style.transition = "width 0.3s";

  const text = results.content;
  const author = results.originator.name;
  console.log(text, author);

  quotes.innerHTML = text;
  authors.innerHTML = author;

  getDesc.removeAttribute("hidden");
}

function addDesc() {
  const description = lastResult.originator.description;
  if ((description)) {
    desc.removeAttribute("hidden");
    desc.style.height = "100%";
    desc.style.marginLeft = "3px";
    desc.style.maxWidth = "800px";
    desc.style.transition = "height 0.3s";

    quoteCard.style.maxWidth = "800px";
    quoteCard.style.transition = "width 0.3s";

    desc.innerHTML = description;
  }
  else{
    alert("No description to show");
  }
}
