import { useEffect, useState } from 'react';
import '../stylesheets/main.css';
import Form from '../components/Form';
import Breweries from '../components/Breweries';
import Maps from '../components/Maps';
import { getBreweries } from '../services/API';
const Mainpage = () => {
  const [location, setLocation] = useState(JSON.parse(localStorage.getItem('location')) || 'Fresno, CA');
  const fixedLocation = location.split(',');
  const [newLocation, setNewLocation] = useState('');
  const [data, setData] = useState([]);
  const handleLocationChange = (e) => {
    setNewLocation(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
    setLocation(newLocation);
    setNewLocation('');
  }
  //grab data from API
  useEffect(() => {
    getBreweries(fixedLocation[0])
    .then((response)=>{
      console.log(response.data)
      setData(response.data)})
    .catch((err)=> console.log(err));

  }, [location]);
  //grab data from localstorage
  useEffect(()=> {
    const retrieveLocation = JSON.parse(localStorage.getItem('location'));
  },[])
  //keep user's search terms stored in localstorage
  useEffect(()=> {
    localStorage.setItem('location', JSON.stringify(location))
  }, [location])
  return (
    <>
    <div className='container'>
    <header>
    <Form location={location} newLocation={newLocation} submit={submit} handleLocationChange={handleLocationChange} />
    </header>
    <section className='content'>
    <Maps></Maps>
    <Breweries data={data} />
    </section>
    </div>
    </>
  );
}

export default Mainpage;