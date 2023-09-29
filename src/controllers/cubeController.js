const router = require("express").Router();
const cubeService = require("../services/cubeService")

router.get("/create", (req, res) => {
    console.log(cubeService.getAll());
    res.render("create");
});

router.post('/create', (req, res) => {
    const { name, descriotion, imgUrl, difficultyLevel } = req.body
    cubeService.create({
        name,
        descriotion,
        imgUrl,
        difficultyLevel: Number(difficultyLevel),
    });
    res.redirect('/')
})

module.exports = router;