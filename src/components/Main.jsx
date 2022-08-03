import React,{useState,useEffect} from "react";
import ContactCard from "./contactCard/ContactCard";
import './style.scss'
import axios from 'axios'

function Main(){

    const [contacts,setContacts]=useState([])
    const [searchName,setSearchName]=useState('')
    const [sortName,setSortName]=useState(true)


    useEffect(()=>{
        const options = {
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
          };
          
          axios(options)
            .then(response => {
              localStorage.setItem('contacts', JSON.stringify(response.data));
            });
    },[])
    useEffect(()=>{
        setContacts(JSON.parse(localStorage.getItem('contacts')))
      },[])

    const searchContact = contacts?.filter(contact =>{
        return contact.name.toLowerCase().includes(searchName.toLowerCase())
    })



    function SortArrayName(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }

    let sortContactClone = searchContact?.slice(0)
    const sortContactArr = sortContactClone?.sort(SortArrayName)

    function sortContact(e){
        if(e === 'all'){
            setSortName(true)
        }else if( e === 'a-z'){
            setSortName(false)
        }
    }
    
    return (
        <>
        <nav>
            <div className="nav__content container">
                <a href="/"><h2 className="nav__title">My-Contact</h2></a>
                <div className="nav__search">
                    <input placeholder="Поиск по name" onChange={(e)=>setSearchName(e.target.value)} type="text" className="nav__input" />
                    <button className="nav__btn"><img src="/images/search__icon.svg" alt="" /></button>
                </div>
            </div>
        </nav>

        <div className="contacts container">
            <select name="" id="" onChange={(e)=>sortContact(e.target.value)} className="contacts__filter">
                <option value="all">all</option>
                <option value="a-z">a-z</option>
            </select>
            <div className="contact__categories">
                <p className="contact__category">name</p>
                <p className="contact__category">username</p>
                <p className="contact__category">email</p>
                <p className="contact__category">street</p>
                <p className="contact__category">city</p>
                <p className="contact__category">zipcode</p>
            </div>

           <div className="contact__cards_component">
           {(sortName ? searchContact : sortContactArr)?.map((contact)=>{
                return(
                    <ContactCard key={contact.id} contact={ contact }/>
                )
            })}
           </div>
        </div>
        </>
    )
}
export default Main