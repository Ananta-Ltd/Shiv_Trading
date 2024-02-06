"use client"
import { signIn, signOut, useSession } from 'next-auth/react';

export default function RootLayout({ children }) {

    const { data: session } = useSession();

    return (
        <>
            <div className='bg-gray-200 mt-1 '>
                <nav className="w-full h-[100px]">
                    <ul className="absolute right-11 items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <div>
                            {session ? (
                                <div className='flex'>
                                    <p className='flex items-center'>{session?.user.user_name}</p>
                                    <button
                                    type='button'
                                    className=' hover:text-gray-600 font-bold  py-2 p-5 tracking-wider rounded-md ' onClick={() => signOut()}>
                                        Logout
                                    </button>
                                </div>

                            ) : (<button type='button' className=' hover:text-gray-600 font-bold  py-2 p-5 tracking-wider rounded-md ' onClick={() => signIn()}>
                                Login
                            </button>)}
                        </div>
                    </ul>
                </nav>

                <div className='pt-9'>
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}