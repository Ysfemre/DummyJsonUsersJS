async function fetchUsersAndSetup() {
  const userContainer = document.querySelector(".Container");
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const users = data.users;
    userContainer.innerHTML = "";

    users.forEach((users) => {
      const userCard = `
         <div class="user">
        <div class="userInfo">
          <div class="userImage">
            <img class="img" src="Image/userIcon.webp" alt="User Icon" />
          </div>
          <div class="userInf">
            <div class="name">${users.firstName}</div>
            <div class="lastName">${users.lastName}</div>
            <div class="age">${users.age}</div>
          </div>
        </div>
        <div class="DetailBtn">
          <button>Show Details<i class="fa-solid fa-circle-down"></i></button>
        </div>
        <div class="usersDetailsContainer">
          <div class="userDetails">
            <div class="id">${users.id}</div>
            <div class="mail">${users.email}</div>
            <div class="phone">${users.phone}</div>
            <div class="adress">${users.address.address}</div>
          </div>
        </div>
      </div>`;
      userContainer.insertAdjacentHTML("beforeend", userCard);
    });
    const detailButtons = document.querySelectorAll(".DetailBtn");

    detailButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const detailContainer = btn.nextElementSibling;

        if (
          detailContainer.style.display === "none" ||
          detailContainer.style.display === ""
        ) {
          detailContainer.style.display = "flex";
        } else {
          detailContainer.style.display = "none";
        }
      });
    });
  } catch {
    console.log("Not Loading Users");
  }
}

fetchUsersAndSetup();

const userContainer = document.querySelector(".Container");
const searchInput = document.querySelector("input");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const allUserCards = userContainer.querySelectorAll(".user");
  allUserCards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchTerm)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
