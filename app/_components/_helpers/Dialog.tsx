"use client";

import { CloseX } from "@/app/_assets/_svgs/svgs";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
    onClose: () => void;
    onOk: () => void;
};

export default function Dialog({ onClose }: Props) {
    const searchParams = useSearchParams();
    const dialogRef = useRef<null | HTMLDialogElement>(null);
    const showDialog = searchParams.get("showDialog");
    const router = useRouter();

    useEffect(() => {
        if (showDialog === "y") {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [showDialog]);

    const closeDialog = () => {
        dialogRef.current?.close();
        router.back();
        router.refresh();
        onClose();
    };

    const dialog: JSX.Element | null =
        showDialog === "y" ? (
            <dialog
                ref={dialogRef}
                className="fixed bg-primary top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-xl backdrop:bg-gray-800/50"
            >
                <div className="bg-primary flex flex-col justify-between">
                    <div className="py-5 px-5 w-full bg-primary flex flex-col items-center gap-8">
                        <div className="flex flex-col justify-between items-center w-full">
                            <div className="flex justify-end w-full">
                                <button
                                    className="w-3 h-3 flex justify-center items-center"
                                    onClick={() => router.push("?")}
                                >
                                    <CloseX />
                                </button>
                            </div>
                            <h1 className="py-5 font-semibold text-center text-secondary syne">
                                Log in
                            </h1>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <input
                                type="text"
                                placeholder="Email"
                                className="p-2 w-80 border border-secondary hover:border-neutral rounded-3xl bg-primary h-1/2 placeholder:text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Create password"
                                className="p-2 w-80 border border-secondary hover:border-neutral rounded-3xl bg-primary h-1/2 placeholder:text-sm"
                            />
                        </div>
                        <button
                            className="btn-secondary syne mb-1 py-3"
                            onClick={closeDialog}
                        >
                            Log in
                        </button>
                        <p>
                            Dont have an account?{" "}
                            <button
                                className="text-blue-400"
                                onClick={() => {
                                    onClose();
                                    router.push("?showSignUpDialog=y");
                                }}
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </dialog>
        ) : null;

    return dialog;
}
