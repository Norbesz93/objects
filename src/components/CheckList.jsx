import { persons } from "../Util/data";
import { useState } from "react";

const CheckList = () => {

    const [person, setPerson] = useState(persons);
    const [reading, setReading] = useState(false);

    const personsWhoLikeReading = () => {

        if (!reading) {
           setPerson(persons);
        } else {

        const readers = persons.map((item) => {

        return item.hobbie.includes("Reading") ? item : "";

        });
                setPerson(readers);
               
    }
    setReading(!reading);
    }

    
     
    return (
        <div>
            <h1>CheckList</h1>
            <div className="checking">
            <label htmlFor="">Check </label>
            <input type="checkbox" checked={reading} onChange={()=>{
               personsWhoLikeReading();
            }
            }/>
            </div>
            {person.map((human) => {
                return (
                    <div key={human.id}>
                        <p>{human.firstname} {human.lastname}</p>
                    </div>
                )
                })}
         </div>   
)
}

export default CheckList;