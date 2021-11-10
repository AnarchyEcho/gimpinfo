import { comments } from '../lol'

export default function handler(req, res) {
    const { commentKey } = req.query
    if (req.method === 'GET') {
      res.status(200).json(comments)
    } if (req.method === 'POST') {
      const comment = req.body.comment
      const newComment = {
        key: comment.length + Math.random(),
        text: comment
      }
      
      if (Array.isArray(comments)) {
        comments.push(newComment)
    } else {
        comments = [newComment];
    }
      res.status(201).json(newComment)
    } if (req.method === 'DELETE') {
        const deletedComment = comments.find(
            (comment) => comment.key === commentKey
        )

        const index = comments.findIndex(
            (comment) => comment.key === commentKey
        )

        comments.splice(index, 1)
        res.status(200).json(deletedComment)
    } else {
        res.status(200).json(comments)
    }
  }