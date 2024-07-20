import { servicesList } from "./data/services";


export async function generateStaticParams() {
    const paramsArray = servicesList.flatMap(service =>
        service.servicesInclude.map((subService, index) => ({
            param: service.id.toString(),
            param2: index.toString()
        }))
    );

    return paramsArray;
}
