export interface Game {
    name: string,
    image: string,
    description?: string,
    link: string
}

export interface favouriteGame {
    name: string,
    image: string,
    locked: boolean,
    console: string
}

export let favGame: favouriteGame = {
    name: "NBA 2K21",
    image: "/src/assets/icons/NBA2k.png",
    locked: true,
    console: "PS5"
}

export const games: Game[] = [
    {
        name: "Minecraft",
        image: "/src/assets/icons/Minecraft.jpg",
        link: ""
    },
    {
        name: "CS2",
        image: "/src/assets/icons/CS2.jpg",
        link: "steam://run/730"
    },
    {
        name: "Rainbow Six Siege",
        image: "/src/assets/icons/R6.jpg",
        link: "steam://run/359550"
    },
    {
        name: "PlayStation+",
        image: "/src/assets/icons/PlayStationPlus.png",
        link: ""
    },
    {
        name: "Star Craft 2",
        image: "/src/assets/icons/StarCraft2.jpg",
        link: ""
    },
    {
        name: "Forza Horizon 5",
        image: "/src/assets/icons/ForzaHorizon5.jpg",
        link: "steam://run/1551360"
    },
        {
        name: "Fortnite",
        image: "/src/assets/icons/Fortnite.jpg",
        link: ""
    },
    {
        name: "Spiderman Remastered",
        image: "/src/assets/icons/SpidermanRemastered.jpg",
        link: "steam://run/1817070"
    },
    {
        name: "Terraria",
        image: "/src/assets/icons/Terraria.jpg",
        link: "steam://run/105600"
    },
    {
        name: "Last of Us",
        image: "/src/assets/icons/LastOfUs.png",
        link: "steam://run/1888930"
    },
]