import { Link } from 'react-router-dom'

import Header from '../../header/Header'
// eslint-disable-next-line
import Post4 from '../../Post/postBreakfast'
// eslint-disable-next-line
import Post3 from '../../Post/postdessert'
// eslint-disable-next-line
import Post1 from '../../Post/postdinner'
// eslint-disable-next-line
import Post2 from '../../Post/postlunch'
import Posts from '../../Posts/Posts'

import './home.css'

export default function Home() {
    return (
        <>
            <Header/> 
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
    