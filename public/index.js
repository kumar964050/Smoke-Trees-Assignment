const nameEl = document.getElementById("name");
const addressEl = document.getElementById("address");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameEl.value;
  const address = addressEl.value;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, address }),
  };
  try {
    const res = await fetch("/register", options);
    const data = await res.json();
    if (data.status === "success") {
      alert("User registered successfully!");
      nameEl.value = "";
      addressEl.value = "";
    } else {
      alert(`Failed to register user. ${data.message}`);
    }
  } catch (error) {
    alert("Failed to fetch : ", error.message);
  }
});
