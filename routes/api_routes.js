const router = require("express").Router();
const playerController = require("../controllers/playerController.js")

// module.exports = function(app){
//     app.get("api/:player", function(req, res) {
//         console.log(req.params);
//         db.Player.findOne({
//             where: {
//                 Player: req.params.Player
//             }
//         })
//             .then(function(dbPlayer) {
//                 console.log(res.json(dbPlayer));
//             });
//     });
// }

router.route("/:id")
    .get(playerController.findById);

module.exports = router;