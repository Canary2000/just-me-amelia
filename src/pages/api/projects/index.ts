import Cache from '@/services/cache'
import prisma from '@/services/database'
import { Project } from '@prisma/client'
import { timingSafeEqual } from 'crypto'

import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
    message: string,
    data: Project[] | any
}

const Resolver = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const token = req.headers.authorization || ''
    const projects = Object.values(Cache.data).map((d) => d.v)

    if (!projects[0]) {
        res.status(500).json({
            message: 'Server Error',
            data: null
        })

        return
    }

    switch (req.method?.toLowerCase()) {
        case 'get':
            res.status(200).json({
                message: 'OK',
                data: projects
            })

            break

        case 'post':
            const userTokenBuffer = Buffer.from(token, 'utf-8')
            const apiTokenBuffer = Buffer.from(process.env['API_PERSONAL_ACCESS_TOKEN'] || '', 'utf-8')

            if (userTokenBuffer.length !== apiTokenBuffer.length || !timingSafeEqual(userTokenBuffer, apiTokenBuffer)) {
                res.status(401).json({
                    message: "You're unauthorized",
                    data: null
                })

                break
            }

            const data = await prisma.project.create({
                data: req.body,
                include: {
                    badges: true,
                    links: true
                }
            })

            Cache.set(data.identifier, data)

            res.status(200).json({
                message: 'OK',
                data
            })

            break

        default:
            res.status(405).json({
                message: 'Method not Allowed',
                data: null
            })
            break
    }
}

export default Resolver