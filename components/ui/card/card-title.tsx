// DONE REVIEWING: GITHUB COMMIT
import {HTMLAttributes, forwardRef} from "react"
import {cn} from "../../../lib/utils"

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({className, ...props}, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl-2 font-semi-bold leading-none tracking-tight", className)}
      {...props}>
      {props.children}
    </h3>
  )
)

CardTitle.displayName = "CardTitle"
export default CardTitle
