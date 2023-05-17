import {Form, Formik, Field, ErrorMessage} from "formik";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

const SchemaError = Yup.object().shape({
    id: Yup.number()
        .min(2, "Too Short!")
        .required("Required"),
    name: Yup.string()
        .min(2, "Quá ngắn")
        .required("Required"),
    description: Yup.string()
        .min(2, "Quá ngắn")
        .required("Required")
});

export function Create() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    description: '',
                    action: ''
                }}
                validationSchema={SchemaError}
                onSubmit={(values) => {
                    console.log(values);
                    axios.post('http://localhost:3001/students', values).then(() => {
                        navigate('/home/list', {state: {name: 'Linh', isHandsome: 'Sure'}})
                    })
                }}
                // enableReinitialize={true}
            >
                <Form>
                    <Field type="text" name={'id'} placeholder={'Id'}/>
                    <p style={{color: 'red'}}><ErrorMessage name={'id'}/></p>
                    <Field type="text" name={'name'} placeholder={'Name'}/>
                    <p style={{color: 'red'}}><ErrorMessage name={'name'}/></p>
                    <Field type="text" name={'description'} placeholder={'Description'}/>
                    <p style={{color: 'red'}}><ErrorMessage name={'description'}/></p>
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