export type IndianSubAreaType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
};

export type IndianAreaType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
    subAreas?: IndianSubAreaType[];
};

export type IndianCityType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
    areas: IndianAreaType[];
};

export type IndianStateType = {
    name: string;
    slug: string;
    isActive: boolean;
    seoEnabled: boolean;
    cities: IndianCityType[];
};

export const CanadianProvinces: IndianStateType[] = [
    {
        name: "Ontario",
        slug: "ontario",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "Toronto", slug: "toronto", isActive: true, seoEnabled: true, areas: [
                    {
                        name: "Downtown Toronto", slug: "downtown-toronto", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Financial District", slug: "financial-district", isActive: true, seoEnabled: true },
                            { name: "Entertainment District", slug: "entertainment-district", isActive: true, seoEnabled: true },
                            { name: "King West", slug: "king-west", isActive: true, seoEnabled: true },
                            { name: "Harbourfront", slug: "harbourfront", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Yorkville & Midtown", slug: "yorkville-midtown", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Yorkville", slug: "yorkville", isActive: true, seoEnabled: true },
                            { name: "Rosedale", slug: "rosedale", isActive: true, seoEnabled: true },
                            { name: "Yonge & Eglinton", slug: "yonge-eglinton", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "North York", slug: "north-york", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Willowdale", slug: "willowdale", isActive: true, seoEnabled: true },
                            { name: "Bayview Village", slug: "bayview-village", isActive: true, seoEnabled: true },
                            { name: "Don Mills", slug: "don-mills", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Etobicoke", slug: "etobicoke", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "The Kingsway", slug: "the-kingsway", isActive: true, seoEnabled: true },
                            { name: "Mimico", slug: "mimico", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Scarborough", slug: "scarborough", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Scarborough City Centre", slug: "scarborough-city-centre", isActive: true, seoEnabled: true },
                            { name: "Agincourt", slug: "agincourt", isActive: true, seoEnabled: true }
                        ]
                    }
                ]
            },
            {
                name: "Ottawa", slug: "ottawa", isActive: true, seoEnabled: true, areas: [
                    { name: "Centretown & Glebe", slug: "centretown-glebe", isActive: true, seoEnabled: true },
                    { name: "Kanata", slug: "kanata", isActive: true, seoEnabled: true },
                    { name: "Nepean", slug: "nepean", isActive: true, seoEnabled: true },
                    { name: "Orleans", slug: "orleans", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Mississauga", slug: "mississauga", isActive: true, seoEnabled: true, areas: [
                    { name: "City Centre", slug: "city-centre", isActive: true, seoEnabled: true },
                    { name: "Port Credit", slug: "port-credit", isActive: true, seoEnabled: true },
                    { name: "Streetsville", slug: "streetsville", isActive: true, seoEnabled: true },
                    { name: "Erin Mills", slug: "erin-mills", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Brampton", slug: "brampton", isActive: true, seoEnabled: true, areas: [
                    { name: "Downtown Brampton", slug: "downtown-brampton", isActive: true, seoEnabled: true },
                    { name: "Bramalea", slug: "bramalea", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Hamilton", slug: "hamilton", isActive: true, seoEnabled: true, areas: [
                    { name: "Downtown Hamilton", slug: "downtown-hamilton", isActive: true, seoEnabled: true },
                    { name: "Ancaster", slug: "ancaster", isActive: true, seoEnabled: true },
                    { name: "Dundas", slug: "dundas", isActive: true, seoEnabled: true }
                ]
            }
        ]
    },
    {
        name: "British Columbia",
        slug: "british-columbia",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "Vancouver", slug: "vancouver", isActive: true, seoEnabled: true, areas: [
                    {
                        name: "Kitsilano & Point Grey", slug: "kitsilano-point-grey", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Kitsilano", slug: "kitsilano", isActive: true, seoEnabled: true },
                            { name: "West Point Grey", slug: "west-point-grey", isActive: true, seoEnabled: true },
                            { name: "Kerrisdale", slug: "kerrisdale", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Downtown Vancouver", slug: "downtown-vancouver", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Yaletown", slug: "yaletown", isActive: true, seoEnabled: true },
                            { name: "Coal Harbour", slug: "coal-harbour", isActive: true, seoEnabled: true },
                            { name: "West End", slug: "west-end", isActive: true, seoEnabled: true }
                        ]
                    },
                    {
                        name: "Mount Pleasant & Commercial", slug: "mount-pleasant-commercial", isActive: true, seoEnabled: true
                    }
                ]
            },
            {
                name: "Richmond", slug: "richmond", isActive: true, seoEnabled: true, areas: [
                    { name: "City Centre", slug: "richmond-city-centre", isActive: true, seoEnabled: true },
                    { name: "Steveston", slug: "steveston", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Burnaby", slug: "burnaby", isActive: true, seoEnabled: true, areas: [
                    { name: "Metrotown", slug: "metrotown", isActive: true, seoEnabled: true },
                    { name: "Brentwood", slug: "brentwood", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Victoria", slug: "victoria", isActive: true, seoEnabled: true, areas: [
                    { name: "Downtown Victoria", slug: "downtown-victoria", isActive: true, seoEnabled: true },
                    { name: "Oak Bay", slug: "oak-bay", isActive: true, seoEnabled: true }
                ]
            }
        ]
    },
    {
        name: "Alberta",
        slug: "alberta",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "Calgary", slug: "calgary", isActive: true, seoEnabled: true, areas: [
                    {
                        name: "Downtown & Beltline", slug: "downtown-beltline", isActive: true, seoEnabled: true,
                        subAreas: [
                            { name: "Beltline", slug: "beltline", isActive: true, seoEnabled: true },
                            { name: "Eau Claire", slug: "eau-claire", isActive: true, seoEnabled: true }
                        ]
                    },
                    { name: "Kensington & Hillhurst", slug: "kensington-hillhurst", isActive: true, seoEnabled: true },
                    { name: "South Calgary", slug: "south-calgary", isActive: true, seoEnabled: true },
                    { name: "Northwest Calgary", slug: "northwest-calgary", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Edmonton", slug: "edmonton", isActive: true, seoEnabled: true, areas: [
                    { name: "Downtown Edmonton", slug: "downtown-edmonton", isActive: true, seoEnabled: true },
                    { name: "Old Strathcona", slug: "old-strathcona", isActive: true, seoEnabled: true },
                    { name: "Windermere", slug: "windermere", isActive: true, seoEnabled: true }
                ]
            }
        ]
    },
    {
        name: "Quebec",
        slug: "quebec",
        isActive: true,
        seoEnabled: true,
        cities: [
            {
                name: "Montreal", slug: "montreal", isActive: true, seoEnabled: true, areas: [
                    { name: "Downtown Montreal", slug: "downtown-montreal", isActive: true, seoEnabled: true },
                    { name: "Westmount & NDG", slug: "westmount-ndg", isActive: true, seoEnabled: true },
                    { name: "Plateau Mont-Royal", slug: "plateau-mont-royal", isActive: true, seoEnabled: true },
                    { name: "Old Montreal", slug: "old-montreal", isActive: true, seoEnabled: true }
                ]
            },
            {
                name: "Quebec City", slug: "quebec-city", isActive: true, seoEnabled: true, areas: [
                    { name: "Old Quebec", slug: "old-quebec", isActive: true, seoEnabled: true },
                    { name: "Sainte-Foy", slug: "sainte-foy", isActive: true, seoEnabled: true }
                ]
            }
        ]
    }
];

export const IndianStates = CanadianProvinces;
