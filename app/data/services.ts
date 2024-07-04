interface ServicesType {
    id: number,
    name: string,
    description: string,
    image: string,
    icon: string,
    icon2: string,
    bg: string,
    servicesInclude: { name: string, description: string, icon: string }[]
}
export const servicesList: ServicesType[] = [
    {
        id: 1, name: " Skin Treatments",
        description: "Our skin treatments aim to rejuvenate and enhance our client skin's natural beauty, addressing a variety of concerns with precision and care.",

        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [{ name: "Implant Dentistry", description: "", icon: "/images/008-implant.svg" },
        { name: "Skin Analysis", description: "", icon: "/images/008-implant.svg" },
        { name: "Pigmentation Treatment", description: "", icon: "/images/008-implant.svg" },
        { name: "Carbon Peel Procedures", description: "", icon: "/images/008-implant.svg" },
        { name: "Chemical Peeling ", description: "", icon: "/images/008-implant.svg" },
        { name: "Microneedling", description: "", icon: "/images/008-implant.svg" },
        { name: "PRP Treatments", description: "", icon: "/images/008-implant.svg" },
        { name: "Laser Co2 ", description: "", icon: "/images/008-implant.svg" },
        { name: "Mesotherapy TreatmenT ", description: "", icon: "/images/008-implant.svg" },
        { name: "Acne and Scar Treatment ", description: "", icon: "/images/008-implant.svg" },
        ]

    },
    {
        id: 2, name: " Hair Treatments",
        description: "Dedicated to improving hair health and appearance, our hair treatments offer solutions for thinning, loss, and scalp conditions.",
        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "PRP Scalp", description: "", icon: "/images/008-implant.svg" },
            { name: "Hair Growth", description: "", icon: "/images/008-implant.svg" },
            { name: "Mesotherapy Treatments for Scalp", description: "", icon: "/images/008-implant.svg" },
        ]

    },
    {
        id: 3, name: "Laser Procedures",
        description: "Utilizing advanced laser technology, we provide precise treatments for hair removal, skin resurfacing, and more.",
        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: " Laser Hair Removal", description: "", icon: "/images/008-implant.svg" },
            { name: "IPL", description: "", icon: "/images/008-implant.svg" },
            { name: "Tattoo Removal", description: "", icon: "/images/008-implant.svg" },
            { name: "Laser Co2 for scars", description: "", icon: "/images/008-implant.svg" },
            { name: "Stretch mark", description: "", icon: "/images/008-implant.svg" },
            { name: "Pigmentation Removal Laser", description: "", icon: "/images/008-implant.svg" },
            { name: "Tattoo Removal", description: "", icon: "/images/008-implant.svg" },
        ]

    },
    {
        id: 4, name: "Aesthetic Enhancements",
        description: "Enhancing natural beauty with our range of aesthetic services designed for subtle yet impactful results.",
        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Botox", description: "", icon: "/images/008-implant.svg" },
            { name: "Filler", description: "", icon: "/images/008-implant.svg" },
            { name: "PDO Thread Lift Procedure", description: "", icon: "/images/008-implant.svg" },
        ]

    },
    {
        id: 5, name: "Wellness and Body Treatments",
        description: "Promoting holistic well-being, our wellness and body treatments include therapies for detoxification, revitalization, and body contouring.",
        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Glutathione Infusion", description: "", icon: "/images/008-implant.svg" },
            { name: "MultVitamine Drip", description: "", icon: "/images/008-implant.svg" },
            { name: "Pressotherapy", description: "", icon: "/images/008-implant.svg" },
            { name: "Massage services", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolipolysis for targeted fat reduction", description: "", icon: "/images/008-implant.svg" },
        ]

    }
]