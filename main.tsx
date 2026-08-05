import { User } from "./User";

const u = new User("Dharrun", "mypassword");

u.login();

console.log("--------------------------------");

const s = User.standard();

s.login();

console.log(s);