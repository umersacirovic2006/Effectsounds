"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
    title1: string;
    title2: string;
    onClose: () => void;
    onOk: () => void;
};

export default function Dialog({ onClose, onOk }: Props) {
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

    const clickOk = () => {
        onOk();
        closeDialog();
    };

    const dialog: JSX.Element | null =
        showDialog === "y" ? (
            <dialog
                ref={dialogRef}
                className="fixed bg-primary top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-xl backdrop:bg-gray-800/50"
            >
                <div className="bg-primary flex flex-col justify-between">
                    {/* <div className=" flex">
                        <div className="flex flex-col w-1/2">
                            <div className="flex p-5 justify-between mb-4 pt-2 px-5 bg-secondary">
                                <h1 className="text-2xl font-semibold text-primary syne">
                                    {title1}
                                </h1>
                            </div>
                            <div className="bg-primary flex flex-col gap-5 p-5">
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Last Name"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Password"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Confirm password"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-1/2">
                            <div className="flex p-5 justify-between mb-4 pt-2 px-5 bg-secondary">
                                <h1 className="text-2xl font-semibold text-primary syne">
                                    {title2}
                                </h1>
                                <button
                                    onClick={closeDialog}
                                    className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold text-primary"
                                >
                                    x
                                </button>
                            </div>
                            <div className="bg-primary flex flex-col gap-5 p-5">
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Last Name"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Password"
                                />
                                <input
                                    type="text"
                                    className="rounded-xl border border-secondary hover:border-neutral placeholder:pl-2"
                                    placeholder="Confirm password"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="px-5 pb-6">
                        <div className="flex flex-row justify-end mt-2">
                            <button
                                onClick={clickOk}
                                className="bg-warning py-1 px-2 rounded border-none"
                            >
                                OK
                            </button>
                        </div>
                    </div> */}

                    <div className="p-5 bg-primary flex flex-col items-center gap-8">
                        <h1 className="p-5 font-semibold text-center text-secondary syne">
                            Create an account
                        </h1>
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Email"
                                className="p-2 border border-secondary hover:border-neutral rounded-xl bg-primary h-1/2 placeholder:text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Create password"
                                className="p-2 border border-secondary hover:border-neutral rounded-xl bg-primary h-1/2 placeholder:text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Confirm email adress"
                                className="p-2 border border-secondary hover:border-neutral rounded-xl bg-primary h-1/2 placeholder:text-sm"
                            />
                        </div>
                        <button
                            className="btn-secondary syne mb-10"
                            onClick={closeDialog}
                        >
                            Create account
                        </button>
                    </div>
                </div>
            </dialog>
        ) : null;

    return dialog;
}
