import { collection, deleteDoc, doc, DocumentData, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import './Home.css';

const Home = () => {

  const [postList, setPostList] = useState<DocumentData>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // Firestoreのデータの取り出し方に注意
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc)=> ({ doc })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [reload]);

  const handleDelete = async (id: string) => {
    // 削除後、（HTTPリクエストを使わずに）PostListの更新を行う
    await deleteDoc(doc(db, "posts", id)).then(() => { setReload((prev)=>!prev)});

  };

  return (
    <div className='homePage'>
      {postList.map((post:any) => {
        return (
          <div className="postContents" key={ post.id }>
            <div className="postHeader">
              <h1>{ post.title }</h1>
            </div>
            <div className="postTextContainer">
              { post.postText }
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
              
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home