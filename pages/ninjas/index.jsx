import styles from "@/styles/Ninjas.module.css"
import Link from "next/link"

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return { props: { ninjas: data } }
}



function Ninjas({ ninjas }) {
    const ninjasElements = ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id} className={styles.single}>
            <h3>{ninja.name}</h3>
        </Link>
    ))

    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjasElements}
        </div>
    )
}

export default Ninjas
