import React, { ReactElement, ReactNode } from "react";

//Este componente es para el catch de los errores. En este caso ha de ser un componente de clase debido a que hay un metodo que lo hace automaticamente.
//este metodo solo se puede meter en los componentes de clase y no en los componentes funcionales.
export default class ErrorBoundary extends 
    React.Component<errorBoundaryProps, errorBoundaryState> { //Los parametros que le pasas son: 1.- El tipo de dato de los props. y 2.- El tipo de dato del state

    constructor(props: errorBoundaryProps) {
        super(props); //super para trabajar con la clase base
        this.state = { hayError: false, mensaje: '' }
    }

    //Este es el metodo por el cual no podemos trabajar con un componente funcional y si con uun componente de clase
    componentDidCatch(error: any, errorInfo: any){
        console.log(error);
        console.log(errorInfo);
    }

    //funcion que cambia el estado en el caso de que haya un error
    static getDerivedStateFromError(error: any) {
        console.log(error)
        return {hayError: true, mensaje: error}
    }

    //y por esta tambien
    render() {
        if (this.state.hayError) {
            if (this.props.errorUI) {
                return this.props.errorUI
            } else {
                return <h3>{this.state.mensaje}</h3>
            }
            
        }
        return this.props.children;
    }
}

//Interfaz del estado, ya que son 2 datos (booleano y string). Por eso el parametro del state es un objeto de este tipo
interface errorBoundaryState {
    hayError: boolean;
    mensaje: string;
}

//Interfaz de los props.
interface errorBoundaryProps {
    errorUI?: ReactElement;
    children: ReactNode;
}