import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'


function VehicleCard({ items }) {

    return (
        <>
            {items.map((item, index) => (
                <Card key={index} className="w-full flex items-center justify-between p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center justify-between">
                        <Image src={item.vehicleLogo} alt={item.vehicleName} width={100} height={100} className="rounded-md mr-4" />
                        <h2 className="text-lg font-semibold">{item.vehicleName}</h2>
                    </div>
                    <div>
                        <div className='flex'>Route: <p> {item.from}</p> {" "} to {" "} <p> {item.to}</p></div>
                        <p className="text-sm text-gray-500">{item.departure}</p>
                    </div>

                    <Sheet>
                        <SheetTrigger>
                            <Button>Book Now</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Select a seat</SheetTitle>
                                <SheetDescription>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A vitae doloremque sunt, id enim accusamus rerum iste, vel voluptatibus, corrupti ex? Rerum, officia dolorem mollitia qui molestiae nemo placeat a?
                                </SheetDescription>
                                <SheetFooter className="bottom-2 right-1 fixed">
                                    <Button className="">
                                        Confirm Booking
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </SheetFooter>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </Card>
            ))}
        </>
    )
}

export default VehicleCard
