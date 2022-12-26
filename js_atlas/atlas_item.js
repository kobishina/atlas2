import { bordersApi, doApiSearch } from "./atlas_list.js";

export default class AtlasItem {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.population = _item.population;
        this.region = _item.region;
        this.languge = Object.values(_item.languages);
        this.capital = _item.capital;
        this.flagImg = _item.flags.png;
        this.map_latlng1 = _item.latlng[0];
        this.map_latlng2 = _item.latlng[1];
        this.border = _item.borders;
        this.coin = Object.keys(_item.currencies) + " " + Object.values(_item.currencies)[0].symbol + " (" + Object.values(_item.currencies)[0].name + ")";
    }
    render() {
        let div = document.createElement("div");
        div.className = "div_inside";
        // div.id = "div_inside";
        document.querySelector("#id_row").append(div);
        div.innerHTML += `
        
                <div class="box_left mb-5  col-md-6 ps-4">
                    <img src="${this.flagImg}" alt="">
                    <h4>State: ${this.name}</h4>
                    <div>Populetion:${this.population.toLocaleString()}</div>
                    <div>Regin:${this.region}</div>
                    <div>Languge:${this.languge}</div>
                    <div>Coin:${this.coin}</div>
                    <div>Capital:${this.capital}</div>
                    <h4 class="display-5">Border Share With: <br>
                    <p class="borders_append"></p>
                    </h4>
                </div>
                <div class="box_right mb-5 ms-md-4">
                    <iframe class="iframe_map" "
                    src="https://maps.google.com/maps?q=${this.map_latlng1},${this.map_latlng2}&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"
                    marginheight="0" marginwidth="0" width = "400" height = "700"></iframe>
                </div>

        `
        let borders_ar = this.border;
        if (borders_ar != null) {
            borders_ar.forEach(async item => {
                document.querySelector(".borders_append").innerHTML = "";
                let btn = document.createElement("button");
                btn.innerHTML = await bordersApi(item);
                btn.addEventListener("click", () => {
                    doApiSearch(btn.innerHTML);
                })
                btn.className = "btn btn-warning ms-2 mb-2 col";
                document.querySelector(".borders_append").append(btn);
            });
        }
        else {
            document.querySelector(".borders_append").innerHTML = "Don't Have Share Border";
        }


    }

}

//delete from keyframe state
//<h4 class="display-6 text-center">Border with: <br>
//<p>Egyp</p>
