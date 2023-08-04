import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import axios from 'axios';
import { Link } from "react-router-dom"

function Navbar() {

    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const formData = new FormData();
            formData.append('user_id', '1389');
            formData.append('fin_year', '2023-2024');
            formData.append('limit', '10');
            formData.append('page_number', '0');

            try {
                const response = await axios.post('https://api.growthgrids.com/bd_growthgrids/index.php/LatestTenders_fin_year',
                    formData
                );
                const result = response.data;
                setData(result.data.data);
            } catch (error) {
                console.log('Error:', error);
            }
        }

        getData();
    }, []);

    return (
        <div className="navbar">
            <h1>Tender </h1>

            <div className='mwap'>
                {data.map((elem, i) => (
                    <div className='table' key={i}>
                        <div className='abc'>
                            <p>Tender Id: {elem.fld_id}</p>                            
                            <Link to={`/detail/${elem.fld_id}`}>{elem.tender_details}                  
                             <p>{elem.state_name}</p>                          
                          </Link>                       
                        </div>
                        <div className='abc'>
                            <strong> value</strong>
                            <p>{elem.tender_amnt_val}</p>
                        </div>
                        <div className='abc'>
                            <strong> Deadline</strong>
                            <p>{elem.submission_end_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
