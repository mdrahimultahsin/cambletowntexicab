import React, { useEffect, useState } from 'react';

const Service = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/service .json')
        .then((res) => res.send())
        .then((data) => setServices(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Service;