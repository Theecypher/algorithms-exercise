const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

const img = document.querySelector("img");

function fetchImage() {
  fetch(
    `https://api.giphy.com/v1/stickers/random?api_key=${apiKey}&tag=cat&rating=r`,
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

const imageButton = document.getElementById("getImg-btn");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const imgDiv = document.querySelector(".img-div");


imageButton.addEventListener("click", fetchImage);

searchButton.addEventListener("click", (e) => {
  const value = searchInput.value.trim();

  fetch(
    `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${value}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const data = response.data;
      data?.map((img) => {
        const image = document.createElement("img");
        image.src = img.images.original.url;
        imgDiv.appendChild(image);
      });
      //   img.src = response.data.images.original.url;
    });
});

// {response.data.map((sticker) => (
//   <img
//     key={sticker.id}
//     src={sticker.images.original.url}
//     alt={sticker.slug}
//   />
// ))}

//  .then(function (response) {
//         const data = response.data
//       console.log(response.data);
//       console.log(response.data[0].images.original.url);
//   fetch(
//     `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${value}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       const data = response.data;
//       data?.map((img) => {
//         const image = document.createElement("img")

//         image.src = img.
//       });
//       //   img.src = response.data.images.original.url;
//     });
// });
