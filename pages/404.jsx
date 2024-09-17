import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => router.push("/"), 3000)
    }, [router])

    return (
        <div className='not-found'>
            <h1>Ooooops....</h1>
            <h2>That page cannot be found</h2>
            <Link href={"/"}>Go back to the Home page</Link>
        </div>
    )
}

export default NotFound
