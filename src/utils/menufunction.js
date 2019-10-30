// genrateMenu = (menuDemoData) => {
export default function genrateMenu(dataHere){
    var root = document.createElement('ul'),
        currentParentId = 0,
        currentParentUl = root;

    const categories = dataHere.sort((a, b) => (a.categoryParentId < b.categoryParentId) ? -1 : 0)

    for (var i = 1; i < categories.length; ++i) {
        if (categories[i].categoryParentId !== currentParentId) {
            // console.log(categories[i].categoryName)
            currentParentId = categories[i].categoryParentId;
            currentParentUl = document.createElement('ul');
            root.getElementsByClassName('category_' + currentParentId)[0]
                .appendChild(currentParentUl);
        }
        currentParentUl.innerHTML += '<li class="category_' + categories[i].categoryId + '">' + categories[i].categoryName + '</li>';
    }
    var cats = document.getElementById('cats');
    if (cats.firstChild) { cats.removeChild(cats.firstChild); }
    cats.appendChild(root);
}
