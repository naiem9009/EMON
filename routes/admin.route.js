const router = require('express').Router()

const {
    dashboard,
    about,
    blog,
    contact,
    feedback,
    footer,
    project,
    satisfy,
    service,
    skill,
    team
    // registerController
} = require("../controllers/admin.controller")
const { image_upload } = require("../utils/func.utils");



router.get('/', dashboard)

router.get('/about', about)
router.put('/about/:id', image_upload.single('profile_image'), about)


router.get('/blog', blog)
router.post('/blog', image_upload.single('blog_image'), blog)
router.delete('/blog/:id', blog)


router.get('/contact', contact)
router.get('/feedback', feedback)
router.get('/footer', footer)
router.get('/project', project)

router.get('/satisfy', satisfy)
router.post('/satisfy', satisfy)
router.delete('/satisfy/:id', satisfy)


router.get('/service', service)
router.get('/skill', skill)
router.get('/team', team)

module .exports = router