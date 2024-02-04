interface Props{
  children: JSX.Element | string
}

const ButtonSubmit = ({children}:Props) => {
  return (
    <button
            className={`relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-background-600 rounded-lg group bg-gradient-to-br from-purple-500 to-red-400 dark:to-blue-500 dark:text-neutral-300 focus:outline-none active:from-purple-600 active:to-red-400 dark:active:to-blue-700 transform active:scale-90 transition-transform cursor-pointer my-4 hover:text-background-100 `}
            type="submit"
        >
            <span className="relative px-5 py-2.5 transition-all ease-in-out duration-150 bg-background-100 dark:bg-background-600 rounded-md w-max group-hover:bg-transparent">
                {children}
            </span>
        </button>
  )
}
export default ButtonSubmit