import React from "react";
import Card from "./Card";
import Link from "next/link";

const NoLocationInfo = ({ location }) => {
    return (
        <Card>
            <div>
                <h2>No Location info found that location {location}</h2>
                <Link className="underline text-blue-800" href={"/"}>Current Location</Link>
            </div>
        </Card>
    );
};

export default NoLocationInfo;
