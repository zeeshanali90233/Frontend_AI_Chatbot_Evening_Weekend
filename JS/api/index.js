function getInstaPosts() {
  console.log("Fetching Instagram posts...");

  const postsDivRef = document.querySelector(".posts");
  // API
  fetch("https://p2pclouds.up.railway.app/v1/learn/prac/get_instagram_posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const tweets = data.tweets;
      tweets.map((tw) => {
        console.log(tw);

        postsDivRef.innerHTML =
          postsDivRef.innerHTML +
          `${tw.tweetId}: ${tw.tweetDescription} <br> <img src="${tw.tweetImage}"> <div>${tw.tweetDate}</div> <br>`;
      });
    })
    .catch((err) => {
      alert("Error fetching posts: ");
    });
}

// Template Literals
// Dynamically any string
const name = "Zeeshan Ali";
const detail = `${name} is 25 years old`;
console.log(detail);
// JSON
// Javascript Object Notation (JSON) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to transmit data between a server and a web application.

// Zeeshan Ali

// {
//     "name":"Zeeshan Ali",
//     "age": "24",
// }

// const data = {
//   status: "Success",
//   tweets: [
//     {
//       tweetId: "123456789",
//     },
//   ],
// };
// const tweets = data.tweets;
// console.log(tweets);
