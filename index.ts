// Define a classe Post
class Post {
  // Propriedades privadas da classe
  private _userName: string; // Nome de usuário do post
  private _imageUrl: string; // URL da imagem do post
  private _numLikes: number; // Número de curtidas no post
  private _description: string; // Descrição do post

  // Construtor da classe, inicializa as propriedades
  constructor(userName: string, imageUrl: string, description: string) {
    this._userName = userName; // Inicializa o nome do usuário
    this._imageUrl = imageUrl; // Inicializa a URL da imagem
    this._numLikes = 0; // Inicializa o número de curtidas como 0
    this._description = description; // Inicializa a descrição
  }

  // Método para incrementar o número de curtidas
  incrementLike() {
    this.numLikes += 1; // Aumenta o número de curtidas em 1
  }

  // Getter para a propriedade _userName
  public get userName(): string {
    return this._userName; // Retorna o nome de usuário
  }

  // Setter para a propriedade _userName
  public set userName(value: string) {
    this._userName = value; // Define um novo valor para o nome de usuário
  }

  // Getter para a propriedade _imageUrl
  public get imageUrl(): string {
    return this._imageUrl; // Retorna a URL da imagem
  }

  // Setter para a propriedade _imageUrl
  public set imageUrl(value: string) {
    this._imageUrl = value; // Define um novo valor para a URL da imagem
  }

  // Getter para a propriedade _numLikes
  public get numLikes(): number {
    return this._numLikes; // Retorna o número de curtidas
  }

  // Setter para a propriedade _numLikes
  public set numLikes(value: number) {
    this._numLikes = value; // Define um novo valor para o número de curtidas
  }

  // Getter para a propriedade _description
  public get description(): string {
    return this._description; // Retorna a descrição
  }

  // Setter para a propriedade _description
  public set description(value: string) {
    this._description = value; // Define uma nova descrição
  }

  // Método para mostrar as informações do post
  showInfo() {
    // Exibe as informações do post no console
    console.log(
      `Username: ${this.userName}, URL da Imagem: ${this.imageUrl}, numLikes: ${this.numLikes}, Descrição: ${this.description}`
    );
  }
}

const x = new Post("Davi123", "sesesese", "bomdimai");

console.log(x);

x.incrementLike();

console.log(x);

x.incrementLike();

x.showInfo();
