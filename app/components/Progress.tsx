"use client"
import { Card, CardBody, CardFooter, Chip, CircularProgress } from '@nextui-org/react';
import React from 'react'

const Progress = () => {
  return (
    <Card className="w-[240px] h-[240px] border-2 border-sky-600 bg-gradient-to-b from-sky-700 to-indigo-600">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={59}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          Daily Goal
        </Chip>
      </CardFooter>
    </Card>
  );
}



export default Progress