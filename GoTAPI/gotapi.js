var bookUrl = "https://www.anapioficeandfire.com/api/books"
var housesUrl = "https://www.anapioficeandfire.com/api/houses";
var charsUrl = "https://www.anapioficeandfire.com/api/characters";



//SEARCH CHARACTERS
let $input = $('#search-button').click(()=>{
    let $clearDom = $('#information').html('');
    let $gotInput = $('#got-input').val();
    let $clear = $('#got-input').val('');
    let $obj = $.get(charsUrl + '?&pageSize=50').done((result)=>{
        for(let i = 0; i < result.length; i++){
            if(result[i].name.toLowerCase() === $gotInput.toLowerCase())
            $display(result[i]);
        }
        })
        
})

//DISPLAY FUNCTION 
let $display = function(obj){
    let $displayInfo = $('#information')
    let $name = obj.name;
    let $aliases = obj.aliases;
    let $allegiances = obj.allegiances;
    console.log($allegiances[0]);
    $.get($allegiances[0]).done((result)=>{
        houseString(result.name);
    })
    let $titles = obj.titles;
    let $playedBy = obj.playedBy;
    $displayInfo.html(`Name: ${$name} <br>
    Played By: ${$playedBy}<br>
    Aliases: ${$aliases}<br>
    Allegiances: <a href="${$allegiances}">${houseString()}</a><br>
    Titles: ${$titles}<br>`);

}

let $houses = $('a').click(()=>{
    let $link = $('href');
    $.get($link).done((result)=>{
        JSON.parse(result);
    })
})

function houseString(x){
    return x;
}

// $.get(tywin).done((result)=>{
//     console.log(result);
//     console.log(result.name);
// })
