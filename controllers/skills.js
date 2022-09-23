import { skills } from '../data/skills-data.js'
import { Skill } from '../models/skills.js'

function index(req, res) {
  Skill.find({})
  .then(skills => { 
    res.render('skills/index', {
      skills: skills,
      time: req.time,
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  Skill.create(req.body)
  .then(skills => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skills => {
    res.render('skills/show', {
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skills => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/tskills')
  })
}


export {
	index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
}