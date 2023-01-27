function people(name,gender,age,langs){
    return {
        Name: name,
        gender: gender,
        age: age,
        langs: langs
    }
}

x = {
    python: "Intermidiate",
    cpp: "Beginner",
	c: "Beginner",
    js: "Beginner"
}

console.log(people("Sahil Rajwar","Male",18,x))
