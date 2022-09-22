import { skills } from '../data/skills-data.js'
import { Skill } from '../models/skills.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('todos/index', {
      skills: skills,
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

export {
	index
}