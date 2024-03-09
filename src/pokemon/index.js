var allData = [];
var cache = {};
const loadData = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(data => data.json())
    .then( res => {loadOptions(res)})
    .catch(err =>{
        throw new Error(err)
    })
}
loadData();
function loadOptions(data) {
    const sel = document.querySelector('#sel');
    
    allData = data.results;
    allData.map(({name, url},index)=>{
        const strId = `${name}_${url}`
        const op = document.createElement('option');
        op.className= 'api_option';
        op.id = strId;
        op.value = strId;
        op.textContent = name
        sel.appendChild(op)
        if(index == 0) {
            loadSelectedOption(strId)
        }
    })
    
}
function loadSelectedOption(val) {
    let [name, url] = val.split('_');
    if(cache[name]) {
        loadOutput(cache[name])
        console.log('from cache', cache)
    } else {
        fetch(url).then(data => data.json())
        .then(res => { 
            loadOutput(res)
            cache[name] = res;
        } )
        
    }
}

let loadOutput = (res) =>{
    const {weight, name,height, id, is_default} = res;
    const str = `Height: ${height} | Weight: ${weight}`
    const out = document.querySelector('#output');
    out.innerText = str;
}