// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const db = require('better-sqlite3')("db/dis.sqlite");

export default function handler(req: NextApiRequest,res: NextApiResponse){
  if (req.method === 'GET'){
    if(req.query.id){
      res.status(200).json(db.prepare('SELECT * FROM author WHERE author_id = ?').get(req.query.id))
    }else{
      res.status(200).json(db.prepare('SELECT * FROM author').all())
    }
    
  }else{
    res.status(405).json( "Nope")
  }
  
}