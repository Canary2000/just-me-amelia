import NC from 'node-cache'
import prisma from './database'

const Cache = new NC({
    stdTTL: 0,
    deleteOnExpire: false,
    checkperiod: 0
})

// ----------------------------------------------------

const UpdateProfile = () => {
    prisma.profile.findFirst({
        where: {
            user: 'its.amelina'
        },
        include: {
            links: true
        }
    }).then(async (profile) => {
        Cache.set('its.amelina', profile)
    })

    return true
}

prisma.project.findMany({
    include: {
        badges: true,
        links: true
    }
}).then(data => {
    const projects = data.map((project) => {
        return {
            key: project.identifier,
            val: project
        }
    })

    Cache.mset(projects)
})

UpdateProfile()
setInterval(() => {
    UpdateProfile()
}, 10 * (60 * 1000))

export default Cache