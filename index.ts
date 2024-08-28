import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

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

  public showInfo() {
    console.log("--- Post Information ---");
    console.log(`ID:               ${this.id}`);
    console.log(`Username:         ${this.userName}`);
    console.log(`Image URL:        ${this.imageUrl}`);
    console.log(`Number of Likes:  ${this.numLikes}`);
    console.log(`Description:      ${this.description}`);
    console.log(`Music: ${this._music}`);
    console.log("-----------------------");
  }
}

const generatePost = (): Post => {
  return new Post(
    faker.internet.userName(),
    faker.image.url(),
    faker.lorem.sentence(),
    faker.image.avatar(),
    faker.music.genre()
  );
};

const numberOfPosts = 15;
const posts: Post[] = Array.from({ length: numberOfPosts }, generatePost);

posts.forEach((post) => post.showInfo());

