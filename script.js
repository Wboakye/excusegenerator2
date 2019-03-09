function generateExcuse(){
    const art =['The', 'My', 'Your']
    const subject = ['mailman', 'teacher', 'bus driver', 'wife', 'president'];
    const action = ['killed', 'threw', 'bit', 'stole', 'broke'];
    const what = ['my dog', 'my feelings', 'my car', 'my foot', 'my house']
    const predicate = ['slowly', 'quickly', 'aggressively', 'menacingly', 'spitefully'];
 


    let excuse = art[Math.floor(Math.random() * 3)] + " " + subject[Math.floor(Math.random() * 5)] + " " + action[Math.floor(Math.random() * 5)] +" " + what[Math.floor(Math.random() * 5)] + " " + predicate[Math.floor(Math.random() * 5)];
    
    document.querySelector("#excuse").innerHTML = excuse;

}