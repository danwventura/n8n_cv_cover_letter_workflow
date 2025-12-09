let the_button = document.getElementById("submit");

the_button.onclick = function (event) {
  event.preventDefault();
  console.log("clicked");

  fetch(
    "https://n8n.srv1165030.hstgr.cloud/webhook-test/36f61030-45c1-44b0-9ea2-18ff50f0b681",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company: "Company Name",
        url: "https://example.com",
        jobTitle: "Software Engineer",
        jobDescription: "Job description text here",
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
