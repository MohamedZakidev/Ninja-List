import styles from "@/styles/Ninjas.module.css"

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return { props: { ninjas: data } }
}

function Ninjas({ ninjas }) {

    const ninjasElements = ninjas.map(ninja => (
        <div key={ninja.id}>
            <a href="" className={styles.single}>
                <h3>{ninja.name}</h3>
            </a>
        </div>
    ))

    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjasElements}
        </div>
    )
}

export default Ninjas
