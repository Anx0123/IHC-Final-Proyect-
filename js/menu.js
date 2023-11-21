const inicio = document.querySelector("#inicio");
const ofrecemos = document.querySelector("#ofrecemos");
const nosotros = document.querySelector("#nosotros");
const app = document.querySelector("#app");
const planes = document.querySelector("#planes");
const contacto = document.querySelector("#contacto");

inicio.addEventListener("click", (i) => {
    i.preventDefault();
    const sectionI = document.querySelector("#inicio-section");
    sectionI.scrollIntoView({behavior: "smooth"});
})

ofrecemos.addEventListener("click", (o) => {
    o.preventDefault();
    const sectionO = document.querySelector("#ofrecemos-section");
    sectionO.scrollIntoView({behavior: "smooth"});
})

nosotros.addEventListener("click", (n) => {
    n.preventDefault();
    const sectionN = document.querySelector("#nosotros-section");
    sectionN.scrollIntoView({behavior: "smooth"});
})

app.addEventListener("click", (a) => {
    a.preventDefault();
    const sectionA = document.querySelector("#app-section");
    sectionA.scrollIntoView({behavior: "smooth"});
})

planes.addEventListener("click", (p) => {
    p.preventDefault();
    const sectionP = document.querySelector("#planes-section");
    sectionP.scrollIntoView({behavior: "smooth"});
})

contacto.addEventListener("click", (c) => {
    c.preventDefault();
    const sectionC = document.querySelector("#contacto-section");
    sectionC.scrollIntoView({behavior: "smooth"});
})
