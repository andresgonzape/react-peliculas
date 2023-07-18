import EditarEntidad from "../utils/EditarEntidad";
import { urlCines } from "../utils/endpoints";
import FormularioCines from "./FormularioCines";
import { cineCreacionDTO, cineDTO } from "./cines.model";

export default function EditarCines(){
    return (
        <EditarEntidad<cineCreacionDTO, cineDTO>
                url={urlCines} urlIndice="/cines" nombreEntidad="Cines"
            >
                {(entidad, editar) => <FormularioCines
                    modelo={entidad}
                    onSumbit={async valores => {await editar(valores)}}
                />}
        </EditarEntidad>
    )
}