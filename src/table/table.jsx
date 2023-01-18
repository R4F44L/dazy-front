import React, {useState} from 'react';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { apiurl } from '../consts';

export const SelectDBWrapper = ({children}) => {
    const [db, setDB] = useState('/');

    const onChange = (e) => {
        setDB(e.target.value)
    }

    return <>
        <select value={db} onChange={onChange}>
            <option value='/mongoose/'>Nierelacyjna</option>
            <option value='/realm/'>Obiektowa</option>
            <option value='/'>Relacyjna</option>
        </select>
        {children({db})}
    </>
}   

export const FetchDB = ({db, children}) => {

    const [data, setData] = useState();


    useEffect(() => {
        axios.get(`${apiurl}${db}users`).then(res => setData(res.data))
    }, [db])

    return children({data})
}



export const Table = ({data}) => {

    const li = ({email, login}) => <li key={email}>{email}{login}</li>

    const map = data?.map(li);

    return <ul>
        {map}
        TEST
    </ul>


}

export const ActionDelete = () => {
    const [zip, setZip] = useState();

    const onClick = () => {
        // request(zip)
    }

    const onChange = (e) => {
        setZip(e.target.value)
    }

    return <>
    <input type="number" onChange={onChange}>ZIP CODE</input>
     <button onClick={onClick}>Usuń po ZIP_CODE</button>
    </>
}

export const UserForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [iterations, setIterations] = useState();

    const onChange = (e) => {
        setIterations(e.target.value)
    } 

    return <>
    <input type='number' placeholder="Ilość rekordów" onChange={onChange}></input>
     <form>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue='login' {...register("login", { required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input defaultValue='street' {...register("street")} />
      <input defaultValue='zipCode' {...register("zipCode")} />
      <input defaultValue='country' {...register("country")} />
      <input type="submit" />
    </form>
    </>

}