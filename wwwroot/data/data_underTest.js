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
                    createdAt:"",
                    updatedAt:"",
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
                createdAt:"",
                updatedAt:"",
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