import { TbAlertTriangleFilled } from "react-icons/tb"
import { PoppinsRegular } from '../fonts'

export default function AlertForm({ description }: any) {
  return (
    <div className="flex justify-start items-start mt-2">
      <TbAlertTriangleFilled size={18} className="text-red-600 mr-2" />

      { description && (
        <div className={`${PoppinsRegular.className} text-xs text-red-600`}>
          Campo de preenchimento obrigatório
        </div>
      )}
    </div>
  )
}