import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import heroPic from '../public/bola_ubi.jpg'
import { Navbar } from "../components/"


interface Recipe {
    ingredients: []
}

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title> Digital Raycipes </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="h-24 w-full items-center justify-center border-b">
                <Navbar />
            </header>

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <div className="w-3/4 flex justify-between space-x-5">
                    <div className="w-full max-h-[500px] text-left">
                        <h1 className="text-5xl font-bold tracking-widest leading-loose"> Digital Raycipes.. </h1>
                        <h3 className="tracking-widest"> What's cooking ya'll?<br /> Feeling uninspired, hung or hangry?
                        You're at the right place! </h3>
                    </div>
                    <div className="w-full rounded p-6">
                        <Image
                            className="w-full max-h-[500px] object-cover rounded"
                            src={heroPic}
                            alt={"Bola Ubi"}
                            placeholder="blur"
                            priority
                        />
                    </div>
                </div>

            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
            </footer>
        </div>
    )
}

export default Home
