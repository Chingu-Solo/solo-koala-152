/*jshint esversion: 6 */


const root_element = document.documentElement;
const backtotopButton = document.querySelector(".back_to_top");
const font_size = document.querySelector("#font_size");
const texts = document.querySelectorAll(".texts");
const titles = document.querySelectorAll(".title");
const authors = document.querySelectorAll(".author");
const search_box = document.querySelector("#search_box");
const demo_font_boxes = document.querySelectorAll(".demo_fonts_sample");
const sentences = ["All their equipment and instruments are alive.", "A red flare silhouetted the jagged edge of a wing.",
"I watched the storm, so beautiful yet terrific.", "A shining crescent far beneath the flying vessel.", 
"Mist enveloped the ship three hours out from port.", "The face of the moon was in shadow.", 
"All their equipment and instruments are alive.", "A red flare silhouetted the jagged edge of a wing.", 
"I watched the storm, so beautiful yet terrific.", "A shining crescent far beneath the flying vessel.", 
"Mist enveloped the ship three hours out from port.", "The face of the moon was in shadow."];
const font_names = ["Roboto", "Crimson Text", "Lato", "Libre Baskerville", "Montserrat", "Nanum Gothic", 
"Noto Sans", "Open Sans", "Raleway", "Roboto Slab", "Source Sans Pro", "Ubuntu"];
const author_names = ["Christian Robertson", "Sebastian Kosch", "Łukasz Dziedzic", "Pablo Impallari", 
"Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral, Jacques Le Bailly", "Sandoll", "Google", "Steve Matteson",
 "Matt McInerney, Pablo Impallari, Rodrigo Fuenzalida, Igino Marini", "Christian Robertson", "Paul D. Hunt", "Dalton Maag"];

function textLoad()
{
    for (let index = 0; index < texts.length; index++) {
        texts[index].innerHTML = sentences[index];
    }
}

function fontLoad()
{
    for (let index = 0; index < titles.length; index++) {
        titles[index].innerHTML = font_names[index];
    }

    for (let index = 0; index < authors.length; index++) {
        authors[index].innerHTML = author_names[index];
    }

    for (let index = 0; index < texts.length; index++) {
        texts[index].style.fontFamily = font_names[index]+", sans-serif";
    }
}


document.onload = textLoad() + fontLoad();
document.querySelector("#font_size").addEventListener('change', changetextSize);
document.querySelector(".back_to_top button").addEventListener('click', gotoTop);
document.querySelector("#sample_text").addEventListener('input', changeText);
document.querySelector("#search_box").addEventListener('input', fontSearch);
document.querySelector(".list").addEventListener('click', setListMode);
document.querySelector(".grid").addEventListener('click', setGridMode);
document.querySelector(".reset").addEventListener('click', reset);
document.querySelector(".black").addEventListener('click', setBlackMode);
document.querySelector(".white").addEventListener('click', setWhiteMode);
document.querySelector("#navicon").addEventListener('click', navToggle);
document.querySelector(".navicon").addEventListener('click', navToggle);
document.querySelector("#closeBtn").addEventListener('click', navToggle);


function navToggle(){
    if (document.querySelector("#close").classList.contains("nav_bar_active"))
    {
        document.querySelector("#close").classList.remove("nav_bar_active");
        document.querySelector("#close").classList.add("anim");
        document.querySelector(".right_side_nav").classList.add("anim");
        document.querySelector("#navicon").style.position = "absolute";
        document.querySelector(".navicon").style.display = "none";
    }
    else
    {
        document.querySelector("#close").classList.add("nav_bar_active");
        document.querySelector(".right_side_nav").classList.add("mobnav");
        document.querySelector("#close").classList.remove("anim");
        document.querySelector(".right_side_nav").classList.remove("anim");
        document.querySelector("#navicon").style.position = "fixed";
        document.querySelector(".navicon").style.display = "inherit";
    }
}

function setBlackMode(){
    document.body.style.cssText = "Background-color: #000; color: #fff;";
    document.querySelector("#dark_logo").style.display = "none";
    document.querySelector("#white_logo").style.display = "inherit";
    document.querySelectorAll(".logo_img")[1].style.opacity = "inherit";
    root_element.style.setProperty("--light_color", "#ededed");
    search_box.classList.add("dark_mode");
    search_box.style.cssText = "Background-color: #000; color: #fff;";
    sample_text.classList.add("dark_mode");
    sample_text.style.cssText = "Background-color: #000; color: #fff;";
    document.querySelector(".black .fa-circle").style.display = "none";
    document.querySelector(".black .fa-circle-thin").style.display = "inherit";
    document.querySelector(".white .fa-circle").style.display = "inherit";
    document.querySelector(".white .fa-circle-thin").style.display = "none";
}

function setWhiteMode(){
    document.body.style.cssText = "Background-color: #fff; color: var(--text_color);";
    document.querySelector("#dark_logo").style.display = "inherit";
    document.querySelector("#white_logo").style.display = "none";
    document.querySelectorAll(".logo_img")[1].style.opacity = "0.7";
    root_element.style.setProperty("--light_color", "rgb(0, 0, 0, 0.2)");
    search_box.classList.remove("dark_mode");
    search_box.style.cssText = "Background-color: #fff; color: inherit;";
    sample_text.classList.remove("dark_mode");
    sample_text.style.cssText = "Background-color: #fff; color: inherit;";
    document.querySelector(".black .fa-circle").style.display = "inherit";
    document.querySelector(".black .fa-circle-thin").style.display = "none";
    document.querySelector(".white .fa-circle").style.display = "none";
    document.querySelector(".white .fa-circle-thin").style.display = "inherit";
}

function reset(){
    setGridMode();
    search_box.value="";
    document.querySelector("#sample_text").value = "";
    font_size.value = "32px";
    changeText();
    changetextSize();
    fontSearch();
    setWhiteMode();    
}

function setGridMode(){
    for (let index = 0; index < demo_font_boxes.length; index++) {
        demo_font_boxes[index].style.width = "22%";
    }
    document.querySelector(".grid").style.display = "none";
    document.querySelector(".list").style.display = "inline-block";
}

function setListMode(){
    for (let index = 0; index < demo_font_boxes.length; index++) {
        demo_font_boxes[index].style.width = "100%";
    }
    document.querySelector(".list").style.display = "none";
    document.querySelector(".grid").style.display = "inline-block";
}

function fontSearch(){
    if (search_box.value)
    {
        for (let index = 0; index < titles.length; index++)
        {
            if ((titles[index].innerHTML.toLowerCase().search(search_box.value.toLowerCase()) == -1))
            {
                demo_font_boxes[index].style.display = "none";
            }
            else
            {
                demo_font_boxes[index].style.display = "inline-block";    
            }

        }
    }
    else
    {
        for (let index = 0; index < titles.length; index++)
        {
            if (!(search_box.value in titles[index]))
            {
                demo_font_boxes[index].style.display = "inline-block";
            }
        }
    }
}

function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        backtotopButton.style.visibility = "visible";
    }
    else
    {
        backtotopButton.style.visibility = "hidden";
    }

}

function gotoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function changetextSize(){
    for(let i = 0; i < texts.length; i++)
    {
        texts[i].style.fontSize = font_size.value;
    }
}

function changeText(){
    for(let i = 0; i < texts.length; i++)
    {
        if(document.querySelector("#sample_text").value)
        {
            texts[i].innerHTML = document.querySelector("#sample_text").value;
        }
        else
        {
            textLoad();
        }
    }
}