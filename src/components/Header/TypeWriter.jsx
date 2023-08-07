import React from 'react'
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
    return (
        <div>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Front-End developper")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Back-End developper")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Photographe")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Bienvenue a toi")
                        .typeString("!!!")
                        .start();
                }}
            />
        </div>
    )
}
