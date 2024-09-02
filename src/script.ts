import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

// Define a classe Post
class Post {
  private _id: string;
  private _userName: string;
  private _imageUrl: string;
  private _numLikes: number;
  private _description: string;
  private _userAvatarUrl: string;
  private _music: string;

  constructor(
    userName: string,
    imageUrl: string,
    description: string,
    userAvatarUrl: string,
    music: string
  ) {
    this._id = uuidv4();
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._numLikes = 0;
    this._description = description;
    this._userAvatarUrl = userAvatarUrl;
    this._music = music;
  }

  incrementLike() {
    this._numLikes += 1;
  }

  // Getters and Setters
  public get id(): string {
    return this._id;
  }
  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public get imageUrl(): string {
    return this._imageUrl;
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public get userAvatarUrl(): string {
    return this._userAvatarUrl;
  }
  public set userAvatarUrl(value: string) {
    this._userAvatarUrl = value;
  }
  public get music(): string {
    return this._music;
  }
  public set music(value: string) {
    this._music = value;
  }
  public get numLikes(): number {
    return this._numLikes;
  }
  public set numLikes(value: number) {
    this._numLikes = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  toHTML() {
    return `
      <div class="postagem">
        <div class="cabecalho-postagem">
          <div class="foto-perfil" style="background-image: url('${this._userAvatarUrl}');"></div>
          <span class="nome-usuario">${this._userName}</span>
          <button class="btn-seguir">SEGUIR</button>
        </div>
        <img src="${this._imageUrl}" alt="Imagem da Postagem" class="imagem-postagem">
        <div class="rodape-postagem">
          <div class="acoes-postagem">
            <img src="./icons/icone-curtir-instagram.png" alt="Curtir" class="icone-acao">
            <img src="./icons/icone-comentar-instagram.png" alt="Comentar" class="icone-acao">
            <img src="./icons/icone-direct-instagram.png" alt="Compartilhar" class="icone-acao">
          </div>
          <div class="curtidas">${this._numLikes} curtidas</div>
          <div class="descricao">
            ${this._description}
            <span class="hashtags">#ImagemGeradaPorIA #por-do-sol</span>
          </div>
        </div>
      </div>
    `;
  }
}

const generatePost = () => {
  return new Post(
    faker.internet.userName(),
    faker.image.url(),
    faker.lorem.sentence(),
    faker.image.avatar(),
    faker.music.genre()
  );
};

type ScrollDirection = "next" | "prev";

const scrollCarousel = (direction: ScrollDirection) => {
  const container = document.querySelector(".carousel-items");

  // Ensure the container exists
  if (container) {
    const scrollAmount = container.clientWidth; // Adjust scrollAmount as needed

    if (direction === "next") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else if (direction === "prev") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  } else {
    console.error("Carousel container not found.");
  }
};

// Ensure buttons exist before adding event listeners
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

if (prevButton) {
  prevButton.addEventListener("click", () => scrollCarousel("prev"));
} else {
  console.error("Previous button not found.");
}

if (nextButton) {
  nextButton.addEventListener("click", () => scrollCarousel("next"));
} else {
  console.error("Next button not found.");
}

// Function to add posts to the container (example provided earlier)
const addPostsToContainer = () => {
  const numberOfPosts = 15;
  const posts = Array.from({ length: numberOfPosts }, generatePost);

  const container = document.getElementById("posts-container");
  if (container) {
    container.innerHTML = posts.map((post) => post.toHTML()).join("");
  } else {
    console.error("Posts container not found.");
  }
};

addPostsToContainer();
