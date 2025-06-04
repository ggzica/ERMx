import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
    return [
        {
            "id": "683fb1e15336dc0cd9a99b5e",
            "name": "Staci Bowen",
            "email": "stacibowen@cinesanct.com",
            "phoneNbr": "+1 (859) 506-2778",
            "status": "Inactive"
        },
        {
            "id": "683fb1e11605b25da8ed941a",
            "name": "Chandler Dixon",
            "email": "chandlerdixon@cinesanct.com",
            "phoneNbr": "+1 (840) 517-2665",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1edd01bb56f8f3a7a",
            "name": "Cornelia Mcdonald",
            "email": "corneliamcdonald@cinesanct.com",
            "phoneNbr": "+1 (940) 491-2113",
            "status": "Active"
        },
        {
            "id": "683fb1e1c90bcee6f18d0948",
            "name": "Angie Miles",
            "email": "angiemiles@cinesanct.com",
            "phoneNbr": "+1 (926) 571-3918",
            "status": "Inactive"
        },
        {
            "id": "683fb1e171f9b80f85cd3b0b",
            "name": "Tricia Hensley",
            "email": "triciahensley@cinesanct.com",
            "phoneNbr": "+1 (849) 590-3355",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1d2cfc5870a1d37a3",
            "name": "Kristie Chavez",
            "email": "kristiechavez@cinesanct.com",
            "phoneNbr": "+1 (977) 531-3187",
            "status": "Inactive"
        },
        {
            "id": "683fb1e168f5d4b5cb352e70",
            "name": "Nikki Carpenter",
            "email": "nikkicarpenter@cinesanct.com",
            "phoneNbr": "+1 (954) 552-2752",
            "status": "Active"
        },
        {
            "id": "683fb1e12e70f7c87d975908",
            "name": "Hollie Simmons",
            "email": "holliesimmons@cinesanct.com",
            "phoneNbr": "+1 (925) 562-2277",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1c5e3af3fba3c8a37",
            "name": "Sharlene Hansen",
            "email": "sharlenehansen@cinesanct.com",
            "phoneNbr": "+1 (953) 469-2546",
            "status": "Active"
        },
        {
            "id": "683fb1e12eea71248444bcfd",
            "name": "Lara Cabrera",
            "email": "laracabrera@cinesanct.com",
            "phoneNbr": "+1 (901) 429-2407",
            "status": "Active"
        },
        {
            "id": "683fb1e1994a17617d4e2615",
            "name": "Gilliam Walsh",
            "email": "gilliamwalsh@cinesanct.com",
            "phoneNbr": "+1 (901) 469-2786",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1fd45e02f635d7301",
            "name": "Barrett Giles",
            "email": "barrettgiles@cinesanct.com",
            "phoneNbr": "+1 (947) 415-2479",
            "status": "Active"
        },
        {
            "id": "683fb1e1b78e5b34d880b64f",
            "name": "Kramer Hall",
            "email": "kramerhall@cinesanct.com",
            "phoneNbr": "+1 (858) 443-3658",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1b670c1aeb43c53f6",
            "name": "Watts Martinez",
            "email": "wattsmartinez@cinesanct.com",
            "phoneNbr": "+1 (896) 481-2203",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1f6e3609b5450c709",
            "name": "Darla Crawford",
            "email": "darlacrawford@cinesanct.com",
            "phoneNbr": "+1 (909) 561-2143",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1bd4790e4d2ec9e74",
            "name": "Maggie Pate",
            "email": "maggiepate@cinesanct.com",
            "phoneNbr": "+1 (981) 504-2035",
            "status": "Active"
        },
        {
            "id": "683fb1e1a5a894c6a641f53b",
            "name": "Cecelia Soto",
            "email": "ceceliasoto@cinesanct.com",
            "phoneNbr": "+1 (981) 560-2577",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1c480c21e66d3ef6a",
            "name": "Lola Allison",
            "email": "lolaallison@cinesanct.com",
            "phoneNbr": "+1 (891) 551-3663",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1a3def11e2c65ea0d",
            "name": "Boyd Jackson",
            "email": "boydjackson@cinesanct.com",
            "phoneNbr": "+1 (955) 443-2290",
            "status": "Active"
        },
        {
            "id": "683fb1e1d6b916364e7b86fc",
            "name": "Bridges Chang",
            "email": "bridgeschang@cinesanct.com",
            "phoneNbr": "+1 (967) 425-2158",
            "status": "Inactive"
        },
        {
            "id": "683fb1e112355fe789a66edd",
            "name": "Serrano Noel",
            "email": "serranonoel@cinesanct.com",
            "phoneNbr": "+1 (976) 599-2561",
            "status": "Inactive"
        },
        {
            "id": "683fb1e175ccd535f5125593",
            "name": "Ruth Lynn",
            "email": "ruthlynn@cinesanct.com",
            "phoneNbr": "+1 (878) 424-3624",
            "status": "Active"
        },
        {
            "id": "683fb1e105c7936641b6d719",
            "name": "Julia Sutton",
            "email": "juliasutton@cinesanct.com",
            "phoneNbr": "+1 (849) 426-2810",
            "status": "Inactive"
        },
        {
            "id": "683fb1e165d49e220194ccbc",
            "name": "Vang Hendrix",
            "email": "vanghendrix@cinesanct.com",
            "phoneNbr": "+1 (997) 445-2156",
            "status": "Active"
        },
        {
            "id": "683fb1e13f4c3fa34630dd9e",
            "name": "Shawn Rose",
            "email": "shawnrose@cinesanct.com",
            "phoneNbr": "+1 (856) 512-2695",
            "status": "Active"
        },
        {
            "id": "683fb1e17b990bf7bd895cda",
            "name": "Thelma Cervantes",
            "email": "thelmacervantes@cinesanct.com",
            "phoneNbr": "+1 (863) 540-2666",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1174fe2aff5e949b6",
            "name": "Chen Hyde",
            "email": "chenhyde@cinesanct.com",
            "phoneNbr": "+1 (993) 584-2669",
            "status": "Active"
        },
        {
            "id": "683fb1e17f05f0b04acf550a",
            "name": "Osborne English",
            "email": "osborneenglish@cinesanct.com",
            "phoneNbr": "+1 (880) 505-3448",
            "status": "Active"
        },
        {
            "id": "683fb1e1a95c3c3bb39bd8e4",
            "name": "Rose Clements",
            "email": "roseclements@cinesanct.com",
            "phoneNbr": "+1 (929) 575-3871",
            "status": "Inactive"
        },
        {
            "id": "683fb1e107fbc51f28d577b3",
            "name": "Robinson Robles",
            "email": "robinsonrobles@cinesanct.com",
            "phoneNbr": "+1 (941) 501-3946",
            "status": "Inactive"
        },
        {
            "id": "683fb1e1828b67670d3818fb",
            "name": "Wagner Sullivan",
            "email": "wagnersullivan@cinesanct.com",
            "phoneNbr": "+1 (899) 512-3334",
            "status": "Active"
        },
        {
            "id": "683fb1e16afa5d348a2627b4",
            "name": "Velasquez Henson",
            "email": "velasquezhenson@cinesanct.com",
            "phoneNbr": "+1 (955) 427-3074",
            "status": "Inactive"
        },
        {
            "id": "683fb1e15f5a2d1f4e6adf53",
            "name": "Christie Luna",
            "email": "christieluna@cinesanct.com",
            "phoneNbr": "+1 (848) 479-2671",
            "status": "Inactive"
        },
        {
            "id": "683fb1e15a02e0a05357b436",
            "name": "Benson Guerra",
            "email": "bensonguerra@cinesanct.com",
            "phoneNbr": "+1 (842) 459-2159",
            "status": "Inactive"
        },
        {
            "id": "683fb1e131db74a9fc29fc1d",
            "name": "Eula Colon",
            "email": "eulacolon@cinesanct.com",
            "phoneNbr": "+1 (874) 400-3296",
            "status": "Active"
        }
    ]
};
const page = async () => {
    const data = await getData()
    return (
        <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Payments</h1>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default page