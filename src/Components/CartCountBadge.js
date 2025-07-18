interface propsType{
    size: String;
}

const CartCountBadge:React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute bg-red-600 text-white text-[14px]${size}-right-3 -top-1 rounded-full grid place-items-center`}> CartCountBadge </div>
  )
}

export default CartCountBadge;
