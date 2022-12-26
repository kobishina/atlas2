import { decalereEvent } from "./atlas_form.js";
import { doApi, doApiSearch } from "./atlas_list.js";

const init = () => {
    doApiSearch("israel");
    decalereEvent();
    // doApi();
}
init();