let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let pic = document.querySelector("#pic");
const cardsContainer = document.querySelector(".cards");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      name: userName.value,
      role: role.value,
      bio: bio.value,
      pic: pic.value,
    });
    form.reset();
    this.renderUi();
  },

  renderUi: function () {
    cardsContainer.innerHTML="";
    this.users.forEach(function (user,index) {
      const card = document.createElement("div");
      card.classList.add("card");

      const profile = document.createElement("img");
      profile.classList.add("profile");
      profile.src = user.pic;
      profile.alt = "User Photo";

      const name = document.createElement("h2");
      name.classList.add("name");
      name.textContent = user.name;

      const roleText = document.createElement("p");
      roleText.classList.add("rol");
      roleText.textContent = user.role;

      const bioText = document.createElement("p");
      bioText.classList.add("bio");
      bioText.textContent = user.bio;

const crossBtn = document.createElement("button");
crossBtn.classList.add("delete-btn");
crossBtn.textContent = "❌";

    crossBtn.addEventListener("click", () => {
      this.removeUser(index);
    });

      card.append(profile);
      card.append(name);
      card.append(roleText);
      card.append(bioText);
      card.append(crossBtn);

      cardsContainer.appendChild(card);
    }.bind(this));
  },
  removeUser: function (index) {
this.users.splice(index,1);
this.renderUi();
  },
};
userManager.init();
