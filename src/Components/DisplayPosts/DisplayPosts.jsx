//import Entry from "../Entry";
import Entry from "../Entry/Entry";


const DisplayPosts = (props) => {
    
    return ( 
        // <tbody>
        //     {props.entries.map(entry => <tr><Post /></tr>)}
        // </tbody>

        <ul>
            {props.entries.map(entry => <li><Entry entry={entry}/></li>)}
        </ul>


        // <table className="table">
        //     <thead>
        //         <tr>
        //             {/* <th>Name</th>
        //             <th>Post</th> */}
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {props.entries.map((entry) => {
        //             return (
        //                 <div>
        //                     <div className="name">{entry.name}</div>
        //                     <div className="post">{entry.post}</div>
        //                     <div className="custom"><CustomButton /></div>
        //                 </div>
        //             );
        //         })}
        //     </tbody>
        // </table>
     );
}
 
export default DisplayPosts;