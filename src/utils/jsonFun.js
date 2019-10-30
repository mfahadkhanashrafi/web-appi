
// genrateJson
export default function genrateJson(dataHere){
    var root = document.createElement('ul'),
        currentParentId = 0,
        currentParentUl = root;
    var my_root = [];
    var my_obj = {};


    const categories = dataHere.sort((a, b) => (a.categoryParentId < b.categoryParentId) ? -1 : 0)

    for (var i = 1; i < categories.length; ++i) {
        if (categories[i].categoryParentId !== currentParentId) {
            // console.log(categories[i].categoryName)
            currentParentId = categories[i].categoryParentId;
            // currentParentUl = document.createElement('ul');
            my_obj['cat_name']= categories[i].categoryName;
            my_obj['cat_id']= categories[i].categoryId;
            my_root.push(my_obj)
        }
        my_obj['cat_name']= categories[i].categoryName;
        my_obj['cat_id']= categories[i].categoryId;
        }
    console.log(my_root)
}