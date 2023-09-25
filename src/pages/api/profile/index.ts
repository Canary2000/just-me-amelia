import Cache from '@/services/cache'
import { NextApiRequest, NextApiResponse } from 'next/types'

const Resolver = async (req: NextApiRequest, res: NextApiResponse<{ message: string, data?: unknown | null }>) => {
    const profile = await Cache.get('its.amelina')

    res.status(200).json({
        message: 'OK',
        data: profile
    })
}

export default Resolver