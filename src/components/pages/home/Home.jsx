import { Link } from 'react-router-dom'

import Header from '../../header/Header'
import Post4 from '../../Post/postBreakfast'
import Post3 from '../../Post/postdessert'
import Post1 from '../../Post/postdinner'
import Post2 from '../../Post/postlunch'
import Posts from '../../Posts/Posts'

import './home.css'

export default function Home() {
    return (
        <>
            {/* <Header/> */}
            <div>
<Link to='/breakfast'>
    
</Link>
            </div>
            {/* <Post1/>
            <Post2/>
            <Post3/>
            <Post4/> */}
            <Posts/>
            
        </>
    )
}
    