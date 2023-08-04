import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const TenderList = () => {

  const [state, setStae] = useState({})
  const { fld_id } = useParams()



  useEffect(() => {
    const getDta = async () => {
      const fromData = new FormData()
      fromData.append('user_id', '188887');
      fromData.append('fin_year', '2023-2024');
      fromData.append('tender_id', fld_id);



      try {

        const respone = await axios.post('https://api.growthgrids.com/bd_growthgrids/index.php/Tender_details',
          fromData, {
          headers: {
            "Auth-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbmlkIjoiMTQwOSIsInVzZXJuYW1lIjoiZWVkZHNkIHNkc2RzZGRzZHMiLCJBUElfVElNRSI6MTY5MDk3ODg1OX0.ClOo0Kg2XpEx6gGKPuwAe0AKgZcMw00yJvSPUSK3Zl8"
          }

        });
        const result = respone.data

        console.log("success", result)
        setStae(respone.data.data)


      } catch (error) {
        console.log('Error:', error);
      }

    }
    getDta();
  }, []);




  return (
    <div>

      <h1>Tender Details</h1>
      <div className='main-div'>
        <div className='border:"1px solid"'>
          <span style={{ fontWeight: "600", width: "33%" }}>Tender Name</span>
          <p>{state.tender_details}</p>
        </div>

        <div >
          <span style={{ fontWeight: "600", width: "33%" }}>Tender Value</span>
          <p>{state.tender_amnt_val}</p>


        </div>
        <div>
          <span style={{ fontWeight: "600", width: "33%" }}>Tender Key Date</span>
          <p>{state.bid_opening_time}</p>


        </div>


      </div>
    </div>

  )
}

export default TenderList