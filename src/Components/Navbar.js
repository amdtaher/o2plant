'use client'
import React from 'react'
import '@/app/globals.css'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Navbar = () => {
  const [emblaRef] = useEmblaCarousel()
  let plants = [
  {
    id: 1,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'trendy house plants',
    img: '/images/plant1.png'
  },
  {
    id: 2,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'trendy house plants',
    img: '/images/plant2.png'
  },
  {
    id: 3,
    name: 'Calathea plantllo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'trendy house plants',
    img: '/images/plant3.png'
  },]


  const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Progress2",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Progress3",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Progress4",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md bg-[#434394]"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </li>
                <li href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </li>
                <li href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black inter">
                {components.map((component) => (
                  <li
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent className={`w-full`}>
        {plants.map((plant, index) => (
          <CarouselItem key={index}>
            <div className="embla" ref={emblaRef}>
              <div className='embla__container'>
                  <div className='embla__slide w-full flex flex-col items-center justify-evenly pb-10 md:pb-12 bg-white/5 backdrop-blur-[12.5px] border border-white/20 shadow-[0px_9px_18.4px_rgba(0,0,0,0.25)] rounded-[50px] md:rounded-[70px] text-white/70 p-5 md:p-0 md:mt-30 lg:mt-30'>
                    <img className='-mt-24' src={plant.img}/>
                    <div className='flex flex-col gap-3 capitalize pl-0 md:pl-6 pt-5 md:pt-10'>
                      <h2 className='text-4xl md:text-5xl font-semibold my-3'>{plant.name}</h2>
                      <h4 className='text-2xl md:text-3xl'>{plant.price}</h4>
                      <a className='max-w-[150px] md:max-w-[200px] text-2xl md:text-3xl text-center border-1 border-white rounded-xl py-2 md:py-3.5 mt-2' href='#'>buy now</a>
                    </div>
                  </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}

export default Navbar