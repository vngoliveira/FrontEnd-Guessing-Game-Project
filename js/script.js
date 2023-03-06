function onGame() {
    
    document.getElementById("container").remove();

    const div = document.createElement("div");
    div.id = "question"
    const p = document.createElement("p");
    const p_content = document.createTextNode("Qual o numero limete do nosso jogo?");
    p.appendChild(p_content);
    const input = document.createElement("input");
    input.type = "number"
    const button = document.createElement("button");
    button.textContent = "Comecar!"

    div.appendChild(p);
    div.appendChild(input);
    document.body.appendChild(div);
    document.body.appendChild(button);

    button.onclick = function() {

        const limit = document.querySelector("input").value;

        if (limit <= 0) {

            alert("Insira um numero valido!");

        } else {
            document.getElementById("question").remove();
            document.querySelector("button").remove();

            const limitNumber = limit;
            const randomNumber = random(limitNumber);
            console.log(randomNumber);

            const div = document.createElement("div");
            div.id = "question"
            const p = document.createElement("p");
            const p_content = document.createTextNode("Ja pensei. Qual você acha que é?");
            const guess = document.createElement("input");
            guess.type = "number"
            const button = document.createElement("button");
            button.textContent = "Esse!"
            
            p.appendChild(p_content);
            div.appendChild(p);
            div.appendChild(guess);
            document.body.appendChild(div);
            document.body.appendChild(button);

            button.onclick = function() {

                const number = document.querySelector("input").value;

                if (number < 0) {

                    alert("Insira um numero valido!");

                } else if(number == randomNumber) {

                    document.getElementById("question").remove();
                    document.querySelector("button").remove();

                    const p = document.createElement("p");
                    p.id = "success"
                    const p_content = document.createTextNode("Parabens! O numero que pensei realmente foi " + number);
                    p.appendChild(p_content);
                    document.body.appendChild(p);
                   
                } else if (number < randomNumber) {

                    const p = document.createElement("p");
                    p.id = "failed"
                    const p_content = document.createTextNode("Poxa, tenta de novo! O numero que pensei e maior que " + number);
                    p.appendChild(p_content);
                    document.body.appendChild(p);
                    
               } else {
                    
                    const p = document.createElement("p");
                    p.id = "failed"
                    const p_content = document.createTextNode("Poxa, tenta de novo! O numero que pensei e menor que " + number);
                    p.appendChild(p_content);
                    document.body.appendChild(p);
                    
               }
            }
        }
    }
}

function random(n) {
    const random = Math.round(Math.random() * n);
    return random;
}