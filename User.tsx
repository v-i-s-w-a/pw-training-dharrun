export class User {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  login(): void {
    console.log(`${this.username} logged in successfully.`);
  }

  static standard(): User {
    return new User("USER07", "123456");
  }
}