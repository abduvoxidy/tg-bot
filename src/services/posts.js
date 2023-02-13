import { useMutation, useQuery } from 'react-query'
import { request } from './http-client'

const getPosts = (params) => request.get('/posts', { params })
const createPost = (data) => request.post('/posts', data)
const updatePost = (id, data) => request.put(`/posts/${id}`, data)
const deletePost = (id) => request.delete(`/posts/${id}`)

export const usePost = ({ params }) => {
  const posts = useQuery(['GET_POSTS'], () => getPosts(params), {
    enabled: true
  })
  const createMutation = useMutation(createPost)

  return {
    posts,
    createMutation
  }
}
