import * as flsFunctions from "./modules/functions.js";
import { menuBurger } from "./modules/menuBurger.js";
import { dropList } from "./modules/dropListFooter.js";

window.onload = () => {
    flsFunctions.isWebp();
    menuBurger();
    dropList();
}