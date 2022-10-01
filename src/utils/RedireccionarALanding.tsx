import { Navigate } from "react-router-dom";

export default function RedireccionarALanding() {
    return (

        //Importante porque ya no existe el Redirect en la v6 del react router dom. Asi que se hace de manera diferente
        <Navigate to={{ pathname: '/' }} replace />
    )
}