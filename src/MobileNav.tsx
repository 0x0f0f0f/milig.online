// MobileNav.tsx
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu as MenuIcon } from 'lucide-react'
import type { NavBarItemsProps } from './lib/navbar'
import { Drawer, DrawerContent, DrawerTrigger } from './components/ui/drawer'

export default function MobileNav({ items }: NavBarItemsProps) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className='h-12 w-12'>
          <MenuIcon className='h-full w-full' />
        </Button>
      </DrawerTrigger>
      <DrawerContent >
        <div className="flex flex-col items-start">
          {items.map((item, index) => (
            <a href={item.href}>
              <Button
                key={index}
                variant="link"
                onClick={() => {
                  setOpen(false)
                }}
                className="text-2xl lowercase"
              >
                {item.label}
              </Button>
            </a>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
