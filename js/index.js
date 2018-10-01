// menu model
class HamburgerOpen {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => this.openModal());
  }

  openModal() {
    document.querySelector(".non-expanded").classList.add("modal-hidden");
    document.querySelector(".expanded").classList.remove("modal-hidden");
    document.querySelector(".expanded").classList.remove("modal-hidden");
    document.querySelector(".menu-modal").classList.remove("modal-hidden");
  }
}

class HamburgerClose {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => this.closeModal());
  }

  closeModal() {
    document.querySelector(".non-expanded").classList.remove("modal-hidden");
    document.querySelector(".expanded").classList.add("modal-hidden");
    document.querySelector(".expanded").classList.add("modal-hidden");
    document.querySelector(".menu-modal").classList.add("modal-hidden");
  }
}

let hamburgerNonExpanded = document.querySelector("header .non-expanded");
let hamburgerExpanded = document.querySelector("header .expanded");

hamburgerNonExpanded = new HamburgerOpen(hamburgerNonExpanded);
hamburgerExpanded = new HamburgerClose(hamburgerExpanded);

// services page tabs content
class Tab {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;
    this.content = Array.from(document.querySelectorAll(".content")).find(
      item => item.dataset.tab === this.tabData
    );
    this.element.addEventListener("click", () => this.selectTab());
  }
  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active-tab"));
    this.element.classList.add("active-tab");
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => (content.style.display = "none"));
    this.content.style.display = null;
  }
}
let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new Tab(tab));
tabs[0].selectTab();

//carousel
class Carousel {
  constructor(element) {
    this.element = element;
    this.leftButton = element.querySelector(".left-button");
    this.rightButton = element.querySelector(".right-button");
    this.currentImage = 0;
    this.image = element.querySelectorAll("img")[this.currentImage];
    this.image.style.display = "flex";
    this.rightButton.addEventListener("click", () => {
      this.nextImage();
    });
    this.leftButton.addEventListener("click", () => {
      this.prevImage();
    });
  }
  nextImage() {
    if (
      this.currentImage <
      Array.from(document.querySelectorAll(".services img")).length - 1
    ) {
      this.currentImage++;
      let images = document.querySelectorAll(".services img");
      images.forEach(item => {
        item.style.display = "none";
      });
      let displayImage = document.querySelectorAll(".services img")[
        this.currentImage
      ];
      displayImage.style.display = "flex";
    }
  }
  prevImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
      let images = document.querySelectorAll(".services img");
      images.forEach(item => {
        item.style.display = "none";
      });
      let displayImage = document.querySelectorAll(".services img")[
        this.currentImage
      ];
      displayImage.style.display = "flex";
    }
  }
}

let carousel = document.querySelector(".services");
carousel = new Carousel(carousel);
