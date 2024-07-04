export type Services = {
    _id: string;
    createdAt: Date;
    name: string;
    description: string,
    image: string,
    servicesInclude: { name: string, description: string }[]

}