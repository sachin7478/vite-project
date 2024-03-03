
// 'strict mode'
async function loadData () {
    cahche = {}
    await fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res =>  {
        return res.json();
        }
        )
    .then(data => {
        return loadDropdown(data)
    })
}
loadData();

const sel = document.querySelector('#selectt');
function loadDropdown (data) {
    
    const res = data.results;
    if(!res.length) {
        return false;
    }

    res.map((item , index)=>{
        const val = `${item.name}_${item.url}`
        const op = document.createElement("option");
        op.id = item.name;
        op.value = val;
        op.text = item.url;
        op.className = "opt"
        op.textContent = item.name;
        sel.append(op);
        if(index === 0) {
            selCartoon(val)
        }
    })
}

let cache = {};
function selCartoon(input = '') {
    const val = input || sel.value;
    const [name, url] = val.split('_');
    if(cache[name]) {
        console.log('from cache')
        showData(cache[name]);
    } else {
        fetch(url).then(res=>res.json())
        .then(response=>{
            cache[name] = response;
            console.log('Api called')
            showData(response);
        })
    }
}

const showData = data => {
    const {weight, height} = data;
    const showDiv = document.querySelector('#show');
    const str = `Weight : ${weight}  height : ${height}`;
    showDiv.textContent = str
}
