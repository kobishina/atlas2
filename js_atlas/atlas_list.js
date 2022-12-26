import AtlasItem from "./atlas_item.js";

// all countrys
export const doApi = async () => {
    let url = "https://restcountries.com/v3.1/all";
    try {
        showLoading();
        let resp = await axios.get(url);
        console.log(resp.data);
        createList(resp.data);
    }
    catch (err) {
        console.log(err);
    }
}

//specific country
export const doApiSearch = async (_country) => {
    let url = `https://restcountries.com/v3.1/name/${_country}`;
    try {
        showLoading();
        let resp = await axios.get(url);
        console.log(resp.data);
        createList(resp.data);
    }
    catch (err) {
        console.log(err);
    }
}

//borders Api 
export const bordersApi = async (_code) => {
    let urlCode = `https://restcountries.com/v3.1/alpha/${_code}`;
    try {
        let resp = await axios.get(urlCode);
        console.log(resp.data);
        let full_country_name = await (resp.data[0].name.common);
        return full_country_name;
    }
    catch (err) {
        console.log(err);
        document.querySelector("#id_row").innerHTML = "";
    }
}


//create Func
const createList = (_arr) => {
    document.querySelector("#id_row").innerHTML = "";
    _arr.forEach(item => {
        let atlas = new AtlasItem("#id_row", item);
        atlas.render();
    });
}

//sow Loading img gif func
const showLoading = () => {
    document.querySelector("#id_row").innerHTML = `
    <div class="text-center">
           <img src="images/loading.gif" width="200" alt="loading" >
    </div>
    `
}