interface Props{
  children: JSX.Element | string
}

const ButtonSubmit = ({children}:Props) => {
  return (
    <button
            className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-blue-500 focus:outline-noneactive:from-purple-600 active:to-blue-700 transform active:scale-90 transition-transform cursor-pointer my-4 `}
            type="submit"
        >
            <span className="relative px-5 py-2.5 transition-all ease-in-out duration-150 bg-background-600 rounded-md w-max sm:group-hover:bg-transparent group-active:bg-transparent">
                {children}
            </span>
        </button>
  )
}
export default ButtonSubmit