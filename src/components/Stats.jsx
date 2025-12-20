import React from "react";
import CountUp from "react-countup";

const Stats = () => {
    return (
        <div className="py-16 flex flex-col md:flex-row justify-center gap-12 px-4">
            {/* Stat 1 */}
            <div className="bg-samlox-gold rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 flex flex-col items-center justify-center w-full max-w-sm transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-8xl font-luckiest text-black drop-shadow-md">
                    <CountUp end={6} duration={2.5} />
                </h3>
                <p className="text-3xl font-luckiest text-black uppercase mt-2">Ongoing</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-samlox-gold rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 flex flex-col items-center justify-center w-full max-w-sm transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-8xl font-luckiest text-black drop-shadow-md">
                    <CountUp end={700} duration={2.5} suffix="+" />
                </h3>
                <p className="text-3xl font-luckiest text-black uppercase mt-2">Completed</p>
            </div>
        </div>
    );
};

export default Stats;
