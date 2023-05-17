import {useEffect, useState} from "react";

const listUser = [
    {
        id: 1,
        name: 'Linh'
    },
    {
        id: 2,
        name: 'Hiếu'
    }
]

export function Demo1(props) {
    const [users, setUsers] = useState([]);

    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [idCurrent,setIdCurrent] = useState(-1)

    useEffect(() => {
        setUsers(listUser);
    }, [])
    const add = () => {
        let user = {
            id : id,
            name: name
        }
        let newUser = [...users];
        newUser.push(user);
        setUsers(newUser);
        setId('');
        setName('');
    }
    const remove = (id) => {
        let newUser = [...users];
        let index = -1;
        for (let i = 0; i < newUser.length; i++) {
            if(+id === newUser[i].id) {
                index = i;
            }
        }
        newUser.splice(index,1);
        setUsers(newUser)
    }
    const edit = (id) => {
         let newUser = [...users];
         let index = -1;
         for (let i = 0; i < newUser.length; i++) {
            if (+id === newUser[i].id) {
                index = i;
            }
        }
         setId(newUser[index].id);
         setName(newUser[index].name);
         setIdCurrent(index)
    }
    const update = () => {
        let newUser = [...users];
        newUser[idCurrent] = {
            id: id,
            name: name
        };
        setUsers(newUser);
        setId('');
        setName('');
        setIdCurrent(-1);
    }
    return (
        <>
            <h1>Hello</h1>
            <input value={id} onChange={(e) => {
                setId(e.target.value)
            }}/>
            <input value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            {
                idCurrent === -1 ? (<button onClick={add}>Add</button>) : (<button onClick={update}>Update</button>)
            }

            {
                users.map(item => (
                    <div key={item.id}>
                        <p>
                            {item.id}, {item.name}
                            <br/>
                            <button onClick={() => remove(item.id)}>Delete</button>
                            <button onClick={() => edit(item.id)}>Edit</button>
                        </p>
                    </div>
                ))
            }
        </>

    )
}