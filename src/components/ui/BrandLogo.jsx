import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const BrandLogo = ({ className, variant = 'dark' }) => {
    return (
        <div className={clsx("flex items-center gap-3 group relative z-50", className)}>
            <div className={clsx(
                "flex items-center justify-center rounded-lg transition-colors",
                variant === 'footer' ? "bg-white p-1" : ""
            )}>
                <img
                    src="/favicon.svg"
                    alt="Grafillium Logo"
                    className={clsx(
                        "object-contain transition-opacity hover:opacity-80",
                        variant === 'footer' ? "" : "-translate-y-1",
                        "w-10 h-10"
                    )}
                />
            </div>
            <div className="flex flex-col justify-center">
                <span className={clsx(
                    "font-bold tracking-tighter leading-none",
                    variant === 'footer' ? "text-xl text-white" : "text-xl text-black"
                )}>
                    GRAFILLIUM
                </span>
                {variant !== 'footer' && (
                    <span className={clsx(
                        "font-bold tracking-widest uppercase leading-none",
                        variant === 'footer' ? "text-[9px] text-stone-400" : "text-[9px] text-stone-500"
                    )}>
                        Deep-Tech
                    </span>
                )}
            </div>
        </div>
    );
};

export default BrandLogo;
