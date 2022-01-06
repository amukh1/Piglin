var xhr = new XMLHttpRequest();
let killed = []
let c 


// function exd() {
// killed = []
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
         var data = JSON.parse(this.responseText);
// console.log(data)
    for(var i = 0; i < data.length; i++){
        killed.push(data[i].Kills - 0)

    }

    for (var i = 0; i < killed.length; i++) {
        var target = killed[i];
        for (var j = i - 1; j >= 0 && (killed[j] < target); j--) {
            killed[j+1] = killed[j];
        }
        killed[j+1] = target
    }
console.log(killed);



    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[0]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("killed1").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("killed1").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[1]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("killed2").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("killed2").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[2]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("kille3").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("killed3").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[3]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("4e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("4e").innerHTML = data[0].UserName
        }
    })

    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[4]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("5e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("5e").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[5]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("6e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("6e").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[6]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("7e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("7e").innerHTML = data[0].UserName
        }
    })

    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[7]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("8e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("8e").innerHTML = data[0].UserName
        }
    })
    
    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[8]}`)
    .then(response => response.json())
    .then(data => {
console.log(data)
if(data.length > 1) {
    document.getElementById("9e").innerHTML = `${data[0].UserName} and ${data[1].UserName}`
}else {
    document.getElementById("9e").innerHTML = data[0].UserName
        }
    })

    fetch(`https://api.amukh1.dev/getNameOfKill?kills=${killed[9]}`)
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
    
    document.getElementById("kill" + i).innerHTML = `Kills: ${killed[i - 1]}`
    
}
    }
};



xhr.open("GET", "https://api.amukh1.dev/getAll", true);
xhr.send();

// }

// setInterval(exd, 15000);