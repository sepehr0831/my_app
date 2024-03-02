import React,{useState , useEffect, useCallback} from "react";
import Button from "../button/button";
import './blog.css'

const Blog = () => {

    const[posts,setposts] = useState([])
    const[loading,setloading] = useState(false);
    const[pagecounts,setpagecounts] = useState(0);
    const[activePageNumber,setactivePageNumber] = useState(0)


    const Loadposts = async () => {

        setloading(true);
        const responsePosts = await fetch('https://run.mocky.io/v3/9ffd2120-2c4f-4810-9d73-ee3051375efd');
        const postss = await responsePosts.json();
        setposts(postss)
        console.log(postss.length)

        setloading(false);
    };

    useEffect(()=>{
      Loadposts();
      
    },[]);


    useEffect(()=>{
      setpagecounts(calculatePageCounts());
      
    },[posts]);


    const calculatePageCounts = () => {

      if (posts.length % 3 > 0 ){
        return parseInt(posts.length/3 + 1);
      }
      return parseInt(posts.length/3);
    }


    const handleclickonPages =useCallback( (pagenumber) => {
      setactivePageNumber(pagenumber);
    },[]);



    return(

    <div className="Blog">
        

        {loading && <div>Loading</div>}
        {posts.length === 0 && <div className="a"><br></br>No Post</div>}
        {posts.length > 0 && 

        <ul  className="blogItem"  >

          {posts.slice(3*activePageNumber,3*(activePageNumber+1)).map((item)=>(

                <li   key={`post-${item.id}`}>

                <h4>{item.id}</h4>
                <p>{item.first_name}</p>
                <p>{item.last_name}</p>
                <p>{item.email}{item.email}{item.email}</p>


                </li>
          ))}
        </ul>}
        <br></br>
        <br></br>

        <div>
          <ul className="Pagination">
            {new Array(pagecounts).fill(0).map((item,index)=>(
                <li className={activePageNumber === index ? 'active' : ''}>
                <Button text={index+1} handleclick={() => handleclickonPages(index)}></Button>
              </li>
            )
            )}
            
          </ul>
        </div>

    </div>
)}



export default Blog;