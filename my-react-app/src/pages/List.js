
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

export function List() {
    const students = useSelector((state) => state.students);
    console.log(students)

    return (
        <>
            {
                    <>
                        <table border={1}>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Status</td>
                                <td colSpan={2}>Action</td>
                            </tr>
                            {
                                students.map(item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.action}</td>
                                        <td><Link to={`/home/edit/${item.id}`}>Edit</Link></td>
                                        <td>
                                            {/*<button onClick={() => remove(item.id)}>Delete</button>*/}
                                        </td>
                                    </tr>
                                ))
                            }

                        </table>
                    </>
            }

        </>
    )
}