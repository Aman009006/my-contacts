import React , {useState , useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import './style.scss'

function ContactCard({contact}){

    const [show, setShow] = useState(false);

   const [editName,setName]=useState('')
   const [editUsername,setUsername]=useState('')
   const [editEmail,setEmail]=useState('')
   const [editStreet,setStreet]=useState('')
   const [editCity,setCity]=useState('')
   const [editZipcode,setZipcode]=useState('')


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [contacts,setContacts]=useState([])
    useEffect(()=>{
      setContacts(JSON.parse(localStorage.getItem('contacts')))
    },[show])

    
    function getEditContact(){
        const newContctList = contacts.map(o => {
            contact.name = (editName ? editName : contact.name)
            contact.username =  (editUsername ? editUsername : contact.username)
            contact.email =  (editEmail ? editEmail : contact.email)
            contact.address.street =  (editStreet ? editStreet : contact.address.street)
            contact.address.city =  (editCity ? editCity : contact.address.city)
            contact.address.zipcode =  (editZipcode ? editZipcode : contact.address.zipcode)

            if(o.id === contact.id){
                return contact
            }
            return o
        })
        localStorage.setItem('contacts', JSON.stringify(newContctList));
        console.log(newContctList);
        setShow(false)
    }


    return (
        <>
             <div onClick={handleShow} className="contact__cards">
                <p className="contact__card">{contact.name}</p>
                <p className="contact__card">{contact.username}</p>
                <p className="contact__card">{contact.email.substring(0,16)}...</p>
                <p className="contact__card">{contact.address.street}</p>
                <p className="contact__card">{contact.address.city}</p>
                <p className="contact__card">{contact.address.zipcode}</p>
            </div>
            <div onClick={handleShow} className="contact__cards_mini">
                <div className="contact__categories_mini">
                    <p className="contact__category">name</p>
                    <p className="contact__category">username</p>
                    <p className="contact__category">email</p>
                    <p className="contact__category">street</p>
                    <p className="contact__category">city</p>
                    <p className="contact__category">zipcode</p>
                </div>
                <div className="contact__card_mini">
                    <p className="contact__card">{contact.name}</p>
                    <p className="contact__card">{contact.username}</p>
                    <p className="contact__card">{contact.email.substring(0,16)}...</p>
                    <p className="contact__card">{contact.address.street}</p>
                    <p className="contact__card">{contact.address.city}</p>
                    <p className="contact__card">{contact.address.zipcode}</p>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="edit">
                <div className="edit__inputs ">
                    <p className="edit__descr">name</p>
                    <input type="text" onChange={(e)=>setName(e.target.value)} defaultValue={contact.name}  />
                    <p className="edit__descr">username</p>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)}   defaultValue={contact.username} />
                    <p className="edit__descr">email</p>
                    <input type="text"  onChange={(e)=>setEmail(e.target.value)}   defaultValue={contact.email} />
                    <p className="edit__descr">street</p>
                    <input type="text"  onChange={(e)=>setStreet(e.target.value)}  defaultValue={contact.address.street} />
                    <p className="edit__descr">city</p>
                    <input type="text"  onChange={(e)=>setCity(e.target.value)}   defaultValue={contact.address.city} />
                    <p className="edit__descr">zipcode</p>
                    <input type="text" onChange={(e)=>setZipcode(e.target.value)}  defaultValue={contact.address.zipcode} />
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal__btn" onClick={handleClose}>
            Close
          </button>
          <button onClick={()=>getEditContact()} className="modal__btn">
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default ContactCard