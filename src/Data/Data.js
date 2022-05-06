import bauru from "../assets/bauru.png"
import calabresa from "../assets/calabresa.png"
import mussarela from "../assets/mussarela.png"
import marguerita from "../assets/marguerita.png"
import camarao from "../assets/camarao.png"
import portuguesa from "../assets/portuguesa.png"


const data = {
    productItems: [
        {
            id: "1",
            category: "pizza completa",
            flavor: "Bauru",
            description: "Mussarela, presunto, requeijão, tomate, oregano...",
            price: 20.00,
            image: bauru,
            sale: true
        },
        {
            id: "2",
            category: "pizza completa",
            flavor: "Calabresa",
            description: "Mussarela, Calabresa, molho de tomate, oregano...",
            price: 20.00,
            image: calabresa,
            sale: false
        },
        {
            id: "3",
            category: "pizza completa",
            flavor: "Mussarela",
            description: "Mussarela, azeitona, molho de tomate, oregano...",
            price: 20.00,
            image: mussarela,
            sale: false
        },
        {
            id: "4",
            category: "pizza completa",
            flavor: "Marguerita",
            description: "Mussarela, tomate, manjericão, oregano, molho...",
            price: 20.00,
            image: marguerita,
            sale: false
        },
        {
            id: "5",
            category: "pizza completa",
            flavor: "Camarão",
            description: "Mussarela, camarão, catupiri, requeijão, oregano...",
            price: 20.00,
            image: camarao,
            sale: false
        },
        {
            id: "6",
            category: "pizza completa",
            flavor: "Portuguesa",
            description: "Mussarela, pimentão, azeitona, oregano...",
            price: 20.00,
            image: portuguesa,
            sale: false
        },
    ]
}

export default data;