import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

// Classe Post
class Post {
  public _id: string = randomUUID();
  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _description: string;
  public _isLiked: boolean = false;
  public _numberOfLikes: number = 0;

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._description = description;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  like() {
    this._isLiked = !this._isLiked;
    this._numberOfLikes += this._isLiked ? 1 : -1;
  }

  toHTML() {
    return `
      <div class="postagem">
        <div class="cabecalho-postagem">
          <div class="foto-perfil" style="background-image: url('${this._avatarUrl}');"></div>
          <span class="nome-usuario">${this._userName}</span>
          <button class="btn-seguir" data-id="${this._id}">SEGUIR</button>
        </div>
        <img src="${this._imageUrl}" alt="Imagem da Postagem" class="imagem-postagem">
        <div class="rodape-postagem">
          <div class="acoes-postagem">
            <img src="./assets/icone-curtir-instagram.png" alt="Curtir" class="icone-acao curtir-btn" data-id="${this._id}">
            <img src="./assets/icone-comentar-instagram.png" alt="Comentar" class="icone-acao">
            <img src="./assets/icone-direct-instagram.png" alt="Compartilhar" class="icone-acao">
          </div>
          <div class="curtidas">${this._numberOfLikes} curtidas</div>
          <div class="descricao">
            ${this._description}
            <span class="hashtags">#ImagemGeradaPorIA #por-do-sol</span>
          </div>
        </div>
      </div>
    `;
  }
}

// Função para gerar postagens
const generatePost = () => {
  return new Post(
    faker.internet.userName(),
    faker.image.avatarGitHub(),
    faker.image.url(),
    faker.lorem.sentence()
  );
};

// Função para adicionar event listeners aos botões de "Curtir"
const addEventListenersToLikeButtons = (posts: Post[]) => {
  const likeButtons = document.querySelectorAll(".curtir-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLImageElement;
      const postId = target.getAttribute("data-id");

      const post = posts.find((post) => post.id === postId);
      if (post) {
        post.like();
        target.classList.toggle("curtido", post._isLiked);

        // Safely access nextElementSibling
        const nextSibling = target.nextElementSibling;
        if (nextSibling) {
          (
            nextSibling as HTMLElement
          ).textContent = `${post._numberOfLikes} curtidas`;
        }
      }
    });
  });
};

// Função para adicionar event listeners aos botões de "Seguir"
const addEventListenersToFollowButtons = () => {
  const followButtons = document.querySelectorAll(".btn-seguir");

  followButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;

      if (target.textContent === "SEGUIR") {
        target.textContent = "SEGUINDO";
      } else {
        target.textContent = "SEGUIR";
      }
    });
  });
};

// Função para adicionar postagens ao container
const addPostsToContainer = () => {
  const numberOfPosts = 15;
  const posts = Array.from({ length: numberOfPosts }, generatePost);

  const container = document.getElementById("posts-container");
  if (container) {
    container.innerHTML = posts.map((post) => post.toHTML()).join("");
    addEventListenersToLikeButtons(posts);
    addEventListenersToFollowButtons();
  } else {
    console.error("Posts container not found.");
  }
};

// Inicializar
addPostsToContainer();

// Botões de rolagem
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

// Função de Rolagem do Carrossel
const scrollCarousel = (direction: "next" | "prev") => {
  const container = document.querySelector(".carousel-items");

  if (container) {
    const scrollAmount = container.clientWidth;
    if (direction === "next") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else if (direction === "prev") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  } else {
    console.error("Carousel container not found.");
  }
};
