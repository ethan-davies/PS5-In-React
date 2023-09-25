export interface Game {
    name: string,
    image: string,
    description?: string,
}

export interface favouriteGame {
    name: string,
    image: string,
    locked: boolean,
    console: string
}

export let favGame: favouriteGame = {
    name: "NBA 2K",
    image: "/src/assets/icons/NBA2k.png",
    locked: true,
    console: "PS5"
}

export const games: Game[] = [
    {
        name: "Minecraft",
        image: "/src/assets/icons/Minecraft.jpg",
    },
    {
        name: "CS2",
        image: "/src/assets/icons/CS2.jpg",
    },
    {
        name: "Rainbow Six Siege",
        image: "/src/assets/icons/R6.jpg",
    },
    {
        name: "PlayStation+",
        image: "/src/assets/icons/PlayStationPlus.png",
    },
    {
        name: "Star Craft 2",
        image: "/src/assets/icons/StarCraft2.jpg",
    },
    {
        name: "Forza Horizon 5",
        image: "/src/assets/icons/ForzaHorizon5.jpg",
    },
        {
        name: "Fortnite",
        image: "/src/assets/icons/Fortnite.jpg",
    },
    {
        name: "Spiderman Remastered",
        image: "/src/assets/icons/SpidermanRemastered.jpg",
    },
    {
        name: "Terraria",
        image: "/src/assets/icons/Terraria.jpg",
    },
    {
        name: "Last of Us",
        image: "/src/assets/icons/LastOfUs.png",
    },
]