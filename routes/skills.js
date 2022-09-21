import { Router } from 'express'
import { skills } from '../data/skills-data.js'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })
// router.get('/', function(req, res) {
//   res.render('skills/index', {
//     skills: skills
//   })
// })
router.get('/', skillsCtrl.index)


export {
  router
}
