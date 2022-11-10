import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    const recipes = {
        ingredients: [
            "ketumbar",
            "jahe",
            "kunjit blad"
        ],
        servings: 6,
        cookingHours: "1"
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <div className="w-2/3 flex justify-between">
                <div className="w-full text-left">
                    <h1 className="text-2xl font-bold tracking-wider leading-loose"> Welcome to the Foodie-club! </h1>
                    <h3 className="tracking-wider"> Your go-to place for inspiration and cooking ideas </h3>
                </div>
                <div className="w-full">
                    ffkfk
                </div>
            </div>

        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
            <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </a>
        </footer>
        </div>
    )
}

export default Home
