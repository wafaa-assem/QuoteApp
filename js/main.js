document.getElementById("#btn");
var quoteText = document.getElementById("quote");
var author = document.getElementById("author");
var quotes = [
  {
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    author: "--Epictetus",
  },
  {
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    author: "--Nelson Mandela",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "--Wayne Gretzy",
  },
  {
    quote: "The best revenge is massive success.",
    author: "--Frank Sinatra",
  },
  {
    quote: "Do not take life too seriously. You will not get out alive.",
    author: "--Elbert Hubbard",
  },
];
var previousRandom;
var currentRandom;
function randomQuote() {
  do {
    currentRandom = Math.floor(Math.random() * 5); // 4
  } while (currentRandom === previousRandom);
  {
    previousRandom = currentRandom;
  }
  for (var i = 0; i < quotes.length; i++) {
    if (i === currentRandom) {
      quoteText.textContent = '"' + quotes[i].quote + '"';
      author.textContent = quotes[i].author;
      previousRandom = i;
    }
  }
}
