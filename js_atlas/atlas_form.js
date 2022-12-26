import { doApi, doApiSearch } from "./atlas_list.js";

export const decalereEvent = () => {
    let search_input = document.querySelector("#search_input");
    let search_btn = document.querySelector("#search_btn");

    // הפעלת חיפוש בלחיצה על אנטר
    search_input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            doApiSearch(search_input.value);
            search_input.value = "";
        }
    })

    // הפעלת חיפוש בלחיצה על הכפתור
    search_btn.addEventListener("click", () => {
        doApiSearch(search_input.value);
        search_input.value = "";
    })

    // שימוש בערך של הכפתורים וללא צורך ביצירת פונקציה לכל כפתור
    const btn = document.querySelectorAll(".btn_val");
    btn.forEach(item => {
        item.addEventListener("click", showHeb);
    })

    
    const all_btn = document.querySelector("#all_btn");
    all_btn.addEventListener("click",()=>{
        doApi();
    })
}
//show Heb with class data-heb in html
const showHeb = (e) => {
    doApiSearch(e.target.dataset["heb"]);
}