import Form from '../components/Form.jsx'
import { slideFunction }  from '../utils/functions.js'
import { useEffect } from 'react'

export default function ContactPage() {

    useEffect(() => {
        slideFunction();
    })

    return (
        <>
            <Form />
        </>
    )

}