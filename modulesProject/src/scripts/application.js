import {UsersStore} from "./models/users-store";
import usersController from "./controllers/users-controller";
import * as fuu from "./lib/util";
import "./script";

console.log("LOADING APPLICATION");

const store = new UsersStore();
const $mount = $("#mount");
usersController($mount, store);

fuu.func1();
fuu.func2();