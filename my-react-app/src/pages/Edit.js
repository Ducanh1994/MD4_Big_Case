import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export function Edit() {
    let {id} = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3001/students/${id}`).then((res) => {
                setStudent(res.data)
            console.log(res.data)
            }
        )
    }, [])
    return (
        <>
            <Formik
                initialValues={student}
                onSubmit={(values) => {
                    console.log(values);
                     axios.put(`http://localhost:3001/students/${id}`, values).then(() => {
                         navigate('/home/list')
                    })
                }}
                enableReinitialize={true}
            >
                <Form>
                    <Field type="text" name={'id'} placeholder={'Id'}/>

                    <Field type="text" name={'name'} placeholder={'Name'}/>

                    <Field type="text" name={'description'} placeholder={'Description'}/>

                    <Field as={'select'} name={'action'} placeholder={'Description'}>
                        <option value="Xem xét">Xem xét</option>
                        <option value="Đạt">Đạt</option>
                        <option value="Tốt">Tốt</option>
                    </Field>
                    <button>Thêm mới</button>
                </Form>
            </Formik>
        </>
    )
}