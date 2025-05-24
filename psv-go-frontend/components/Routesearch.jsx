"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { format } from "date-fns"
import { CalendarIcon, LocateFixedIcon, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Routesearch = () => {
    const [date, setDate] = useState();
    const [pickuplocation, setPickupLocation] = useState("");
    const [destination, setDestination] = useState("");

    const slug = `${pickuplocation}-to-${destination}`;
    console.log("Slug:", slug);

    return (
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between p-10 border rounded-lg font-bold '>
            <Select onValueChange={(value) => setPickupLocation(value)}>
                <SelectTrigger className="w-full md:w-[250px] h-[45px]">
                    <SelectValue placeholder='Select Pickup Place' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="nairobi">Nairobi</SelectItem>
                    <SelectItem value="kisumu">Kisumu</SelectItem>
                    <SelectItem value="mombasa">Mombasa</SelectItem>
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => setDestination(value)}>
                <SelectTrigger className="w-full md:w-[250px] h-[45px]">
                    <SelectValue placeholder='Select Destination' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="nairobi">Nairobi</SelectItem>
                    <SelectItem value="kisumu">Kisumu</SelectItem>
                    <SelectItem value="mombasa">Mombasa</SelectItem>
                </SelectContent>
            </Select>


            <Popover >
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full md:w-[280px] justify-start text-left font-normal h-[45px]",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 ">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>

            <Button variant="outline" className='w-full md:w-[200px] justify-start text-left font-normal h-[45px]'>
                <Plus />
                Add return
            </Button>

            <Link href={`/psv/${slug}`}>
                <Button className='bg-black text-pink-500 w-full md:w-[200px] h-[45px]'>Search</Button>
            </Link>
        </div>
    )
}

export default Routesearch
