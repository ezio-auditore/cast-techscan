export class User{
  public id :number;
  public login :string;
  public avatar_url :string;
  public repos_url :string;
  public type :string;
  public followers_url :string;
  public following_url :string;
public constructor(obj ?:any){
  this.id = obj.id;
  this.login =obj.login;
  this.avatar_url =obj.avatar_url;
  this.repos_url = obj.repos_url;
  this.type = obj.type;
  this.followers_url = obj.followers_url;
  this.following_url = obj.following_url;
}
}
