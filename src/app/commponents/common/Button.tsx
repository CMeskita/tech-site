
interface IButtonProps  {
  children:any
  onClick?: () => void
  bgcolor:string
  destaque?:boolean
}
export function Button({children,onClick,bgcolor: bgcolor,destaque}:IButtonProps){
    return (
       
              <button
              
                className={`w-full px-6 py-3 rounded-lg font-semibold ${
                  destaque
                    ? `${bgcolor} text-white hover:bg-indigo-700`
                    : `bg-gray-100 text-gray-700 hover:bg-gray-200`
                }`}
              >
                <a href="/pages/contacts">
                    {children}
                </a>
              
              </button>
    )
}