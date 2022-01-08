var xhr = new XMLHttpRequest();
let dead = []
let c 


// function exd() {
// dead = []
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
         var data = JSON.parse(this.responseText);
// console.log(data)
    for(var i = 0; i < data.length; i++){
        dead.push(data[i].Deaths - 0)

    }

    for (var i = 0; i < dead.length; i++) {
        var target = dead[i];
        for (var j = i - 1; j >= 0 && (dead[j] < target); j--) {
            dead[j+1] = dead[j];
        }
        dead[j+1] = target
    }
console.log(dead);



    fetch(`https://api.amukh1.dev/getNameOfDeath?deaths=${dead[0]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("dead1").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("dead1").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[1]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("dead2").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("dead2").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[2]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("kille3").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("dead3").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[3]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("4e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("4e").innerHTML = data[0].UserName
        }
    })

    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[4]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("5e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("5e").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[5]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("6e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("6e").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[6]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("7e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("7e").innerHTML = data[0].UserName
        }
    })

    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[7]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("8e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("8e").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[8]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("9e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("9e").innerHTML = data[0].UserName
        }
    })

    fetch(`https://api.amukh1.dev/getNameOfKill?deaths=${dead[9]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("10e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("10e").innerHTML = data[0].UserName
        }
    })
    
    
    

for(var i = 1; i < 11; i++){
    
    document.getElementById("kill" + i).innerHTML = `Kills: ${dead[i - 1]}`
    
}
    }
};



xhr.open("GET", "https://api.amukh1.dev/getAll", true);
xhr.send();

// }
// exd()
// setInterval(exd, 15000);