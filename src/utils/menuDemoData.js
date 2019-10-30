const menuDemoData = [
    // {
    //     "CategoryId": 1,
    //     "CategoryParentId": 0,
    //     "CategoryLevel": 1,
    //     "CategoryName": "Clothing",
    //     "CategoryDescription": "clothing description",
    // },
    { categoryId: 213213211, categoryName: "Root", categoryParentId: -1 },
    { categoryId: 1, categoryParentId: 0, categoryName: "Clothing", categoryLevel: 1, categoryDescription: "clothing description" },
    { categoryId: 31, categoryParentId: 0, categoryName: "Electronic", categoryLevel: 1, categoryDescription: "Electronic description" },
    { categoryId: 2, categoryParentId: 1, categoryName: "Men's Clothing", categoryLevel: 2, CategoryDescription: "men's clothing description" },
    { categoryId: 4, categoryParentId: 1, categoryName: "Women's Clothing", categoryLevel: 2, CategoryDescription: "women's clothing description" },
    { categoryId: 3, categoryParentId: 2, categoryName: "T-shirts Clothing", categoryLevel: 3, CategoryDescription: "T-shirts clothing description" },
    { categoryId: 5, categoryParentId: 4, categoryName: "sarie  Clothing", categoryLevel: 3, CategoryDescription: "sarie  clothing description" },
    { categoryId: 6, categoryParentId: 3, categoryName: "formal", categoryLevel: 4, CategoryDescription: "formal  clothing description" },
    // {id: 2, categoryName: "Cat1", parentId: 0},
    // {id: 5, categoryName: "Cat4", parentId: 0},
    // {id: 8, categoryName: "Cat7", parentId: 0},
    // {id: 10, categoryName: "Cat9", parentId: 0},
    // {id: 12, categoryName: "Cat11", parentId: 0},
    // {id: 3, categoryName: "Cat2", parentId: 2},
    // {id: 9, categoryName: "Cat8", parentId: 2},
    // {id: 4, categoryName: "Cat3", parentId: 3},
    // {id: 14, categoryName: "Cat3.5", parentId: 4},
    // {id: 6, categoryName: "Cat5", parentId: 5},
    // {id: 7, categoryName: "Cat6", parentId: 5},
    // {id: 13, categoryName: "Cat12", parentId: 8},
    // {id: 11, categoryName: "Cat10", parentId: 10},
];
// [
//     {
//         id: 2,
//         categoryName: "Cat1",
//         subChild: [
//             {
//                 id: 3,
//                 categoryName: "Cat2",
//                 subChild: [
//                     {
//                         id: 4,
//                         categoryName: "Cat3",
//                         subChild: null
//                     },
//                 ]
//             },
//             {
//                 id: 9,
//                 categoryName: "Cat8",
//                 subChild: null
//             },]
//     },
//     {
//         id: 5,
//         categoryName: "Cat4",
//         subChild: [
//             {
//                 id: 6,
//                 categoryName: "Cat5",
//                 subChild: null
//             },
//             {
//                 id: 7,
//                 categoryName: "Cat6",
//                 subChild: null
//             },]
//     },
//     {
//         id: 8,
//         categoryName: "Cat7",
//         subChild: [
//             {
//                 id: 13,
//                 categoryName: "Cat12",
//                 subChild: null
//             },
//         ]
//     },
//     {
//         id: 10,
//         categoryName: "Cat9",
//         subChild: [
//             {
//                 id: 11,
//                 categoryName: "Cat10",
//                 subChild: null
//             },
//         ]
//     },
//     {
//         id: 12,
//         categoryName: "Cat11",
//         subChild: null
//     },
// ]

export default menuDemoData;
