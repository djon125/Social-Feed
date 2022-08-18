//import Entry from "../Entry";
//import * from "./Components/CustomButton/CustomButton";


const DisplayPosts = (props) => {
    return ( 
        // <tbody>
        //     {props.entries.map(entry => <tr><Post /></tr>)}
        // </tbody>

        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                {props.entries.map((entry) => {
                    return (
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.post}</td>
                            <td><button tyep="submit" className="buttonClass">Like</button><button>Dislike</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayPosts;