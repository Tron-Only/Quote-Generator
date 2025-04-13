const url = "https://api.quotable.io/random";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

document.querySelector("button").addEventListener("click", fetchQuote);

async function fetchQuote() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const quoteJson = await response.json();
    console.log(quoteJson);

    quote.textContent = quoteJson.content;
    author.textContent = quoteJson.author;
  } catch (error) {
    console.error(error.message);
  }
}
