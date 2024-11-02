import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Post as PostType } from '../../../utils/types'
import { BiSolidLike } from 'react-icons/bi'
import { AiFillDislike } from 'react-icons/ai'
import { FaBookmark, FaComment } from 'react-icons/fa'

export default function Post({
    post,
    index
}:{
    post:PostType,
    index:number
}) {
    return (
        <Card key={index} style={{width:"clamp(300px,30%,450px)"}}>
            <CardHeader>
                <CardTitle>{post.author.firstName} {post.author.lastName}</CardTitle>
                <CardDescription>{post.author.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{post.content}</p>
            </CardContent>
            <CardFooter className='flex flex-row justify-center items-center gap-3'>
                <Button className='bg-slate-400 w-auto'><BiSolidLike />{post.likes}</Button>
                <Button className='bg-slate-400 w-auto'><AiFillDislike />{post.dislikes}</Button>
                <Button className='bg-slate-400 w-auto'><FaComment />{post.replies.length}</Button>
                <Button className='bg-slate-400 w-auto'><FaBookmark /></Button>
            </CardFooter>
        </Card>
    )
}
