const demoData = [{
    data: [
        {
            categoryID: 'cat_1',
            categoryName: 'Clothing',
            subCat: [
                {
                    subCatID: 'sub_cat_1',
                    subCatName: 'Mens Clothing',
                    subCatChild: [
                        {
                            subCatChildID: 'sub_cat_child_1',
                            subCatChildName: 'T-shirt',
                            subCat_child_sub: [
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Formal',
                                },
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Cagual',
                                },
                            ],
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                    ],
                },
                {
                    subCatID: 'sub_cat_2',
                    subCatName: 'Womens Clothing',
                    subCatChild: [
                        {
                            subCatChildID: 'sub_cat_child_1',
                            subCatChildName: 'T-shirt',
                            subCat_child_sub: [
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Formal',
                                },
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Cagual',
                                },
                            ],
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                    ],
                },
                {
                    subCatID: 'sub_cat_3',
                    subCatName: 'Kids Clothing',
                    subCatChild: [
                        {
                            subCatChildID: 'sub_cat_child_1',
                            subCatChildName: 'T-shirt',
                            subCat_child_sub: [
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Formal',
                                },
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Cagual',
                                },
                            ],
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                    ],
                },
            ],
        },
        {
            categoryID: 'cat_1',
            categoryName: 'Deals',
            subCat: [
                {
                    subCatID: 'sub_cat_1',
                    subCatName: 'Mens Clothing',
                    subCatChild: [
                        {
                            subCatChildID: 'sub_cat_child_1',
                            subCatChildName: 'T-shirt',
                            subCat_child_sub: [
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Formal',
                                },
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Cagual',
                                },
                            ],
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                        {
                            subCatChildID: 'sub_cat_child_2',
                            subCatChildName: 'Kurta',
                        },
                    ],
                },
                {
                    subCatID: 'sub_cat_2',
                    subCatName: 'Womens Clothing',
                },
                {
                    subCatID: 'sub_cat_3',
                    subCatName: 'Kids Clothing',
                    subCatChild: [
                        {
                            subCatChildID: 'sub_cat_child_1',
                            subCatChildName: 'T-shirt',
                            subCat_child_sub: [
                                {
                                    subCat_child_subID: 'sub_cat_child_2',
                                    subCat_child_subName: 'Formal',
                                },
                            ],
                        },

                    ],
                },
            ],
        },
    ]
}];


// const demoData =[
//             {
//                 "CategoryId": 1,
//                 "CategoryParentId": 0,
//                 "CategoryLevel": 1,
//                 "CategoryName": "Clothing",
//                 "CategoryDescription": "clothing description",
//             },
//             {
//                 "CategoryId": 2,
//                 "CategoryParentId": 0,
//                 "CategoryLevel": 1,
//                 "CategoryName": "Electronic",
//                 "CategoryDescription": "clothing description",
//             },
//             {
//                 "CategoryId": 3,
//                 "CategoryParentId": 0,
//                 "CategoryLevel": 1,
//                 "CategoryName": "Deals",
//                 "CategoryDescription": "clothing description",

//             },
//             {
//                 "CategoryId": 2,
//                 "CategoryParentId": 1,
//                 "CategoryLevel": 2,
//                 "CategoryName": "Men's Clothing",
//                 "CategoryDescription": "men's clothing description",
//             },
//             {
//                 "CategoryId": 3,
//                 "CategoryParentId": 2,
//                 "CategoryLevel": 3,
//                 "CategoryName": "T-Shirts",
//                 "CategoryDescription": "T-shirts description",
//             },
//             {
//                 "CategoryId": 4,
//                 "CategoryParentId": 2,
//                 "CategoryLevel": 3,
//                 "CategoryName": "T-Shirts",
//                 "CategoryDescription": "T-shirts description",
//             }
//         ];


export default demoData;


