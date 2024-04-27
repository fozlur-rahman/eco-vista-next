"use client";

import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const LocationDetector = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();

    const pathname = usePathname();
    const router = useRouter();

   

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set("latitude", position.coords.latitude);
                params.set("longitude", position.coords.longitude);

                setLoading(false);

                router.push(`/current?${params.toString()}`);
            });
        }
    }, [pathname, searchParams, router]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
            {loading && (
                <>
                    <Image
                        src={"/network.gif"}
                        alt="loading image"
                        width={500}
                        height={500}
                        className="border  rounded-md my-4"
                    />
                    <p className="text-4xl text-center">
                        Detecting Location...
                    </p>
                </>
            )}
        </div>
    );
};

export default LocationDetector;
