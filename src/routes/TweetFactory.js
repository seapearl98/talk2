import React, { useEffect, useState } from 'react';
import {db, storage} from "../fbase";
import { collection, addDoc, query, getDoc, onSnapshot, orderBy, } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TweetFactory({userObj}) {

const [tweet, setTweet] = useState(""); 
const [newPhoto, setNewPhoto] = useState("");
const onChange = e => {
    //console.log(e.target.value);
    const {target: {value}} = e;
    setTweet(value);
  }
  const onSubmit = async(e) => {
    e.preventDefault();
    let photoURL = "";
    if(newPhoto !== ""){
      const storageRef = ref(storage, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(storageRef, newPhoto, 'data_url');
      console.log(response)
      photoURL = await getDownloadURL(ref(storage, response.ref))
    }
await addDoc(collection(db, "tweets"), {//트윗이라는 문서를 폴더에 추가하겠다
    text: tweet,
    createAt: Date.now(),
    createId: userObj.uid,
    photoURL
  });
  setTweet("");
}
const onFileChange = e => {
    //console.log(e.target.files)
    const {target: {files}} = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
      const {currentTarget: {result}} = finishedEvent;
      setNewPhoto(result);
    }
    reader.readAsDataURL(theFile)
  }

  return (
    <form onSubmit={onSubmit} className="factoryForm">
    <div className='factoryInput__container' style={{display:"flex"}}>
        <input type="text" placeholder="What's on your mind" value={tweet} onChange={onChange} maxLength={120}
        className="factoryInput__input"/>
        <input type="submit" value="&rarr;"/>
    </div>
    <label htmlFor="attach-file" className='factoryInput__label'>
    </label>
    <input type="file" accept='image/*' onChange={onFileChange}
      id="attach-file" style={{opacity:0}}/>
  </form>
  )
}

export default TweetFactory
