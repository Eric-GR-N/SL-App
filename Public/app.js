
//Global variables to count check in/out

let employeeCount = 0;
let visitors = 0;

const uri = "https://corsanywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=2787dad39e574faf9bfd1e93f539ce54&siteid=9200&timewindow=30&format=json";


//Functions section


//Function to fetch and display the current train departures

function displayTrains(){

    document.querySelector(".people").style.display = "none";

    let summarizeInfo = '';
    let count = 0;
    
    fetch(uri)
    .then((resp) => resp.json())
    .then(function (data){

        let count = 0;
        let trains = data.ResponseData.Metros;

        trains.forEach(train=>{


            if(count<5)
            {
                summarizeInfo+=train.Destination + " - " + train.DisplayTime + '<br><br>';
            }
            
            count++;

        });
        
        document.querySelector(".transport").innerHTML = summarizeInfo;
        document.querySelector(".container").style.display = "flex";
})
};

function displayBuses(){

    document.querySelector(".people").style.display = "none";

    let summarizeInfo = '';
    let count = 0;

    fetch(uri)
    .then((resp) => resp.json())
    .then(function (data){

        let count = 0;
        let buses = data.ResponseData.Buses;

        buses.forEach(bus=>{

            console.log(bus.Destination);


            if(count<5)
            {
                summarizeInfo+= "Buss " + bus.LineNumber + " mot " + bus.Destination + " - " + bus.DisplayTime + '<br><br>';
            }
            
            count++;

        });
        
        document.querySelector(".transport").innerHTML = summarizeInfo;
        document.querySelector(".container").style.display = "flex";
})
};

function displayTime(){


    fetch("https://corsanywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm")
    .then((resp) => resp.json())
    .then(function (data){

        let time = data.datetime.slice(11, 19);
        

        document.getElementById("clock").innerHTML = time;

})
};

function refreshPage(){
    location.reload();
}

function checkInEmployee(){



    const uri = 'https://corsanywhere.herokuapp.com/https://5eb2aeab36d3ee001682ec67.mockapi.io/employees';

    const data = {};

    fetch(uri,
    {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify(data),

        headers:
        {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    })
};

function checkInVisitor(){


    const uri = 'https://corsanywhere.herokuapp.com/https://5eb2aeab36d3ee001682ec67.mockapi.io/visitors';

    const data = {};

    fetch(uri,
    {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify(data),

        headers:
        {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    })
};



function checkOutEmployee(){


    const uri = 'https://corsanywhere.herokuapp.com/https://5eb2aeab36d3ee001682ec67.mockapi.io/employees';

    const data = {};

    fetch(uri,
    {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify(data),

        headers:
        {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    })

    fetch(uri)
    .then((resp)=>resp.json())
    .then(function (data){

    })
};


function displayPeople(){

    document.querySelector(".container").style.display = "none";

    const uri_employees = 'https://corsanywhere.herokuapp.com/https://5eb2aeab36d3ee001682ec67.mockapi.io/employees';
    const uri_visitors = 'https://corsanywhere.herokuapp.com/https://5eb2aeab36d3ee001682ec67.mockapi.io/visitors';


    fetch(uri_employees)
    .then((resp)=>resp.json())
    .then(function (data){
        document.getElementById("employees").innerHTML = data.length;
    })

    fetch(uri_visitors)
    .then((resp)=>resp.json())
    .then(function (data){
        document.getElementById("visitors").innerHTML = data.length;
    })

    document.querySelector(".people").style.display = "flex";
};

document.querySelector(".check").innerHTML = "Välkommen!<br><br>Din incheckning är nu klar";



//Main Code

//Hides the black information box before it's clicked
document.querySelector(".container").style.display = "none";
document.querySelector(".people").style.display = "none";



//Displays the clock on the webpage and fetches the clock API
displayTime();
























