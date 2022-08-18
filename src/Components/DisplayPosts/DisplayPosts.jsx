//import Entry from "../Entry";
import CustomButton from "../CustomButton/CustomButton";


const DisplayPosts = (props) => {
    
    return ( 
        // <tbody>
        //     {props.entries.map(entry => <tr><Post /></tr>)}
        // </tbody>

        <table className="table">
            <thead>
                <tr>
                    {/* <th>Name</th>
                    <th>Post</th> */}
                </tr>
            </thead>
            <tbody>
                {props.entries.map((entry) => {
                    return (
                        <div>
                            <div>{entry.name}</div>
                            <div>{entry.post}</div>
                            <div><CustomButton /></div>
                        </div>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;