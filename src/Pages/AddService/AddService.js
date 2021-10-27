import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://serene-oasis-60622.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h3> Please Add a service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="Number" />
                <input {...register("img")} placeholder="image-url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;