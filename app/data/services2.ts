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
        description: "Dedicated to improving hair health and appearance, our hair treatments offer solutions for thinning, loss, and scalp conditions.",

        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "All Face Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Arm To Elbow Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Back ( Full) Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Back Of The Foot Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Belly Line White Procedure ", description: "", icon: "/images/008-implant.svg" },
            { name: "Between Eye Brows Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Buttock Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Calf Including Knees Procedure ", description: "", icon: "/images/008-implant.svg" },
            { name: "Cheeks Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Chest Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Chest Female", description: "", icon: "/images/008-implant.svg" },
            { name: "Chest Male", description: "", icon: "/images/008-implant.svg" },
            { name: "Chin Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Deep Bikini Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Ears Procedures", description: "", icon: "/images/008-implant.svg" },
            { name: "Full Legs (Including Feet) Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Glands Mamilar Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Temples Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Upper Lip Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Waist Procedure", description: "", icon: "/images/008-implant.svg" },
            { name: "Laser Hair Removal", description: "", icon: "/images/008-implant.svg" },

        ]

    },
    {
        id: 2, name: " Fat Loss",
        description: "Dedicated to improving hair health and appearance, our hair treatments offer solutions for thinning, loss, and scalp conditions.",
        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: "Cryolipolysis All Body", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolipolysis Back", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolipolysis Chin", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolipolysis Hands", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolipolysis Hips", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolipolysis Hump", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolipolysis Stomach", description: "", icon: "/images/008-implant.svg" },
            { name: "Cryolopolysis Buttocks", description: "", icon: "/images/008-implant.svg" },
        ]

    },
    {
        id: 3, name: "Injections",
        description: "Utilizing advanced laser technology, we provide precise treatments for hair removal, skin resurfacing, and more.",
        image: "/images/blog-img.jpg",
        icon: "/images/008-implant.svg",
        icon2: "/images/service-icon1.png",
        bg: "/images/services-bg1.png",
        servicesInclude: [
            { name: " Between The Eyebrow Botox", description: "", icon: "/images/008-implant.svg" },
            { name: "Botox Full Face", description: "", icon: "/images/008-implant.svg" },
            { name: "Botox gummy smile", description: "", icon: "/images/008-implant.svg" },
            { name: "Eyes Botox", description: "", icon: "/images/008-implant.svg" },
            { name: "Forehead And Brow Botox", description: "", icon: "/images/008-implant.svg" }
        ]

    }
]