export const feed = [
    {
        id: 1,
        title: 'Title 1',
        author: {
            id: 1,
            name: 'Michael Stevens',
            avatar: 'https://i.imgur.com/9rnJnmm.png',
        },
        date: new Date(),
        description: ' since the 1500s, when an unknown printer took a galley o' +
        'f type and scrambled it to make a type specimen book. It has survived not' +
        ' only five centuries, but also the leap into electronic typesetting, remainin' +
        'g essentially unchanged. It was popularised in the 1960s with the release of ' +
        'Letraset sheets contain',
        url: 'https://www.planwallpaper.com/static/images/canberra_hero_image_JiMVvYU.jpg',
        liked: true,
        comments: [
            {
                id: 101,
                content: 'fake comment This impressive paella is a perfect party dish an' +
                'd a fun meal to cook together with your guests. Add 1 cup of frozen peas along ',
                author: {
                    id: 2,
                    name: 'Vickie Montgomery',
                    avatar: 'https://i.imgur.com/w5mIBUV.jpg',
                },
            },
        ],
    },
    {
        id: 2,
        title: 'Title 2',
        author: {
            id: 2,
            name: 'Vickie Montgomery',
            avatar: 'https://i.imgur.com/w5mIBUV.jpg',
        },
        date: new Date(),
        description: ' since the 1500s, when an unknown printer took a galley ' +
        'of type and scrambled it to make a type specimen book. It has survived' +
        ' not only five centuries, but also the leap into electronic typesetting,' +
        ' remaining essentially unchanged. It was popularised in the 1960s with the' +
        ' release of Letraset sheets contain',
        url: 'https://www.planwallpaper.com/static/images/canberra_hero_image_JiMVvYU.jpg',
        liked: false,
        comments: [
            {
                id: 102,
                content: 'fake comment',
                author: {
                    id: 1,
                    name: 'Michael Stevens',
                    avatar: 'https://i.imgur.com/9rnJnmm.png',
                },
            },
            {
                id: 123,
                content: 'fake cfun meal to cook together with your guests. Add 1 cup of frozen peas along ',
                author: {
                    id: 2,
                    name: 'Vickie Montgomery',
                    avatar: 'https://i.imgur.com/w5mIBUV.jpg',
                },
            },
        ],
    },
    {
        id: 3,
        title: 'Title 3',
        author: {
            id: 3,
            name: 'Austin Evans',
            avatar: 'https://i.imgur.com/9rnJnmm.png',
        },
        date: new Date(),
        description: 'This impressive paella is a perfect party dish and a fun ' +
        'meal to cook together with your guests. Add 1 cup of frozen peas along ' +
        'with the mussels, if you like.',
        url: 'https://www.planwallpaper.com/static/images/canberra_hero_image_JiMVvYU.jpg',
        liked: false,
        comments: [
            {
                id: 103,
                content: 'fake comment',
                author: {
                    id: 2,
                    name: 'Vickie Montgomery',
                    avatar: 'https://i.imgur.com/w5mIBUV.jpg',
                },
            },
        ],
    },
];
