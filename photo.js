const getPhotoData = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const res = await fetch(url);
  const data = await res.json();
  setPhoto(data);
};

const setPhoto = (photos) => {
  photos.slice(0, 6).forEach((photo) => {
    // console.log(photo);

    const photoContainer = document.getElementById("photo-container");
    const photoDiv = document.createElement("div");
    photoDiv.classList.add(
      "card",
      "w-full",
      "bg-yellow-100",
      "shadow-2xl",
      "items-center"
    );
    const photoUrl = photo.url;
    const photoTitle = photo.title;
    // console.log(photoUrl);

    photoDiv.innerHTML = `
        <img onclick = "openPhoto('${photoUrl}','${photoTitle}')"  class="px-5 py-5 rounded-xl" src="${photo.thumbnailUrl}" alt="" />
        
    `;
    photoContainer.appendChild(photoDiv);
  });
};

const openPhoto = (url, title) => {
  console.log(url, title);
  const singlePhoto = document.getElementById("single-photo");
  singlePhoto.innerHTML = `
        <img src="${url}" alt="" class="rounded-xl mx-auto shadow-2xl" />
        <p class="items-center text-center font-bold">${title}</p>
  `;
};

getPhotoData();
