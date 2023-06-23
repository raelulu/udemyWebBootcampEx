const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
    config
  );
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  const div = document.createElement("div");
  div.id = "div";
  document.body.append(div);
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      img.id = "image";
      document.getElementById("div").appendChild(img);
    }
  }
};

const delImages = () => {
  const div = document.getElementById("div");
  document.body.removeChild(div);
};
