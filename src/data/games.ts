export interface Game {
    name: string
    image: string
    link: string,
    steam: boolean

    description: string
}

export interface favouriteGame {
    name: string
    image: string
    locked: boolean
    console: string

    description: string
}

export let favGame: favouriteGame = {
    name: 'NBA 2K21',
    image: '/src/assets/icons/NBA2k.png',
    locked: true,
    console: 'PS5',
    description:
        'NBA 2K21, the latest installment in the acclaimed basketball simulation video game series, offers a highly realistic and visually stunning gaming experience. With its attention to detail in gameplay, graphics, and player animations, it faithfully recreates the excitement of professional basketball. The game features engaging modes like MyCareer, where players can guide their custom character to NBA stardom, and MyTeam, which combines strategy with card collecting. NBA 2K21 also boasts online multiplayer, historical teams and players, and a diverse soundtrack, delivering an immersive and authentic basketball atmosphere that continues to captivate both basketball enthusiasts and gamers alike.',
}

export const games: Game[] = [
    {
        name: 'Minecraft',
        image: '/src/assets/icons/Minecraft.jpg',
        link: '',
        description:
            "Minecraft, developed by Mojang Studios, is a groundbreaking sandbox game that invites players to embark on limitless adventures in procedurally generated worlds made of blocks. This open-ended, creative playground allows you to build, explore, mine, and survive as you craft your own unique experiences. Whether you're constructing grand structures, battling mobs, or embarking on epic quests, Minecraft offers endless possibilities.",
        steam: false
    },
    {
        name: 'Counter-Strike 2',
        image: '/src/assets/icons/CS2.jpg',
        link: 'steam://run/730',
        description:
            "CS2, developed by Valve, is the eagerly awaited successor to the iconic first-person shooter, Counter-Strike: Global Offensive (CS:GO). CS2 retains the heart-pounding intensity and team-based gameplay that fans love. Players once again have the choice to join either the terrorists or counter-terrorists in a variety of game modes. This highly anticipated release promises updated graphics, mechanics, and potentially new features, building upon the franchise's rich history of competitive gaming. Stay tuned for the latest updates on this thrilling addition to the Counter-Strike series.",
        steam: true
    },
    {
        name: 'Rainbow Six Siege',
        image: '/src/assets/icons/R6.jpg',
        link: 'steam://run/359550',
        description:
            'Rainbow Six Siege is an immersive tactical shooter developed by Ubisoft. It challenges players to become elite special forces operators, mastering the art of strategy and teamwork in high-stakes, close-quarters combat scenarios. With a diverse roster of operators and ever-evolving gameplay, every match offers a dynamic and intense experience.',
        steam: true
    },
    {
        name: 'PlayStation+',
        image: '/src/assets/icons/PlayStationPlus.png',
        link: '',
        description:
            'PlayStation+ is a video game subscription service developed and published by Sony Interactive Entertainment.',
        steam: false
    },
    {
        name: 'Star Craft 2',
        image: '/src/assets/icons/StarCraft2.jpg',
        link: '',
        description:
            'Starcraft 2, the epic real-time strategy (RTS) game developed by Blizzard Entertainment, transports players to a rich sci-fi universe where they command powerful armies and vie for control of the galaxy. With three unique factions, engrossing single-player campaigns, and a thriving esports scene, Starcraft 2 is a hallmark of strategic warfare.',
        steam: false
    },
    {
        name: 'Forza Horizon 5',
        image: '/src/assets/icons/ForzaHorizon5.jpg',
        link: 'steam://run/1551360',
        description:
            'Forza Horizon 5, set in the breathtaking landscapes of Mexico, redefines the racing genre with its open-world approach and stunning visual fidelity. Players can choose from an extensive collection of meticulously detailed cars and engage in thrilling, dynamic races across diverse terrains. The Horizon Festival awaits, promising unforgettable moments and endless driving adventures.',
        steam: true
    },
    {
        name: 'Fortnite',
        image: '/src/assets/icons/Fortnite.jpg',
        link: '',
        description:
            'Fortnite, the iconic battle royale sensation developed by Epic Games, catapulted gaming into the mainstream with its unique blend of fast-paced action, building mechanics, and vibrant, ever-evolving world. Players dive into a dynamic, last-person-standing battle where creativity and skill determine victory. Constant updates and engaging events keep the Fortnite experience fresh and exciting.',
        steam: false
    },
    {
        name: 'Spiderman Remastered',
        image: '/src/assets/icons/SpidermanRemastered.jpg',
        link: 'steam://run/1817070',
        description:
            'Spider-Man Remastered brings the beloved web-slinger to life in a stunningly reimagined New York City. Players step into the iconic suit of Spider-Man and swing through skyscrapers, combat nefarious villains, and unravel a gripping narrative. This remastered edition enhances the visuals and gameplay, making it a must-play for fans and newcomers alike.',
        steam: true
    },
    {
        name: 'Terraria',
        image: '/src/assets/icons/Terraria.jpg',
        link: 'steam://run/105600',
        description:
            "Terraria, an indie gem developed by Re-Logic, offers a captivating blend of exploration, crafting, and adventure. In a pixel-art world filled with wonders and challenges, players mine resources, craft weapons, and face off against formidable bosses. The game's endless creativity and surprises await those who dare to dig deep.",
        steam: true
    },
    {
        name: 'Last of Us',
        image: '/src/assets/icons/LastOfUs.png',
        link: 'steam://run/1888930',
        description:
            "The Last of Us, a masterpiece from Naughty Dog, plunges players into a post-apocalyptic world where survival comes at a steep cost. You'll follow the harrowing journey of Ellie and Joel as they navigate a world ravaged by a deadly infection and ruthless human factions. With its gripping narrative and emotional depth, this action-adventure epic is a true work of art.",
        steam: true
    },
]
