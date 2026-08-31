import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFetchAndDispatch = (url, actionCreator) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        const token = localStorage.getItem("userToken");

        
        const fetchOptions = {
            method: "GET",
            headers: {}
        };

        if (token) {
            fetchOptions.headers["Authorization"] = token;
        }

        
        fetch(url, fetchOptions)
            .then((res) => {
                if (!res.ok) throw Error("فشل جلب البيانات");
                return res.json();
            })
            .then((data) => {
                dispatch(actionCreator(data)); 
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [url, actionCreator, dispatch]);

    return { loading, error }; 
};

export default useFetchAndDispatch;