import { persons } from "../Util/data";

const CheckList = () => {
    return (
        <div>
            <h1>CheckList</h1>
            {persons.map((person) => {
                return (
                    <div key={person.id}>
                        <p>{person.firstname} {person.lastname}</p>
                    </div>
                )
                })}
         </div>   
)
}

export default CheckList;