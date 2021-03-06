// function can be declared earlier:
const ourElement = document.querySelector('button');

  function handleClickFunction(event) {
    alert('named function');
  }
ourElement.addEventListener('click', handleClickFunction);

  function handleMouseClick(event) {
    console.log('you clicked on an element:', event.target);
  }
window.addEventListener('click', handleMouseClick);    

// or it maybe anonymous:
  ourElement.addEventListener('click', function (event) {
    alert('anonymous function')
  })

// anonymous functions are useful for rapid development or when the handler is created in one single place.
  element.addEventListener('click', (event) => {
    alert('anonymous function')
  })

// with the help of events, it is possible to handle keystrokes on the keyboard when the focus is set in the input field.
const ourElement = document.querySelector('input')

ourElement.addEventListener('keydown', function (event) {
  const message = '<code>' + event.key + '</code>';
  const value = event.target.value;

  if (event.key === 'Enter' && value.length > 0) {
    const messageElement = document.createElement('div');
      messageElement.classList.add('message')
      messageElement.innerText = value
    document.querySelector('.result').appendChild(messageElement)
      event.target.value = ''
  }
   document.querySelector('.event').innerHTML = message
})

// remove the event handler
ourElement.removeEventListener('click', handleMouseClick)

// if you want the event to fire only once
someElement.addEventListener('click', function (event) {
  console.log('Click!')
}, { once: true })

// dynamic creation and deletion of paragraphs on the page
/*
<html>
  <head></head>
  <body >
    <h1>Living Collection</h1>
    <h3>when loading the page, we got all the paragraphs once, their list is kept up to date automatically</h3>
    <h2>Now in collection: <span id="counter"></span></h2>
    <div id="article">
      <p>this is a paragraph #1</p>
      <p>this is a paragraph #2</p>
    </div>
    <button id="add">add paragraph</button>
    <button id="remove">delete paragraph</button>
  </body>
</html>
*/
  function createParagraphElement(number) {
      let newP = document.createElement('p');
      newP.textContent = 'this is a paragraph #' + number;
      return newP;
  }

    let paragraphs = document.getElementsByTagName('p');
    let articleDiv = document.getElementById('article');
    let counterSpan = document.getElementById('counter');
    let addButton = document.getElementById('add');
    let removeButton = document.getElementById('remove');

    counterSpan.textContent = paragraphs.length;

    addButton.addEventListener('click', function() {
      articleDiv.appendChild(createParagraphElement(paragraphs.length + 1));
      counterSpan.textContent = paragraphs.length;
    });

    removeButton.addEventListener('click', function() {
      articleDiv.removeChild(paragraphs[paragraphs.length-1]);

      counterSpan.textContent = paragraphs.length;
    });


// for example, you can change the style of the h1 element:
let element = document.getElementsByTagName("h1");

  element.align = "center";
  element.style.color = "red";

// the page will display the new content:
let divElement = document.getElementsByTagName("div")[0];
divElement.innerHTML = "<p>I was added from JavaScript</p>";

// by default, fetch call makes a GET request to the specified address
const newPost = {
  title: "foo",
  body: "bar",
  userId: 1,
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(newPost), // request body in JSON format
  headers: {
    // adding the necessary headers
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // {title: "foo", body: "bar", userId: 1, id: 101}
  })

// request will return an error 404 Not Found
fetch("https://jsonplaceholder.typicode.com/there-is-no-such-route").catch(
  () => {
    console.log("Error occurred!")
  } ) // Never Fulfilled

// to handle a request error, you need to pay attention to the ok field in the Response object
fetch("https://jsonplaceholder.typicode.com/there-is-no-such-route")
  .then((response) => {
    // we check the success of the request and throw an error
    if (!response.ok) {
      throw new Error("Error occurred!")
    }
    return response.json()
  })
  // now let's get here, because it threw an error
  .catch((err) => {
    console.log(err)
  }) // Error: Error occurred!

/* Sometimes it may be necessary to abort the request, for example, when the user's authorization has expired 
or the user wants to cancel the request on their own (canceled the download of the file). */
const controller = new AbortController();

function fetchData() {
  return fetch("http://jsonplaceholder.typicode.com/posts", {
    signal: controller.signal,
  })
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
    });
}

fetchData();

// an aborted fetch will return a Promise with an error
controller.abort(); // DOMException: The user aborted a request.


// using fetch, you can upload files to the server, for example, when a user wants to upload their avatar to a profile
/* HTML
<form id="form">
  <input type="file" id="avatar">
  <button type="submit">??????????????????</button>
</form>
*/
const form = document.getElementById("form")
  const fileInput = document.getElementById("avatar")

function handleSubmit(event) {
  event.preventDefault();
    const formData = new FormData()
      // add files from input to data
      for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i]
        formData.append("avatar", file, file.name)
      }
    // sending files to the server
    fetch("https://backend.com/api/upload", {
      method: "POST",
      body: formData,
    })
}

form.addEventListener("submit", handleSubmit);


// element.dataset allows you to read or set any data attributes on an HTML element.
/*
<h1>?????????????????? ??????????</h1>
<ul>
  <li data-id="1541" data-episode="1">???????? ??????</li>
  <li data-id="9434" data-episode="4">???????? ????????????</li>
  <li data-id="5549" data-episode="4">???????? ????????????</li>
</ul>
*/
const items = document.querySelectorAll('li');
  const firstItem = items[0];
  const secondItem = items[1];

firstItem.dataset; // { id: '1541', episode: '1' }
secondItem.dataset.side = 'evil';

// to rewrite the style of an element completely, you can use
element.style.cssText = "color: blue; border: 1px solid black";
  element.setAttribute("style", "color:red; border: 1px solid blue;");

// to update the value of a specific property
element.style.color = "red"
element.style.fontFamily = "Arial"




