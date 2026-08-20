//Dom is a library for manipulating the HTML document

//Day6
function daY6() {
    //Selecting an element from the html document
    let element = document.getElementById("id");
    console.log(element);

    //Selelcting multiple elements from the HTML document
    let elements = document.getElementsByClassName("class");
    console.log(elements);

    //Selecting multiple elements from the html document\
    let element1 = document.getElementsByTagName("p");
    console.log(element1);

    //Selection by querySelector
    let element2 = document.querySelector("#id");
    console.log(element2);

    //Selction by querySelctorALL
    let element3 = document.querySelectorAll(".class");
    console.log(element3);

    const heading = document.getElementById("id1")
    //Changing the text content of an element 
    element.textContent = "Hello World";
    console.log(element.textContent);

    heading.innerHTML = "<p>Hello World</p>";
    console.log(heading.innerHTML);

    //Styling an element 
    element.style.color = "red";
    element.style.fontSize = "20px";

    //Classlist
    const list = document.querySelectorAll(".class");
    list[0].classList.add("new-class");
    list[1].classList.add("new-class");
    list[2].classList.remove("new-class");
    list[3].classList.toggle("new-class");
}
daY6();