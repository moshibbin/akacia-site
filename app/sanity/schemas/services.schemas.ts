const services = {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "image",
            title: "Image",
            type: "string"
        },
        {
            name: 'servicesInclude',
            title: 'Services Include',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                    ],
                },
            ],
        }

    ]
}

export default services;