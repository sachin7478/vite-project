const tbody = document.querySelector('#tbody');
const sourceUrl = 'https://pokeapi.co/api/v2/pokemon/';
const loadData = (url) =>{
    fetch(url).then(data => data.json())
    .then(res => loadTable(res.results))
}

loadData(sourceUrl);
const loadTable = (allData) =>{
    const allPromise = allData.map(({name, url}) =>{
        return fetch(url).then(data => data.json());
    })
    Promise.all(allPromise).then((res) =>{
        res.map((item, index) => {
            const {abilities} = item;
            const arrAbilities = abilities
            .map((item,i)=>{
                return item.ability.name;
            })
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.textContent = allData[index].name;
            td2.textContent = arrAbilities.join(', ')
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr)
        })
    })
}