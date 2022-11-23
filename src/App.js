import { useEffect, useState } from "react";
import axios from "axios"
import './App.css'

export default function App() {

    //Parse data from API endpoint
    const [businesses, setBusinesses] = useState([])
    useEffect(() => {
        axios.get("https://kfc19k33sc.execute-api.us-west-1.amazonaws.com/dev/api/v2/businesses")
            .then((response) => {
                setBusinesses(response.data.result)
            })
    }, [])

    //Update selected business ID
    const [selected, setSelected] = useState(-1);
    const handleChange = id => {
        setSelected(id.target.value);
    };

    //Display business ID's
    const optionElements = businesses.map((item, index) => {
        return (
            <option key={index} value={index}>
                {item.business_uid}
            </option>
            )
    })
  return (
      <div className="app">
          <h1 className="title">Business Name Picker</h1>
          <h3 className="dropdown-menu">
              <label htmlFor="dropdown">Business ID's: </label>
              <select name="dropdown" className="dropdown" value={selected} onChange={handleChange}>
                  <option value={-1}>Select ID</option>
                  {optionElements}
              </select>
          </h3>

          <p className="api">
              {selected == -1 ? "" : <img src={businesses[selected].business_image} width={"150"} height={"150"} alt={"Business Image"} />}
              {selected == -1 ? "" :
                  "\n" + "business_uid: " + businesses[selected].business_uid + "\n" +
                  "business_created_at: " + businesses[selected].business_created_at + "\n" +
                  "business_name: " + businesses[selected].business_name + "\n" +
                  "business_type: " + businesses[selected].business_type + "\n" +
                  "business_desc: " + businesses[selected].business_desc + "\n" +
                  "business_association: " + businesses[selected].business_association + "\n" +
                  "business_contact_first_name: " + businesses[selected].business_contact_first_name + "\n" +
                  "business_contact_last_name: " + businesses[selected].business_contact_last_name + "\n" +
                  "business_phone_num: " + businesses[selected].business_phone_num + "\n" +
                  "business_phone_num2: " + businesses[selected].business_phone_num2 + "\n" +
                  "business_email: " + businesses[selected].business_email + "\n" +
                  "business_hours: " +
                  (businesses[selected].business_hours == null || businesses[selected].business_hours == "{}" ? businesses[selected].business_hours + "\n" :
                  " Monday " + JSON.parse(businesses[selected].business_hours).Monday[0] + "-" + JSON.parse(businesses[selected].business_hours).Monday[1] +
                  " | Tuesday " + JSON.parse(businesses[selected].business_hours).Tuesday[0] + "-" + JSON.parse(businesses[selected].business_hours).Tuesday[1] +
                  " | Wednesday " + JSON.parse(businesses[selected].business_hours).Wednesday[0] + "-" + JSON.parse(businesses[selected].business_hours).Wednesday[1] +
                  " | Thursday " + JSON.parse(businesses[selected].business_hours).Thursday[0] + "-" + JSON.parse(businesses[selected].business_hours).Thursday[1] +
                  " | Friday " + JSON.parse(businesses[selected].business_hours).Friday[0] + "-" + JSON.parse(businesses[selected].business_hours).Friday[1] +
                  " | Saturday " + JSON.parse(businesses[selected].business_hours).Saturday[0] + "-" + JSON.parse(businesses[selected].business_hours).Saturday[1] +
                  " | Sunday " + JSON.parse(businesses[selected].business_hours).Sunday[0] + "-" + JSON.parse(businesses[selected].business_hours).Sunday[1] + "\n") +
                  "business_accepting_hours: " +
                  (businesses[selected].business_accepting_hours == null || businesses[selected].business_accepting_hours == "{}" ? businesses[selected].business_accepting_hours + "\n" :
                  " Monday " + JSON.parse(businesses[selected].business_accepting_hours).Monday[0] + "-" + JSON.parse(businesses[selected].business_accepting_hours).Monday[1] +
                  " | Tuesday " + JSON.parse(businesses[selected].business_accepting_hours).Tuesday[0] + "-" + JSON.parse(businesses[selected].business_accepting_hours).Tuesday[1] +
                  " | Wednesday " + JSON.parse(businesses[selected].business_accepting_hours).Wednesday[0] + "-" + JSON.parse(businesses[selected].business_accepting_hours).Wednesday[1] +
                  " | Thursday " + JSON.parse(businesses[selected].business_accepting_hours).Thursday[0] + "-" + JSON.parse(businesses[selected].business_accepting_hours).Thursday[1] +
                  " | Friday " + JSON.parse(businesses[selected].business_accepting_hours).Friday[0] + "-" + JSON.parse(businesses[selected].business_accepting_hours).Friday[1] +
                  " | Saturday " + JSON.parse(businesses[selected].business_accepting_hours).Saturday[0] + "-" + JSON.parse(businesses[selected].business_accepting_hours).Saturday[1] +
                  " | Sunday " + JSON.parse(businesses[selected].business_accepting_hours).Sunday[0] + "-" + JSON.parse(businesses[selected].business_accepting_hours).Sunday[1] + "\n") +
                  "business_delivery_hours: " +
                  (businesses[selected].business_delivery_hours == null || businesses[selected].business_delivery_hours == "{}" ? businesses[selected].business_delivery_hours + "\n" :
                  " Monday " + JSON.parse(businesses[selected].business_delivery_hours).Monday[0] + "-" + JSON.parse(businesses[selected].business_delivery_hours).Monday[1] +
                  " | Tuesday " + JSON.parse(businesses[selected].business_delivery_hours).Tuesday[0] + "-" + JSON.parse(businesses[selected].business_delivery_hours).Tuesday[1] +
                  " | Wednesday " + JSON.parse(businesses[selected].business_delivery_hours).Wednesday[0] + "-" + JSON.parse(businesses[selected].business_delivery_hours).Wednesday[1] +
                  " | Thursday " + JSON.parse(businesses[selected].business_delivery_hours).Thursday[0] + "-" + JSON.parse(businesses[selected].business_delivery_hours).Thursday[1] +
                  " | Friday " + JSON.parse(businesses[selected].business_delivery_hours).Friday[0] + "-" + JSON.parse(businesses[selected].business_delivery_hours).Friday[1] +
                  " | Saturday " + JSON.parse(businesses[selected].business_delivery_hours).Saturday[0] + "-" + JSON.parse(businesses[selected].business_delivery_hours).Saturday[1] +
                  " | Sunday " + JSON.parse(businesses[selected].business_delivery_hours).Sunday[0] + "-" + JSON.parse(businesses[selected].business_delivery_hours).Sunday[1] + "\n") +
                  "business_address: " + businesses[selected].business_address + "\n" +
                  "business_unit: " + businesses[selected].business_unit + "\n" +
                  "business_city: " + businesses[selected].business_city + "\n" +
                  "business_state: " + businesses[selected].business_state + "\n" +
                  "business_zip: " + businesses[selected].business_zip + "\n" +
                  "business_longitude: " + businesses[selected].business_longitude + "\n" +
                  "business_latitude: " + businesses[selected].business_latitude + "\n" +
                  "business_EIN: " + businesses[selected].business_EIN + "\n" +
                  "business_WAUBI: " + businesses[selected].business_WAUBI + "\n" +
                  "business_license: " + businesses[selected].business_license + "\n" +
                  "business_USDOT: " + businesses[selected].business_USDOT + "\n" +
                  "bus_notification_approval: " + businesses[selected].bus_notification_approval + "\n" +
                  "can_cancel: " + businesses[selected].can_cancel + "\n" +
                  "delivery: "  + businesses[selected].delivery + "\n" +
                  "reusable: " + businesses[selected].reusable + "\n" +
                  "business_password: " + businesses[selected].business_password + "\n" +
                  "bus_guid_device_id_notification: " + businesses[selected].bus_guid_device_id_notification + "\n" +
                  "platform_fee: " + businesses[selected].platform_fee + "\n" +
                  "transaction_fee: " + businesses[selected].transaction_fee + "\n" +
                  "revenue_sharing: " + businesses[selected].revenue_sharing + "\n" +
                  "profit_sharing: " + businesses[selected].profit_sharing + "\n" +
                  "business_links: " + businesses[selected].business_links + "\n" +
                  "business_status: " + businesses[selected].business_status + "\n"
              }
          </p>
      </div>
  )
}
