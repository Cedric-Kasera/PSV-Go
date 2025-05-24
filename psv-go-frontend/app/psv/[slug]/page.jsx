"use client";

import Routesearch from '@/components/Routesearch';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, subDays, isEqual, isWithinInterval } from 'date-fns';
import VehicleCard from '@/components/VehicleCard';
import Logo from "@/public/images/psvgologo.png"

function Page({ params }) {
    const { slug } = params;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startDate, setStartDate] = useState(subDays(new Date(), 1));
    const dates = Array.from({ length: 3 }).map((_, i) => addDays(startDate, i));

    //MockData
    const trips = [
        {
            vehicleLogo: Logo,
            vehicleName: "Dreamliner Express",
            from: "Nairobi",
            to: "Mombasa",
            departure: "2025-05-29T08:00:00",
            duration: "6h 30m",
            remainingSeats: 12,
            price: 1500
        },
        {
            vehicleLogo: Logo,
            vehicleName: "Modern Coast",
            from: "Nairobi",
            to: "Mombasa",
            departure: "2025-05-29T09:30:00",
            duration: "7h",
            remainingSeats: 5,
            price: 1400
        },
        {
            vehicleLogo: Logo,
            vehicleName: "Easy Coach",
            from: "Kisumu",
            to: "Nairobi",
            departure: "2025-05-29T07:00:00",
            duration: "6h",
            remainingSeats: 8,
            price: 1300
        },
        {
            vehicleLogo: Logo,
            vehicleName: "Guardian Angel",
            from: "Nairobi",
            to: "Kisumu",
            departure: "2025-05-29T10:00:00",
            duration: "6h 15m",
            remainingSeats: 20,
            price: 1250
        },
        {
            vehicleLogo: Logo,
            vehicleName: "Coast Bus",
            from: "Mombasa",
            to: "Nairobi",
            departure: "2025-05-29T11:00:00",
            duration: "7h 15m",
            remainingSeats: 3,
            price: 1600
        },
        {
            vehicleLogo: Logo,
            vehicleName: "Transline Classic",
            from: "Nairobi",
            to: "Eldoret",
            departure: "2025-05-29T12:30:00",
            duration: "5h 45m",
            remainingSeats: 6,
            price: 1200
        },
        {
            vehicleLogo: Logo,
            vehicleName: "Simba Coach",
            from: "Nairobi",
            to: "Kitale",
            departure: "2025-05-29T14:00:00",
            duration: "8h",
            remainingSeats: 10,
            price: 1800
        },
    ];


    // Keep selected date within visible range
    useEffect(() => {
        const endDate = addDays(startDate, 2);
        const isInView = isWithinInterval(selectedDate, {
            start: startDate,
            end: endDate,
        });
        if (!isInView) {
            setSelectedDate(startDate); // Reset to first visible if outside
        }
    }, [startDate]);

    return (
        <div className="py-4 flex flex-col items-center justify-center space-y-4">
            <Routesearch />

            <h1 className="text-muted-foreground text-2xl font-bold uppercase">
                PSV routes from {slug.split("-to-")[0]} to {slug.split("-to-")[1]}
            </h1>

            <div className="flex items-center justify-center gap-2">
                <button
                    onClick={() => setStartDate(subDays(startDate, 1))}
                    className="bg-white px-2 py-1 rounded border shadow-sm"
                >
                    <ChevronLeft size={20} />
                </button>

                {dates.map((date) => (
                    <button
                        key={date.toISOString()}
                        onClick={() => setSelectedDate(date)}
                        className={`px-4 py-2 rounded border shadow-sm transition-all duration-150 ${isEqual(date, selectedDate)
                            ? "bg-white font-bold text-black"
                            : "bg-white text-gray-500"
                            }`}
                    >
                        {format(date, "EEEE, d MMM")}
                    </button>
                ))}

                <button
                    onClick={() => setStartDate(addDays(startDate, 1))}
                    className="bg-white px-2 py-1 rounded border shadow-sm"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <VehicleCard items={trips} />

        </div>
    );
}

export default Page;
