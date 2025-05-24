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

const Routesearch = () => {
      const [date, setDate] = useState();

    return (
        <div className='flex gap-4 items-center justify-between p-10 border rounded-full font-bold '>
            <Select>
                
                <SelectTrigger className="w-[250px] ">
                    <SelectValue placeholder='Select destination'/>
                </SelectTrigger>
                <SelectContent >
                    <SelectItem value="light">Nairobi</SelectItem>
                    <SelectItem value="dark">Kisumu</SelectItem>
                    <SelectItem value="system">Mombasa</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Select Destination" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Mombasa</SelectItem>
                    <SelectItem value="dark">Nairobi</SelectItem>
                    <SelectItem value="system">Kisumu</SelectItem>
                </SelectContent>
            </Select>

            <Popover >
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
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

            <Button variant="outline">
                <Plus/>
                Add return
                </Button>
            <Button className='bg-black text-pink-500'>Search</Button>
        </div>
    )
}

export default Routesearch
