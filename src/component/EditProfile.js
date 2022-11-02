import React, { useEffect,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { authService,db,storage } from '../fbase';
import { collection, query, onSnapshot,where,orderBy } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/EditProfile.scss'
import { FaUser, FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaCog, FaComment,FaSearch, FaEllipsisH, FaAddressBook, FaQrcode, FaMobileAlt, FaEnvelope, FaPenAlt, FaTimes, FaPencilAlt, FaCamera} from "react-icons/fa";
import MyBack from '../item/MyBack';

export default function EditProfile({userObj}) {

    const [tweets, setTweets] = useState([]); 
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [newPhotoURL,setNewPhotoURL] = useState(userObj.photoURL);

    const onFileChange = (e) => {
      const {target: {name}} = e; 
        const {target: {files}} = e;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
          console.log(finishedEvent);
          const {currentTarget: {result}} = finishedEvent;
          setNewPhotoURL(result);
        }
        reader.readAsDataURL(theFile)
      }
    
      const onChange = (e) => {
        const {target: {value}} = e;
        setNewDisplayName(value);
      }
    
      const onSubmit = async(e) => {
        e.preventDefault();
        let photoURL = "";
            if(userObj.photoURL != newPhotoURL){
              const storageRef = ref(storage, `${userObj.uid}/${uuidv4()}`);
              const response = await uploadString(storageRef, newPhotoURL, 'data_url');
              console.log(response)
              photoURL = await getDownloadURL(ref(storage, response.ref))
              await updateProfile(userObj, {photoURL});
        }
        if(userObj.displayName != newDisplayName){
          await updateProfile(userObj, {displayName: newDisplayName});
        }
      }
      const onClearAttachment = () => setNewPhotoURL("")
    
      useEffect(() => {
        //getMyTweets();
        const q = query(collection(db, "tweets"),
        where("createId", "==", userObj.uid),
        orderBy("createAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const newArray = [];
          querySnapshot.forEach((doc) => {
            newArray.push({...doc.data(), id:doc.id});
          });
          setTweets(newArray);
        });
      },[]);

  return (
<div className='chats'>
         <div className="Header">
            <div className='status-bar'>
                <div className="left-item">
                    <FaPlane/>
                    <FaWifi/>
                </div>
                <div className="center-item">
                    <span>15</span>:<span>33</span>
                </div>
                <div className="right-item">
                    <FaMoon/>
                    <FaBluetoothB/>
                    <span><span>100</span>%</span>
                    <FaBatteryFull/>
                </div>
            </div>
            <div className="title-bar">
                <h1>Edit My Profile</h1>
                <div className="left-item"><Link to='/myprofile'><FaTimes/></Link></div>
                <div className="right-item"></div>
            </div>
        </div>
        <main className='main_profile'>
            <section className="background">
                <h2 className="blind">My profile background image</h2>
                <MyBack/>
            </section>
            <section className="profile">
                <h2 className="blind">My profile info</h2>
                <div className="profile_img empty">
                <form onSubmit={onSubmit} name="front" className='profileForm' >
        <input type="text" placeholder='Display name' onChange={onChange} value={newDisplayName} autoFocus className='formInput'/>
        <input type="submit" value="✔" className='formBtn'/>
        <label htmlFor='attach-file' className='factoryInput__lable'>
        <span><FaCamera/></span>
      </label>
      <input type="file" name='front' accept='image/*' onChange={onFileChange} id='attach-file' style={{opacity:0}}/>
        {newPhotoURL && (
        <div className='profileForm__newPhotoURL'>
          <img src={newPhotoURL} style={{backgroundImage: newPhotoURL, width: 100, height:100, borderRadius:50}} />
          <div className='profileForm__clear' onClick={onClearAttachment}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />  
          </div>
        </div>
        )}
      </form>
                </div>
                <div className="profile_cont">
                    <span className="profile_name">
                    {userObj.displayName ? `${userObj.displayName}` : "Profile"}
                    </span>
                    <input type="mail" className="profile_email" placeholder="hi"/>
                    <ul className="profile_menu">
                        <li>
                            <Link to='/chatting'>
                                <span className="icon">
                                    <FaComment/>
                                </span>
                                My Chatroom
                            </Link>
                        </li>
                        <li>
                            <Link to='/editprofile'>
                                <span className="icon">
                                    <FaPenAlt/>
                                </span>
                                Edit Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
  )
}
