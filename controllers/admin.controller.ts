import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

import { Request, Response } from "express";




export const dashboard = (req:Request, res:Response) => {
    res.status(200).render('admin/dashboard/index')
}



export const about = (req:Request, res:Response) => {
    if (req.method === 'GET') {
        prisma.about.findFirst({include: {personal_info: true}}).then(aboutData => {
            
            res.status(200).render('admin/dashboard/about', {about: aboutData || {}})
        })
    }

    if (req.method === 'PUT') {
        const {id} = req.params
        const {filename}:any = req.file
        const { description, name, date_of_birth, address, zip_code, email, number } = req.body

        const image_url = req.protocol + '://' + req.get('host') + `/uploads/${filename}`;
        


        prisma.about.update({
            where: {id},
            include: {personal_info: true},
            data: {
                image_url: image_url, 
                description,
                personal_info: {update: {name, date_of_birth: date_of_birth || null, address, zip_code: Number.parseInt(zip_code), email, number}}
                
            }
        }).then(aboutData => {
            res.status(200).redirect('/admin/about')
        })
        
    }


}



export const blog = (req:Request, res:Response) => {
    if (req.method === 'GET') {
        prisma.blog.findMany().then(blogData => {
            res.status(200).render('admin/dashboard/blog', {blog: blogData})
        })
        
    }

    if (req.method === 'POST') {
        const {blog_image, title, description} = req.body
        const {filename}:any = req.file

        const image_url = req.protocol + '://' + req.get('host') + `/uploads/${filename}`;
        prisma.blog.create({
            data: {
                image: image_url,
                title,
                description
            }
        }).then(() => res.status(200).redirect('/admin/blog'))
    }

    if (req.method === 'DELETE') {
        const {id} = req.params

        if (!id) return

        prisma.blog.delete({
            where: {id},
        }).then(() => res.status(200).redirect('/admin/blog'))
    }
}

export const contact = (req:Request, res:Response) => {}

export const feedback = (req:Request, res:Response) => {
    if (req.method === 'GET') {
        const feedbackData = [
            {
                description: "Its very good",
                client: {
                    name: "Md Naim Hossen",
                    designation: "Engineer",
                    image: ""
                }
            },
            {
                description: "Its very good",
                client: {
                    name: "Md Naim Hossen",
                    designation: "Engineer",
                    image: ""
                }
            },
        ]

        res.status(200).render('admin/dashboard/feedback', {feedback: feedbackData})
    }
}

export const footer = (req:Request, res:Response) => {}

export const project = (req:Request, res:Response) => {
    if (req.method === 'GET') {
        const projectData = [
            {
         
                project_category: "project category",
                project_name: "project Name",
                project_url: "",
                image_url: ""
            },
            {
  
                project_category: "project category",
                project_name: "project Name",
                project_url: "",
                image_url: ""
            },
        ]

        res.status(200).render('admin/dashboard/project', {project: projectData})
    }
}


export const satisfy = (req:Request, res:Response) => {
    if (req.method === 'GET') {
        prisma.satisfy.findMany().then(satisfyData => {
            res.status(200).render('admin/dashboard/satisfy', {satisfy: satisfyData})
        }).catch(() => {
            res.status(200).redirect('/admin/satisfy')
        })
    }

    if (req.method === 'POST') {
        const {title, value} = req.body

        
        prisma.satisfy.create({
            data: {
                title,
                value: Number.parseInt(value),
     
            }
        }).then(satisfy => {
            console.log('created');

            console.log(satisfy);
            

            res.status(200).redirect('/admin/satisfy')
            
        })
        

    }

    if (req.method === 'DELETE') {
        const {id} = req.params

        prisma.satisfy.delete({
            where: {id}
        }).then(() => {
            res.status(200).redirect('/admin/satisfy')
        })
        
        
    }
}

export const service = (req:Request, res:Response) => {
    if (req.method === 'GET') {
        const serviceData = [
            {
         
                name: "project category",
                icon: "project Name",
                description: "",
     
            },
            {
  
                name: "project category",
                icon: "project Name",
                description: "",
            },
        ]

        res.status(200).render('admin/dashboard/services', {service: serviceData})
    }
}

export const skill = (req:Request, res:Response) => {

    if (req.method === 'GET') {
        prisma.skill.findMany().then(skillData => {
            res.status(200).render('admin/dashboard/skill', {skill: skillData})
        })
        

    }

    if (req.method === 'POST') {
        const {name, performance, last_weak, last_month} = req.body
        prisma.skill.create({
            data: {
                name, 
                performance, 
                last_weak, 
                last_month
            }
        })
    }

}



export const team = (req:Request, res:Response) => {
    if (req.method === 'GET') {
        const teamData = [
            {
                name: "MD Naim Hossen",
                image: "",
                designation: "Software Enginner"
            },
            {
                name: "Emon Chowdhury",
                image: "",
                designation: "Backend Developer"
            },
        ]

        res.status(200).render('admin/dashboard/team', {team: teamData})
    }
}