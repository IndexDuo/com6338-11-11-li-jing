const getPoemBtn = document.getElementById("get-poem");
const poemEl = document.getElementById("poem");
const poemURL =
    "https://poetrydb.org/random,linecount/1;12/author,title,lines.json";

const getJSON = (url) => fetch(url).then((res) => res.json());

const pipe =
    (...fns) =>
    (firstArg) =>
        fns.reduce((returnValue, fn) => fn(returnValue), firstArg);

const makeTag = (tag) => (str) => `<${tag}>${str}</${tag}>`;

// complete this function
const makePoemHTML = (poem) => {
    //use of both makeTag and pipe at least once

    console.log(poem);
    // console.log(poem[0].title);
    const makeh2 = makeTag("h2");
    const emphasize = makeTag("em");
    const makeh3 = makeTag("h3");
    const makep = makeTag("p");
    const makeBreak = makeTag("br");
    const breakPoem = (arr)=>{
      arr.forEach(line => {
        
      });
    }

    const makeTitle = pipe(makeh2);
    const makeAuthor = pipe(makeh3, emphasize);
    const makePoemContent = pipe(makep);
    // console.log(makeTitle(poem[0].title));
    const poemHTML =
        makeTitle(poem[0].title) +
        makeAuthor(poem[0].author) +
        makePoemContent(poem[0].lines[0]);

    return poemHTML;
};

// attach a click event to #get-poem
getPoemBtn.onclick = async function () {
    // renders the HTML string returned by makePoemHTML to #poem
    poemEl.innerHTML = makePoemHTML(await getJSON(poemURL));
};
