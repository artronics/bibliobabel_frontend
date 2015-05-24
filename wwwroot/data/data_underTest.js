'use strict';

var post =
    [
        {
            id:1,
            type: "plainText",
            createdAt: "2015-05-23T16:11:04Z",
            updatedAt: "2015-06-10T20:11:04Z",
            privacy: "public",
            content: {
                url: "",
                rtf:"This is the first mock status."
            },
            owner: {
                id:6,
                screenName: "Ali Moghadasian"
            },
            user: {
                id:1,
                screenName: "Seyed Jalal Hosseini",
                image: "http://lorempixel.com/64/64",
                relationship:"fan"
            },
            comments: [
                {
                    id: 5,
                    createdAt: "2015-05-23T16:11:04Z",
                    updatedAt: "2015-06-10T20:11:04Z",
                    replyTo:"",
                    likes: 10,
                    replies: 2,
                    content: {
                        text:"First comment!"
                    },
                    owner:{
                        id: 56,
                        screenName:"Akram Sabzalipour",
                        image: "http://lorempixel.com/40/40"
                    }
                }
            ]
        },

        {
        id:1,
        type: "plainText",
            createdAt: "2015-06-11T20:11:04Z",
            updatedAt: "2015-06-10T20:11:04Z",
        privacy: "public",
        content: {
            url: "",
            rtf:"This is the first mock status."
        },
        owner: {
            id:6,
            screenName: "Ali Moghadasian"
        },
        user: {
            id:1,
            screenName: "Seyed Jalal Hosseini",
            image: "http://lorempixel.com/64/64",
            relationship:"fan"
        },
        comments: [
            {
                id: 5,
                createdAt: "2015-05-23T16:11:04Z",
                updatedAt: "2015-06-10T20:11:04Z",
                replyTo:"",
                likes: 10,
                replies: 2,
                content: {
                    text:"First comment!"
                },
                owner:{
                    id: 56,
                    screenName:"Akram Sabzalipour",
                    image: "http://lorempixel.com/40/40"
                }
            }
        ]
    }
    ];

var comments=[
    {
        id:0,
        repliedTo:null,
        content:"a parent comment with no replies"
    },
    {
        id:1,
        repliedTo:null,
        content:"a parent comment with replies"
    },
    {
        id:2,
        repliedTo:1,
        content:"a reply to comment id 2"
    },
    {
        id:3,
        repliedTo:2,
        content:"a reply to a reply (comment id 3) "
    },
    {
        id:4,
        repliedTo:null,
        content:"a comment without reply "
    },
    {
        id:5,
        repliedTo:3,
        content:"a reply to a reply (comment id 4) "
    },
    {
        id:6,
        repliedTo:2,
        content:"a reply to a reply (comment id 3) "
    },
];

