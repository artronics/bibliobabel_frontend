'use strict';

var post =
    [
        {
            id: 1,
            type: "plainText",
            createdAt: "2015-05-23T16:11:04Z",
            updatedAt: "2015-06-10T20:11:04Z",
            privacy: "public",
            content: {
                url: "",
                rtf: "This is the first mock status."
            },
            owner: {
                id: 6,
                screenName: "Ali Moghadasian"
            },
            user: {
                id: 1,
                screenName: "Seyed Jalal Hosseini",
                image: "http://lorempixel.com/64/64",
                relationship: "fan"
            },
            comment: {
                links: [
                    {
                        href: "",
                        rel: "self"
                    },
                    {
                        href: "",
                        rel: "prev"
                    },
                    {
                        href: "",
                        rel: "next"
                    }
                ],
                count: 1,
                commentsCount: 20,
                comments: [
                    {
                        id: 5,
                        createdAt: "2015-05-25T16:11:04Z",
                        updatedAt: "2015-06-10T20:11:04Z",
                        likesCount: 10,
                        link: {
                            href: "",
                            rel: ""
                        },
                        owner: {
                            id: 1,
                            link: {
                                href: "/user/1234",
                                rel: "kir"
                            },
                            displayName: "Seyed Jalal Hosseini",
                            image: "http://lorempixel.com/40/40"
                        },
                        content: {
                            text: "this is a comment. kiram dahanet."
                        }
                    }
                ]
            }
        }
    ];

var comment = {

    comments: [
        {
            id: 0,
            repliedTo: null,
            content: "a parent comment with no replies"
        },
        {
            id: 1,
            repliedTo: null,
            content: "a parent comment with replies"
        },
        {
            id: 2,
            repliedTo: 1,
            content: "a reply to comment id 2"
        },
        {
            id: 3,
            repliedTo: 2,
            content: "a reply to a reply (comment id 3) "
        },
        {
            id: 4,
            repliedTo: null,
            content: "a comment without reply "
        },
        {
            id: 5,
            repliedTo: 3,
            content: "a reply to a reply (comment id 4) "
        },
        {
            id: 6,
            repliedTo: 2,
            content: "a reply to a reply (comment id 3) "
        },
    ]
};
var comment =
{
    links: [
        {
            href: "",
            rel: "self"
        },
        {
            href: "",
            rel: "prev"
        },
        {
            href: "",
            rel: "next"
        }
    ],
    commentsCount: 20,
    comments: [
        {
            id: 5,
            createdAt: "",
            updatedAt: "",
            likesCount: 10,
            link: {
                href: "",
                rel: ""
            },
            owner: {
                id: 1,
                link: {
                    href: "/user/1234",
                    rel: "kir"
                },
                displayName: "Seyed Jalal Hosseini",
                image: ""
            },
            content: {
                text: "this is a comment. kiram dahanet."
            }
        }
    ]
};
