const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  //   const usernameInput = document.querySelectorAll("input")[0];
  //   const tweetInput = document.querySelectorAll("input")[1];
  //   console.log(usernameInput.value, tweetInput.value);
  //   console.log("SUBMIT!!");
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  e.preventDefault();

  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";

  //   //새로운 li만든다
  //   const newTweet = document.createElement("li");
  //   const bTag = document.createElement("b");
  //   bTag.append(username);
  //   newTweet.append(bTag);
  //   newTweet.append(`- ${tweet}`);
  //   //   console.log(newTweet);
  //   tweetsContainer.append(newTweet);
});

const addTweet = (username, tweet) => {
  //새로운 li만든다
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  //   console.log(newTweet);
  tweetsContainer.append(newTweet);
};
