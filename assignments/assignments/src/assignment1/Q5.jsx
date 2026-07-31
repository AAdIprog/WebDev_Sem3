import { useState } from 'react'


const Q5 = () => {
 const [likes, setLikes] = useState(0)


 const handleLike = () => {
   setLikes(likes + 1)
 }


 return (
   <div className="assignment-card">
     <h2>Q5. Like Button with Count Display</h2>
     <LikeDisplay likes={likes} handleLike={handleLike} />
   </div>
 )
}


const LikeDisplay = ({ likes, handleLike }) => {
 return (
   <div>
     <h3>Likes: {likes}</h3>
     <button onClick={handleLike}>Like</button>
   </div>
 )
}

export default Q5