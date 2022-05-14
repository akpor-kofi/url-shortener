const form = document.querySelector("form");
const fullUrlElement = document.getElementById("fullUrl");

const shortenUrl = async (fullUrl) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/createShortUrl",
      data: { fullUrl },
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullUrl = fullUrlElement.value;

    console.log(fullUrl);

    shortenUrl(fullUrl);
  });
}
