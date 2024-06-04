"use client"

import React, { useState, useEffect } from 'react';
import { Pannellum } from 'pannellum-react';

export default function PannellumPage() {
    const [yaw, setYaw] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [startDragTime, setStartDragTime] = useState(0);

    const handleMouseDown = () => {
        setDragging(true);
        setStartDragTime(Date.now()); // Guarda el tiempo en el que se inició el arrastre
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    useEffect(() => {
        let animationInterval;

        if (!dragging) {
            const elapsedTime = Date.now() - startDragTime;
            const delay = 2000; // Retraso en milisegundos

            if (elapsedTime >= delay) {
                // Si ha pasado el tiempo de retraso, comienza la animación suave
                animationInterval = setInterval(() => {
                    setYaw(prevYaw => prevYaw + 1);
                }, 50);
            } else {
                // Si no ha pasado el tiempo de retraso, espera hasta que pase
                setTimeout(() => {
                    setDragging(false);
                }, delay - elapsedTime);
            }
        } else {
            clearInterval(animationInterval);
            setTimeout(() => {
                setDragging(false);
            }, 3000);
        }

        return () => {
            clearInterval(animationInterval);
        };
    }, [dragging, startDragTime]);

    return (
        <Pannellum
            width="100%"
            height="100vh"
            image="/panorama/2.jpg"
            yaw={yaw}
            pitch={0}
            hfov={100}
            autoLoad
            showZoomCtrl={false}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        />
    );
}
