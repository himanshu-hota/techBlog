import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getAllData } from '../firebase';
import { removeData } from '../firebase';

const Homepage = () => {

  const [posts, setPosts] = useState([]);
  const deletePost = (e) => {
    
    const remId = e.target.getAttribute('data-remid');
    removeData(remId);
    setPosts(prev => prev.filter(post => post.id !== remId))
    
  }

  useEffect(() => {
    const data = getAllData();
    
    data.then((snapshot) => {
      const blogs = snapshot.docs.map(doc => {
        return {
          id:doc.id,
          ...doc.data()
        }
      })

      setPosts(prev => prev.concat(blogs));
    })

  }, [])
  

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Coder</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          
          <div className="postTitle">
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>

            <button className='deleteBtn' onClick={deletePost} data-remid={post.id} >❌</button>

          </div>
          
   
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  )
}

export default Homepage;