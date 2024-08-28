"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var faker_1 = require("@faker-js/faker");
// Define a classe Post
var Post = /** @class */ (function () {
    function Post(userName, imageUrl, description, userAvatarUrl, music) {
        this._id = (0, uuid_1.v4)();
        this._userName = userName;
        this._imageUrl = imageUrl;
        this._numLikes = 0;
        this._description = description;
        this._userAvatarUrl = userAvatarUrl;
        this._music = music;
    }
    Post.prototype.incrementLike = function () {
        this._numLikes += 1;
    };
    Object.defineProperty(Post.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        set: function (value) {
            this._imageUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "userAvatarUrl", {
        get: function () {
            return this._userAvatarUrl;
        },
        set: function (value) {
            this._userAvatarUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "music", {
        get: function () {
            return this._music;
        },
        set: function (value) {
            this._music = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "numLikes", {
        get: function () {
            return this._numLikes;
        },
        set: function (value) {
            this._numLikes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    // Método para criar o HTML do post
    Post.prototype.toHTML = function () {
        return "\n            <div class=\"postagem\">\n                <div class=\"cabecalho-postagem\">\n                    <div class=\"foto-perfil\" style=\"background-image: url('".concat(this.userAvatarUrl, "');\"></div>\n                    <span class=\"nome-usuario\">").concat(this.userName, "</span>\n                    <button class=\"btn-seguir\">SEGUIR</button>\n                </div>\n                <img src=\"").concat(this.imageUrl, "\" alt=\"Imagem da Postagem\" class=\"imagem-postagem\">\n                <div class=\"rodape-postagem\">\n                    <div class=\"acoes-postagem\">\n                        <img src=\"./icons/icone-curtir-instagram.png\" alt=\"Curtir\" class=\"icone-acao\">\n                        <img src=\"./icons/icone-comentar-instagram.png\" alt=\"Comentar\" class=\"icone-acao\">\n                        <img src=\"./icons/icone-direct-instagram.png\" alt=\"Compartilhar\" class=\"icone-acao\">\n                    </div>\n                    <div class=\"curtidas\">").concat(this.numLikes, " curtidas</div>\n                    <div class=\"descricao\">\n                        ").concat(this.description, "\n                        <span class=\"hashtags\">#ImagemGeradaPorIA #por-do-sol</span>\n                    </div>\n                </div>\n            </div>\n        ");
    };
    return Post;
}());
// Função para gerar um novo post
var generatePost = function () {
    return new Post(faker_1.faker.internet.userName(), faker_1.faker.image.url(), faker_1.faker.lorem.sentence(), faker_1.faker.image.avatar(), faker_1.faker.music.genre());
};
// Adiciona os posts ao contêiner
var addPostsToContainer = function () {
    var numberOfPosts = 15;
    var posts = Array.from({ length: numberOfPosts }, generatePost);
    var container = document.getElementById("posts-container");
    if (container) {
        container.innerHTML = posts.map(function (post) { return post.toHTML(); }).join("");
    }
};
// Executa a função para adicionar posts
addPostsToContainer();
