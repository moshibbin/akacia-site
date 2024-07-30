interface ServicesType {
    id: number,
    name: string,
    description: string,
    image: string,
    bg: string,
    servicesInclude: { name: string, description: string }[]
}
export const servicesList: ServicesType[] = [
    {
        id: 1, name: "Hair Treatment",
        description: "Utilizing advanced laser technology, we provide precise treatments for hair removal.",

        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Laser Hair Removal", description: "" },

        ]

    },
    {
        id: 2, name: " Injections",
        description: "Anticipating amazing injectable aesthetic treatment product.",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: " Botox", description: "" },
            { name: "Colladew", description: "" },
            { name: "Hyaldew All Filler Syringe", description: "" },
            { name: "Hyperhidrosis One Area", description: "" },
            { name: "Lipolitics Injection", description: "" },
            { name: "Mesotherapy Eyes", description: "" },
            { name: "Mesotherapy Face", description: "" },
            { name: "Pdo Thread Lift Procedure", description: "" },
            { name: "Prp Face", description: "" },
            { name: "Prp hands", description: "" },
            { name: "UltraHilo", description: "" },
            { name: "Mesotherapy Lips", description: "" }
        ]

    },
    {
        id: 3, name: "Peeling",
        description: "Improving the texture of skin by exfoliating the dead skin and encouraging production of new cells and smoothing",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Carbon Peel Procedure", description: "" },
            { name: "Carbon Peeling Fingers", description: "" },
            { name: "Chemical Peeling", description: "" },
            { name: "Diamond Peeling Procedure", description: "" },
            { name: "Lips Carbon Peeling", description: "" }
        ]

    },
    {
        id: 4, name: "Skin Care",
        description: "Enhancing natural beauty with our range of aesthetic services designed for subtle yet impactful results",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Care For Problem Skin", description: "" },
            { name: "Cooling Face Mask", description: "" },
            { name: "DMK treatment", description: "" },
            { name: "Hydrafacial Treatment", description: "" },
            { name: "Microneedling Treatment Face", description: "" },
            { name: "Rf Lifting", description: "" },
            { name: "Skin Analysis", description: "" }
        ]

    },
    {
        id: 5, name: "Vitamins",
        description: "Providing you with the required Health essentials that your body need is our top priority.",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Cindella Infusion Per Course 10 Procedures", description: "" },
            { name: "Cindella Infusion Per Course 5 Procedures", description: "" },
            { name: "Cindella Infusion Per Session", description: "" },
            { name: "MultVita Drip", description: "" }
        ]

    },
    {
        id: 6, name: "Fat Loss",
        description: "Promoting holistic well-being, our wellness and body treatments include therapies for detoxification, revitalization, and body contouring.",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Pressotherapy", description: "" },
            { name: "Fat Loss", description: "" },

        ]

    },
    {
        id: 7, name: "Laser Treatment",
        description: "Utilizing advanced laser technology, we provide precise treatments for skin resurfacing and much more.",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Ipl Vessels Removal", description: "" },
            { name: "Laser CO2 Scars", description: "" },
            { name: "Laser Hair Growth", description: "" },
            { name: "Laser Ipl", description: "" },
            { name: "Laser Stretch Marks", description: "" },
            { name: "Pigmentation Removal Laser", description: "" },
            { name: "Tattoo Removal Procedure", description: "" }
        ]

    },
    {
        id: 8, name: "Scalp Treatment",
        description: "Dedicated to improving hair health and appearance, our hair treatments offer solutions for thinning, loss, and scalp conditions.",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Exomsome Stem Cell Procedure", description: "" },
            { name: "Mesotherapy Scalp", description: "" },
            { name: "Prp Scalp", description: "" }
        ]

    },
    {
        id: 9, name: "Surgery",
        description: "Advancing Minimum surgical skin procedures required for health and safety.",
        image: "/images/blog-img.jpg",

        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Removal Of Molluscum Contagiosum", description: "" },
            { name: "Abscess Removal", description: "" },
            { name: "Removal Of Warts", description: "" }
        ]

    },
]
