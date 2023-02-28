const dolgozoTorzs = document.querySelector("#dolgozoTorzs");
const nameInput = document.querySelector("#nameInput");
const cityInput = document.querySelector("#cityInput");
const salaryInput = document.querySelector("#salaryInput");
const addButtonSave = document.querySelector("#addButtonSave");


const host = 'http://localhost:3000/';
const endpoint = "employees";
const url = host + endpoint;




fetch(url)
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        loadEmloyees(result);
    })
    .catch((err) => console.log(err));




function loadEmloyees(dolgozoLista) {
    dolgozoLista.forEach((dolgozo) => {

        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCity = document.createElement("td");
        let tdSalary = document.createElement("td");
        tdId.textContent = dolgozo.id;

        tdName.textContent = dolgozo.name;
        tdCity.textContent = dolgozo.city;
        tdSalary.textContent = dolgozo.salary;

        dolgozoTorzs.append(tr);
        tr.append(tdId, tdName, tdCity, tdSalary);

    });
}


addButtonSave.addEventListener('click', () => {
    console.log("Hozzáadás...");
    addEmployee();
})

function addEmployee() {
    let name = nameInput.value;
    let city = cityInput.value;
    let salary = salaryInput.value;

    fetch(url, {
        method:'POST',
        body: JSON.stringify({
            "name": name,
            "city": city,
            "salary": salary
        }),
        headers: {
            "Contenc-Type": "application/json"
        }
    })
    .then( response => response.json() )
    .then( result => console.log(result))
    .catch(err => console.log(err))

    ;
}
