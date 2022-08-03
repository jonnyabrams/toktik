import type { NextApiRequest, NextApiResponse } from 'next'

import { topicPostsQuery } from '../../../utils/queries'
import { client } from '../../../utils/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { topic } = req.query

    const videosQuery = topicPostsQuery(topic)

    const videos = await client.fetch(videosQuery)

    res.status(200).json(videos)
  }
}

export default handler
