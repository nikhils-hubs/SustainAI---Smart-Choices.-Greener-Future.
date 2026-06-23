const { menuReply, WasteReply, recipeReply,
    waterReply, sustainableReply, electricityReply, } = require("../textFromat/Tmainmenu")

const menu = menuReply

function MainMenu(choice) {
    switch (choice.trim()) {
        case "1":
            return {
                mode: "waste",
                reply: WasteReply
            }
        case "2":
            return {
                mode: "recipe",
                reply: recipeReply

            }
        case "3":
            return {
                mode: "water",
                reply: waterReply
            }
        case "4":
            return {
                mode: "electricity",
                reply: electricityReply
            }
        case "5":
            return {
                mode: "sustainability",
                reply: sustainableReply
            }

        default:
            return {
                mode: "awaiting_menu",
                reply: menu
            };
    }
}

module.exports = {
    menu,
    MainMenu
}
