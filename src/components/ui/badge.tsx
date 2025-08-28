import * as React from 'react'
import { Slot as SlotPrimitive } from 'radix-ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { getTechIconClass } from '@/lib/tech-icons'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
  asChild?: boolean
  showTechIcon?: boolean
  techTag?: string
}

function Badge({
  className,
  variant,
  asChild = false,
  showTechIcon = false,
  techTag,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? SlotPrimitive.Root : 'span'

  // Determine which text to use for tech icon lookup
  const textForIcon = techTag || (typeof children === 'string' ? children : '')
  const iconClass = showTechIcon && textForIcon ? getTechIconClass(textForIcon) : null

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {showTechIcon && <i className={`${iconClass} text-sm`} />}
      {children}
    </Comp>
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
