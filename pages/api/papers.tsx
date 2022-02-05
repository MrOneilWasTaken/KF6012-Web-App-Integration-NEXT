// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const db = require('better-sqlite3')("db/dis.sqlite");


export default function handler(req: NextApiRequest,res: NextApiResponse){
  if (req.method === 'GET'){
    if(req.query.id){
      res.status(200).json(db.prepare('SELECT * FROM paper WHERE paper_id = ?').get(req.query.id))
    }else if(req.query.authorid){
      let results = db.prepare("SELECT * FROM author WHERE author_id = ?").get(req.query.authorid)

      results.papers = db.prepare( "SELECT paper.paper_id, paper.title, paper.abstract FROM paper JOIN paper_author on (paper.paper_id = paper_author.paper_id) JOIN author on (author.author_id = paper_author.author_id) WHERE paper_author.author_id = ?").get(req.query.authorid)

      res.status(200).json(results)
    
    }else{
      res.status(200).json(db.prepare('SELECT * FROM paper').all())
    }
  }else{
    res.status(405).json( "Nope")
  }
}