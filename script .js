const url=('https://delicate-pasca-a2767e.netlify.app/food.json')
fetch(url)
.then(res=>res.json())
.then(data=>console.log(data));

