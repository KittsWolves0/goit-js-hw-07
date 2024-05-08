 const categotyEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categotyEl.length}`);
const categotyNames = categotyEl.forEach(categoty => {
    console.log(`Category: ${categoty.firstElementChild.textContent}`);
    console.log(`Elements: ${categoty.lastElementChild.children.length}`);
});

